import { FileEntity } from "src/file/file.entity";
import { PostEntity } from "src/post/post.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { PostEntity } from "../../../dist/post/post.entity";
// import { FileEntity } from "../../../dist/file/file.entity";

export default class CreatePost implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(PostEntity)()
      .map(async (post) => {
        const image = await factory(FileEntity)().seed();
        post.image = image;
        return post;
      })
      .seedMany(10);
  }
}
