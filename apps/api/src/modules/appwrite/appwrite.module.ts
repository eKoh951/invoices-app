import { Module, Global } from '@nestjs/common';
import { AppwriteService } from './appwrite.service';

@Global()
@Module({
  providers: [AppwriteService],
  exports: [AppwriteService],
})
export class AppwriteModule {}
