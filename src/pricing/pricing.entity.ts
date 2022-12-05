import { Entity, Column } from "typeorm";
import { IsOptional, IsDefined } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity } from "../core/basic_entity";
import { Field, ObjectType } from "@nestjs/graphql";

const { CREATE, UPDATE } = CrudValidationGroups;

@ObjectType()
@Entity("pricings")
export class PricingEntity extends BasicEntity {
  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  titleAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  titleEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  titleRu: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  descriptionAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  descriptionEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  descriptionRu: string;
}
