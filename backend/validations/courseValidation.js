import { z } from 'zod';

const courseSchema = z.object({
  name: z.string().min(1, 'Course name is required.'),
  price: z.number().nonnegative('Price must be a positive number.'),
  description: z.string().min(1, 'Description is required.'),
});

export { courseSchema };
