import { FileEntity } from "src/file/file.entity";
import { SliderEntity } from "src/slider/slider.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { SliderEntity } from "../../../dist/slider/slider.entity";
// import { FileEntity } from "../../../dist/file/file.entity";

export default class CreateSlider implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(SliderEntity)()
      .map(async (slider) => {
        const image = await factory(FileEntity)().seed();
        slider.image = image;
        return slider;
      })
      .seedMany(3);
  }
}
