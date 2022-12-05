import { PricingEntity } from "src/pricing/pricing.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { PricingEntity } from "../../../dist/pricing/pricing.entity";

export default class CreatePricing implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(PricingEntity)().seedMany(3);
  }
}
