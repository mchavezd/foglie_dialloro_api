import { Module } from "@nestjs/common";
import { PricingController } from "./pricing.controller";
import { PricingService } from "./pricing.service";
import { PricingResolver } from "./pricing.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PricingEntity } from "./pricing.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PricingEntity])],
  controllers: [PricingController],
  providers: [PricingService, PricingResolver],
})
export class PricingModule {}
