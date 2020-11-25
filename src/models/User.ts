import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity('user')
export class User extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
}