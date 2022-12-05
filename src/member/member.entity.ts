import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { IsOptional, IsDefined } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity } from "../core/basic_entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { FileEntity } from "../file/file.entity";

const { CREATE, UPDATE } = CrudValidationGroups;

@ObjectType()
@Entity("members")
export class MemberEntity extends BasicEntity {
  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  firstNameAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  firstNameEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  firstNameRu: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  lastNameAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  lastNameEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  lastNameRu: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  positionAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  positionEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  positionRu: string;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image: FileEntity;
}
