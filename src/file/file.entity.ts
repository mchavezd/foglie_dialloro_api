import { Entity, Column } from "typeorm";
import { IsOptional, IsDefined } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity } from "../core/basic_entity";
import { Field, ObjectType } from "@nestjs/graphql";

const { CREATE, UPDATE } = CrudValidationGroups;

@ObjectType()
@Entity("files")
export class FileEntity extends BasicEntity {
  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  url: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column({ type: "float" })
  width: number;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column({ type: "float" })
  height: number;
}
