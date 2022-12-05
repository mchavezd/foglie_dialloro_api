import { Module, HttpModule } from "@nestjs/common";
import { InstagramController } from "./instagram.controller";
import { InstagramService } from "./instagram.service";
import { InstagramResolver } from "./instagram.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InstagramEntity } from "./instagram.entity";

@Module({
  imports: [TypeOrmModule.forFeature([InstagramEntity]), HttpModule],
  controllers: [InstagramController],
  providers: [InstagramService, InstagramResolver],
})

export class InstagramModule {}
