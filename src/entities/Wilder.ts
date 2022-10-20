import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MinLength } from "class-validator";
import Upvote from "./Upvote";

@Entity()
@ObjectType()
class Wilder {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Upvote, "wilder")
  @Field(() => [Upvote])
  upvotes: Upvote[];
}

@InputType()
export class WilderCreateInput {
  @Field()
  @MinLength(2)
  name: string;
}

export default Wilder;
