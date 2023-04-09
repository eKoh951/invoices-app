import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppwriteService } from 'src/modules/appwrite/appwrite.service';
import { ID, InputFile, Storage } from 'node-appwrite';
import { ConfigService } from '@nestjs/config';
import { AppWBuckets } from 'src/config/interfaces/env.config.interface';

@Injectable()
export class UsersUtilsV1 {
  private readonly appwriteStorage: Storage;

  constructor(
    private configService: ConfigService,
    private appwriteService: AppwriteService
  ) {
    this.appwriteStorage = this.appwriteService.getStorage();
  }

  private validateImageMime(mimetype: string): void {
    const mimeRegex = new RegExp(/^image\/(jpg|jpeg|png)$/);

    if (!mimeRegex.test(mimetype)) {
      throw new BadRequestException(
        `Invalid image format, expected ('jpg' | 'jpeg' | 'png')`
      );
    }
  }

  async uploadImage(userId: string, imgData: Express.Multer.File) {
    const { buffer, mimetype } = imgData;

    this.validateImageMime(mimetype);

    const imgFormat = mimetype.split('/')[1];
    const fileName = `${userId}.${imgFormat}`;

    try {
      const { bucketId } =
        this.configService.get<AppWBuckets>('appwrite.buckets');

      const uploadedFile = await this.appwriteStorage.createFile(
        bucketId,
        ID.unique(),
        InputFile.fromBuffer(buffer, fileName)
      );

      console.log(uploadedFile);

      return uploadedFile;
    } catch (err) {
      throw new InternalServerErrorException(
        'Error uploading image, try again later'
      );
    }
  }
}
