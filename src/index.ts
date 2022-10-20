// changer les require par des import
import { ApolloServer } from "apollo-server";
import datasource from "./utils";
import { buildSchema } from "type-graphql";
import { WildersResolver } from "./resolvers/wilders";
import { SkillsResolver } from "./resolvers/skills";
import { UpvotesResolver } from "./resolvers/upvotes";

const PORT = 5000;

async function bootstrap(): Promise<void> {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [WildersResolver, SkillsResolver, UpvotesResolver],
  });

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
  });

  // Start the server
  await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available`);
  try {
    await datasource.initialize();
    console.log(`🚀  Server ready on port:5000`);
  } catch (err) {
    console.error("ERROR: ", err);
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
