import { z } from 'zod';

export const BlogPostSchema = z.object({
  id: z
    .string()
    .regex(/^[0-9]+$/)
    .optional(),
  author: z.string().nonempty(),
  title: z.string().nonempty(),
  text: z.string().nonempty(),
  postdate: z.string(),
});

export type IBlogPost = z.infer<typeof BlogPostSchema>;
