import { Resolver, Query } from "@nestjs/graphql";
import { PricingService } from "./pricing.service";
import { PricingEntity } from "./pricing.entity";

@Resolver(() => PricingEntity)
export class PricingResolver {
  constructor(private readonly pricingService: PricingService) {}

  @Query(() => [PricingEntity])
  async pricings() {
    return this.pricingService.find({ order: { id: "ASC" } });
  }
}
