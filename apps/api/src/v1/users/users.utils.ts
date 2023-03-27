import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AwsConfig } from 'src/interfaces/env.config.interface';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class UsersUtilsV1 {
  constructor(private configService: ConfigService) {}

  private validateImageMime(mimetype: string): void {
    const mimeRegex = new RegExp(/^image\/(jpg|jpeg|png)$/);

    if (!mimeRegex.test(mimetype)) {
      throw new BadRequestException(
        `Invalid image format, expected ('jpg' | 'jpeg' | 'png')`
      );
    }
  }

  private buildS3ImageUrl(
    s3Bucket: string,
    region: string,
    fileName: string
  ): string {
    return `https://${s3Bucket}.s3.${region}.amazonaws.com/${fileName}`;
  }

  async uploadImageToAws(userId: string, imgData: Express.Multer.File) {
    const { region, client, s3Bucket } =
      this.configService.get<AwsConfig>('aws');

    const { buffer, mimetype } = imgData;

    this.validateImageMime(mimetype);

    const imgFormat = mimetype.split('/')[1];
    const fileName = `${userId}.${imgFormat}`;

    try {
      const s3 = new S3Client({
        credentials: {
          accessKeyId: client.accessKey,
          secretAccessKey: client.secretKey,
        },
        region,
      });

      const readableStream = Readable.from(buffer);

      const s3Params: PutObjectCommandInput = {
        Bucket: s3Bucket,
        Key: fileName,
        Body: readableStream,
      };

      const uploadImg = new Upload({
        client: s3,
        params: s3Params,
      });

      await uploadImg.done();

      return this.buildS3ImageUrl(s3Bucket, region, fileName);
    } catch (err) {
      throw new InternalServerErrorException(
        'Error uploading image, try again later'
      );
    }
  }
}
