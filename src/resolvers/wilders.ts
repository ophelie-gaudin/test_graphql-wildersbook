import { Like } from "typeorm";
import { Resolver, Query, Arg, ID, Mutation } from "type-graphql";
import Wilder, { WilderCreateInput } from "../entities/Wilder";
import datasource from "../utils";

@Resolver()
export class WildersResolver {
  @Mutation(() => Wilder)
  async createWilder(@Arg("input") input: WilderCreateInput): Promise<Wilder> {
    return await datasource.getRepository(Wilder).save(input);
  }

  @Mutation(() => Boolean)
  async deleteWilder(@Arg("id", () => ID) id: number): Promise<Boolean> {
    const deleteResult = await datasource.getRepository(Wilder).delete(id);

    return deleteResult.affected === 1;
  }

  @Query(() => [Wilder])
  async wilders(
    @Arg("search", { nullable: true }) search: string
  ): Promise<Wilder[]> {
    console.log("search", search);

    return await datasource.getRepository(Wilder).find({
      relations: ["upvotes", "upvotes.skill"],
      where: search ? { name: Like(`%${search}%`) } : {},
    });
  }

  @Query(() => Wilder, { nullable: true })
  async wilder(@Arg("id", () => ID) id: number): Promise<Wilder | null> {
    return await datasource
      .getRepository(Wilder)
      .findOne({ where: { id }, relations: ["upvotes", "upvotes.skill"] });
  }
}
