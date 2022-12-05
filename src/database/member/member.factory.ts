import * as Faker from "faker";
import { MemberEntity } from "src/member/member.entity";
import { define } from "typeorm-seeding";
// import { MemberEntity } from "../../../dist/member/member.entity";

define(MemberEntity, (faker: typeof Faker) => {
  const member = new MemberEntity();

  const firstName = faker.name.findName();
  member.firstNameAz = firstName;
  member.firstNameEn = `${firstName} en`;
  member.firstNameRu = `${firstName} ru`;

  const lastName = faker.name.lastName();
  member.lastNameAz = lastName;
  member.lastNameEn = `${lastName} en`;
  member.lastNameRu = `${lastName} ru`;

  const position = faker.name.jobTitle();
  member.positionAz = position;
  member.positionEn = `${position} en`;
  member.positionRu = `${position} ru`;

  return member;
});
