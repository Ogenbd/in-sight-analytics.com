"use server";
import "server-only";

import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";
import { env } from "@/env";
import { submissionSchema } from "@/lib/schema";

import type { SubmissionSchema } from "@/lib/schema";

const resend = new Resend(env.RESENDKEY);

export default async function contact(submission: SubmissionSchema) {
  const { error: parsingError, data: parsingData } =
    submissionSchema.safeParse(submission);
  if (parsingError) {
    const formatted = parsingError.format();
    console.log(parsingError.format());
    return {
      success: false,
      error: {
        name: formatted.name?._errors[0],
        email: formatted.email?._errors[0],
        subject: formatted.subject?._errors[0],
        content: formatted.content?._errors[0],
      },
    };
  }
  const { data, error } = await resend.emails.send({
    from: "noreply@notifications.in-sight-analytics.com",
    to: ["grisha@in-sight-analytics.com"],
    // to: ["grisha@in-sight-analytics.com"],
    subject: "In-sight-analytics contact form submission",
    react: EmailTemplate(parsingData),
  });
  if (error) {
    return { success: false, error: { server: "Server error" } };
  }
  return { success: true };
}
