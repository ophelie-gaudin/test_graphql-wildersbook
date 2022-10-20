import { Resolver, Query } from "type-graphql";
import Skill from "../entities/Skill";
import datasource from "../utils";

@Resolver()
export class SkillsResolver {
  // @Mutation(() => Skill)
  // async createSkill(@Arg("name") name: string): Promise<Skill> {
  //   return await datasource.getRepository(Skill).save({ name });
  // }

  @Query(() => [Skill])
  async skills(): Promise<Skill[]> {
    return await datasource
      .getRepository(Skill)
      .find({ relations: ["upvotes", "upvotes.wilder"] });
  }

  // @Query(() => Skill, { nullable: true })
  // async skill(@Arg("id", () => ID) id: number): Promise<Skill | null> {
  //   return await datasource
  //     .getRepository(Skill)
  //     .findOne({ where: { id }, relations: ["upvotes", "upvotes.skill"] });
  // }
}
