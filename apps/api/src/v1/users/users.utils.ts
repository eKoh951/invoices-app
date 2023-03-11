import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AwsConfig } from 'src/interfaces/env.config.interface';
import * as aws from 'aws-sdk';

@Injectable()
export class UsersUtilsV1 {
  constructor(private configService: ConfigService) {}

  async uploadImageToAws(userId: string, imgData: Express.Multer.File): Promise<string> {
    const { client, s3Bucket } = this.configService.get<AwsConfig>('aws');
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
      const s3 = new aws.S3({
        credentials: {
          accessKeyId: client.accessKey,
          secretAccessKey: client.secretKey,
        },
      });

      const s3Params: aws.S3.PutObjectRequest = {
        Bucket: s3Bucket,
        Key: fileName,
        Body: buffer,
      };

      const uploadImg = s3.upload(s3Params);
      const response = await uploadImg.promise();

      return response.Location;
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
