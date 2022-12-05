import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { IsOptional, IsDefined } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity } from "../core/basic_entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectEntity } from "../project/project.entity";
 
const { CREATE, UPDATE } = CrudValidationGroups;

@ObjectType()
@Entity("categories")
export class CategoryEntity extends BasicEntity {
  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  nameAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  nameEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  nameRu: string;

  @Field(() => CategoryEntity, { nullable: true })
  @ManyToOne(() => CategoryEntity, (category) => category.children, {
    nullable: true,
  })
  parent: CategoryEntity;

  @Field(() => [CategoryEntity])
  @OneToMany(() => CategoryEntity, (category) => category.parent, {
    nullable: true,
  })
  children: CategoryEntity[];

  @Field(() => [ProjectEntity])
  @OneToMany(() => ProjectEntity, (project) => project.category)
  projects: ProjectEntity[];
}
