import { z } from "zod";

export const createPostSchema = z.object({
  content: z.string().min(1),
  images: z.array(z.string()).min(1),
  location: z.string().min(1),
  tags: z.array(z.string()).min(1),
  category: z.string().min(1),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
