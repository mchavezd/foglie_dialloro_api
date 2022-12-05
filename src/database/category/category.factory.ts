import * as Faker from "faker";
import { CategoryEntity } from "src/category/category.entity";
import { define } from "typeorm-seeding";
// import { CategoryEntity } from "../../../dist/category/category.entity";

define(CategoryEntity, (faker: typeof Faker) => {
  const category = new CategoryEntity();

  const name = faker.lorem.words(1);
  category.nameAz = name;
  category.nameEn = `${name} en`;
  category.nameRu = `${name} ru`;

  return category;
});
