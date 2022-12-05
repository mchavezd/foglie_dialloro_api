import * as Faker from "faker";
import { PricingEntity } from "src/pricing/pricing.entity";
import { define } from "typeorm-seeding";
// import { PricingEntity } from "../../../dist/pricing/pricing.entity";

define(PricingEntity, (faker: typeof Faker) => {
  const pricing = new PricingEntity();

  const title = faker.lorem.words(2);
  pricing.titleAz = title;
  pricing.titleEn = `${title} en`;
  pricing.titleRu = `${title} ru`;

  const description = faker.lorem.paragraph();
  pricing.descriptionAz = description;
  pricing.descriptionEn = `${description} en`;
  pricing.descriptionRu = `${description} ru`;

  return pricing;
});
