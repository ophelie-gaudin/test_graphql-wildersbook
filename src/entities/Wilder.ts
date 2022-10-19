import { ObjectType, Field, ID } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

export default Wilder;
