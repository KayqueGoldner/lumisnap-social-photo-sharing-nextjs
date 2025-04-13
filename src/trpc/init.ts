import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import SuperJSON from "superjson";

import { auth } from "@/lib/auth";

export const createTRPCContext = cache(async () => {
  const session = await auth();

  return { authUser: session?.user };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(
  async function isAuthed(opts) {
    const { ctx } = opts;

    if (!ctx.authUser?.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return opts.next({
      ctx: { ...ctx, user: ctx.authUser },
    });
  },
);
