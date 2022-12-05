import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { IsOptional, IsDefined } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity } from "../core/basic_entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { FileEntity } from "../file/file.entity";

const { CREATE, UPDATE } = CrudValidationGroups;

@ObjectType()
@Entity("about")
export class AboutEntity extends BasicEntity {
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
  textAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  textEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  textRu: string;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image: FileEntity;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image1: FileEntity;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image2: FileEntity;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image3: FileEntity;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image4: FileEntity;
}
