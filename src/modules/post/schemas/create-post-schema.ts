import { z } from "zod";

import { Visibility } from "@/generated/prisma";

export const createPostSchema = z.object({
  content: z.string().optional(),
  image: z.string().min(1),
  visibility: z.nativeEnum(Visibility),
  location: z.string().min(1),
  category: z.string().min(1),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
