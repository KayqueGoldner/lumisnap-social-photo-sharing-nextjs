import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { createPostSchema } from "@/modules/post/schemas/create-post-schema";
import { prisma } from "@/lib/prisma";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const { content, image, visibility, location, category } = input;

      if (!user.id) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to create a post",
        });
      }

      const post = await prisma.post.create({
        data: {
          content,
          image,
          visibility,
          location,
          category,
          authorId: user.id,
        },
      });

      return post;
    }),
});
