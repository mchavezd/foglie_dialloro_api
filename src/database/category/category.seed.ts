import { CategoryEntity } from "src/category/category.entity";
import { FileEntity } from "src/file/file.entity";
import { ProjectEntity } from "src/project/project.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { CategoryEntity } from "../../../dist/category/category.entity";
// import { ProjectEntity } from "../../../dist/project/project.entity";
// import { FileEntity } from "../../../dist/file/file.entity";

export default class CreateCategories implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(CategoryEntity)()
      .map(async (category) => {
        const subCategories = await factory(CategoryEntity)().seedMany(3);
        category.children = subCategories;

        for (const subCategory of subCategories) {
          await factory(ProjectEntity)()
            .map(async (project) => {
              const image = await factory(FileEntity)().seed();
              project.image = image;
              project.category = subCategory;
              return project;
            })
            .seedMany(3);
        }
        return category;
      })
      .seedMany(2);
  }
}
