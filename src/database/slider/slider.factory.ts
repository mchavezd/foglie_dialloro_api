import * as Faker from "faker";
import { SliderEntity } from "src/slider/slider.entity";
import { define } from "typeorm-seeding";
// import { SliderEntity } from "../../../dist/slider/slider.entity";

define(SliderEntity, (faker: typeof Faker) => {
  const slider = new SliderEntity();

  const title = faker.lorem.words(2);
  slider.titleAz = title;
  slider.titleEn = `${title} en`;
  slider.titleRu = `${title} ru`;

  const subtitle = faker.lorem.words(2);
  slider.subtitleAz = subtitle;
  slider.subtitleEn = `${subtitle} en`;
  slider.subtitleRu = `${subtitle} ru`;

  const description = faker.lorem.paragraph();
  slider.descriptionAz = description;
  slider.descriptionEn = `${description} en`;
  slider.descriptionRu = `${description} ru`;

  return slider;
});
