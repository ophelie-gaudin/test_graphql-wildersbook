import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Upvote from "./Upvote";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Upvote, "skill")
  @Field(() => [Upvote])
  upvotes: Upvote[];
}

export default Skill;
