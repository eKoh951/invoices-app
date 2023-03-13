import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AwsConfig } from 'src/interfaces/env.config.interface';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './dto/users.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersUtilsV1 {
  constructor(
    private configService: ConfigService,
    @InjectModel('Users') private usersModel: Model<UserDto>
  ) {}

  async findUserInMongo(emailOrUsername: string) {
    const userInMongo = await this.usersModel.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!userInMongo) {
      throw new NotFoundException(`User not found.`);
    }

    return userInMongo;
  }

  async uploadImageToAws(userId: string, imgData: Express.Multer.File) {
    const { region, client, s3Bucket } =
      this.configService.get<AwsConfig>('aws');
      
    const { buffer, mimetype } = imgData;

    if (!this.parseImageMime(mimetype)) {
      throw new BadRequestException(
        `Invalid image format, expected ('jpg' | 'jpeg' | 'png')`
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
        params: s3Params,
      });

      await uploadImg.done();

      return `https://${s3Bucket}.s3.${region}.amazonaws.com/${fileName}`;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException(
        'Error uploading image, try again later'
      );
    }
  }

  parseImageMime(mimetype: string): boolean {
    const mimeRegex = new RegExp(/^image\/(jpg|jpeg|png)$/);

    return mimeRegex.test(mimetype);
  }
}
