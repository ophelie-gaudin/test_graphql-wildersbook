import { Resolver, Query } from "type-graphql";
import { getRepository } from "typeorm";
import Wilder from "../entities/Wilder";
import datasource from "../utils";

@Resolver()
export class WildersResolver {
  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    return await datasource.getRepository(Wilder).find();
  }
}
