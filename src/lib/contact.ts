"use server";
import "server-only";

import { Resend } from "resend";
import { z } from "zod";

import EmailTemplate from "@/components/EmailTemplate";
import { env } from "@/env";

const resend = new Resend(env.RESENDKEY);

const submissionSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid Email address" }),
  subject: z.string(),
  content: z.string(),
});

type Submission = z.infer<typeof submissionSchema>;

export default async function contact(submission: Submission) {
  const { error: parsingError, data: parsingData } =
    submissionSchema.safeParse(submission);
  if (parsingError) {
    console.log(parsingError);
    return "emailfield";
  }
  console.log(parsingData);
  // return "success";
  const { data, error } = await resend.emails.send({
    from: "noreply@in-sight-analytics.com",
    to: ["grisha@in-sight-analytics.com"],
    subject: "In-sight-analytics form submission",
    react: EmailTemplate(parsingData),
  });
  if (error) {
    console.log("error sending email: ", error);
    return "senderror";
  }
  return "success";
}
