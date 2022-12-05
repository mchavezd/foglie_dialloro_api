import { Module } from "@nestjs/common";
import { MembersController } from "./member.controller";
import { MembersService } from "./member.service";
import { MemberEntity } from "./member.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembersResolver } from "./member.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity])],
  controllers: [MembersController],
  providers: [MembersService, MembersResolver],
})
export class MembersModule {}
