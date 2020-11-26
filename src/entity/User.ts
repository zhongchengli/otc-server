import { Company } from './Company';
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity('user')
export class User extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  firstName: string;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  lastName: string;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  email: string;

  @Field(() => String)
  @Column({ type: "text", nullable: false })
  mobile: string;

  @Field()
  @ManyToOne(() => Company, { eager: true })
  @JoinColumn({ name: "companyid", referencedColumnName: 'id' })
  company: Company;


}