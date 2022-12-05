import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as compression from "compression";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use(helmet());
  app.use(compression());

  const port = process.env.PORT || 4400;
  Logger.log(`Listening on: http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
