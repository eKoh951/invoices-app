import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AwsConfig } from 'src/interfaces/env.config.interface';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, PutObjectCommandInput, CompleteMultipartUploadCommand, CompleteMultipartUploadCommandInput } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class UsersUtilsV1 {
  constructor(private configService: ConfigService) {}

  async uploadImageToAws(userId: string, imgData: Express.Multer.File) {
    const { region, client, s3Bucket } = this.configService.get<AwsConfig>('aws');
    const { buffer, mimetype } = imgData;

    if (!this.parseImageMime(mimetype)) {
      throw new HttpException(
        `Invalid image format, expected ('jpg' | 'jpeg' | 'png')`,
        HttpStatus.BAD_REQUEST
      );
    }

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
        params: s3Params
      });

      await uploadImg.done();

      return `https://${s3Bucket}.s3.${region}.amazonaws.com/${fileName}`;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Error uploading image, try again later',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  parseImageMime(mimetype: string): boolean {
    const mimeRegex = new RegExp(/^image\/(jpg|jpeg|png)$/);

    return mimeRegex.test(mimetype);
  }
}
