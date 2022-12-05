import { AboutEntity } from "src/about/about.entity";
import { FileEntity } from "src/file/file.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { AboutEntity } from "../../../dist/about/about.entity";
// import { FileEntity } from "../../../dist/file/file.entity";

export default class CreateAbout implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(AboutEntity)()
      .map(async (about) => {
        const image = await factory(FileEntity)().seed();
        about.image = image;
        about.image1 = image;
        about.image2 = image;
        about.image3 = image;
        about.image4 = image;
        return about;
      })
      .create();
  }
}
