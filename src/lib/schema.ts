import { z } from "zod";

export const submissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().trim().email({ message: "Invalid Email address" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at lease 3 characters long" }),
  content: z
    .string()
    .trim()
    .min(1, { message: "Submission must contain message" }),
});

export type SubmissionSchema = z.infer<typeof submissionSchema>;
