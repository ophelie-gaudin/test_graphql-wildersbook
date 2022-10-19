import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Skill from "./Skill";
import Wilder from "./Wilder";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
class Upvote {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ default: 0 })
  @Field()
  counter: number;

  @ManyToOne(() => Wilder, "upvotes", { onDelete: "CASCADE" })
  @Field(() => Wilder)
  wilder: Wilder;

  @ManyToOne(() => Skill, "upvotes", { onDelete: "CASCADE" })
  @Field(() => Skill)
  skill: Skill;

  // relations: {
  //   wilder: {
  //     target: "Wilder",
  //     type: "many-to-one",
  //     inverseSide: "upvotes",
  //   },
  //   skill: {
  //     target: "Skill",
  //     type: "many-to-one",
  //     inverseSide: "upvotes",
  //   },
  // },
}

export default Upvote;
