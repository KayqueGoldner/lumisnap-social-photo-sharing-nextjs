import { createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  test: protectedProcedure.query(() => {
    return "Hello World";
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
