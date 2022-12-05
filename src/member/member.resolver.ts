import { Resolver, Query } from "@nestjs/graphql";
import { MembersService } from "./member.service";
import { MemberEntity } from "./member.entity";

@Resolver(() => MemberEntity)
export class MembersResolver {
  constructor(private readonly membersService: MembersService) {}

  @Query(() => [MemberEntity])
  async members() {
    return this.membersService.find({
      relations: ["image"],
      order: { id: "ASC" },
    });
  }
}
