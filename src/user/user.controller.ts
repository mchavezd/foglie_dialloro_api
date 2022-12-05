import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";

@Crud({
  model: {
    type: UserEntity,
  },
  query: {
    exclude: ["password"],
  },
  routes: {
    exclude: ["deleteOneBase", "updateOneBase"],
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/user")
export class UserController {
  constructor(public service: UserService) {}
}
