import { Controller, UseGuards } from "@nestjs/common";
import { MemberEntity } from "./member.entity";
import { AuthGuard } from "@nestjs/passport";
import { MembersService } from "./member.service";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: {
    type: MemberEntity,
  },
  query: {
    join: {
      image: {
        eager: true,
      },
    },
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/members")
export class MembersController {
  constructor(public service: MembersService) {}
}
