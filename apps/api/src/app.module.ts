import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModuleV1 } from "./v1/users/users.module";
import { InvoicesModuleV1 } from "./v1/invoices/invoices.module";

import { ValidateAccessToken } from "./middlewares/auth.middleware";
import envConfig from "./config/env.config";

@Module({
  imports: [
    ConfigModule.forRoot({ load: [envConfig] }),
    UsersModuleV1,
    InvoicesModuleV1,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateAccessToken).forRoutes("*");
  }
}
