import { FileEntity } from "src/file/file.entity";
import { MemberEntity } from "src/member/member.entity";
import { Factory, Seeder } from "typeorm-seeding";
// import { MemberEntity } from "../../../dist/member/member.entity";
// import { FileEntity } from "../../../dist/file/file.entity";

export default class CreateMember implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(MemberEntity)()
      .map(async (member) => {
        const image = await factory(FileEntity)().seed();
        member.image = image;
        return member;
      })
      .seedMany(8);
  }
}
