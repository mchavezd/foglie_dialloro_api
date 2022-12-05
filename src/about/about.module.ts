import { Module } from "@nestjs/common";
import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";
import { AboutResolver } from "./about.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutEntity } from "./about.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AboutEntity])],
  controllers: [AboutController],
  providers: [AboutService, AboutResolver],
})
export class AboutModule {}
