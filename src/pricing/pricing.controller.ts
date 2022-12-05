import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PricingEntity } from "./pricing.entity";
import { Crud } from "@nestjsx/crud";
import { PricingService } from "./pricing.service";

@Crud({
  model: {
    type: PricingEntity,
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/pricings")
export class PricingController {
  constructor(public service: PricingService) {}
}
