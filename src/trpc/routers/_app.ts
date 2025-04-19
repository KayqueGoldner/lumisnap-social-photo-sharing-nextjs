import { postRouter } from "@/modules/post/server/procedure";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  post: postRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
