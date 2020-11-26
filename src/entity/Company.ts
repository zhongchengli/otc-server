import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ID } from 'type-graphql';
import { Field } from 'type-graphql';
import { ObjectType } from 'type-graphql';
import { BaseEntity, Entity } from 'typeorm';

@ObjectType()
@Entity('company')
export class Company extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  name: string;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  address1: string;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  address2: string;

  @Field(() => Boolean)
  @Column({ type: "bool", nullable: false, default: true })
  public enabled?: boolean;
}