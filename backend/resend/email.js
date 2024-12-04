import { verificationTokenEmailTemplate } from "./email-templates.js";
import { resend } from "./resend.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Verify your email address",
      html: verificationTokenEmailTemplate.replace(
        "{verificationToken}",
        verificationToken
      ),
    });
    console.log("Email sent response:", response);
  } catch (error) {
    console.log(`Error sending verification email: ${error}`);
    throw new Error("Error sending verification email!");
  }
};
