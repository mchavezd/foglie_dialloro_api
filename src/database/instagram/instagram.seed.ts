import { InstagramEntity } from "src/instagram/instagram.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { InstagramEntity } from "../../../dist/instagram/instagram.entity";

export default class CreateInstagram implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(InstagramEntity)().seed();
  }
}
