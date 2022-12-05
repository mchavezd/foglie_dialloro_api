import { Module } from "@nestjs/common";
import { SliderController } from "./slider.controller";
import { SliderService } from "./slider.service";
import { SliderResolver } from "./slider.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SliderEntity } from "./slider.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SliderEntity])],
  controllers: [SliderController],
  providers: [SliderService, SliderResolver],
})
export class SliderModule {}
