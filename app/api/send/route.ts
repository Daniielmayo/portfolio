import { EmailTemplate } from "../../../components/Contact/template-emailResend";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, textarea } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["vargasmayo.c99@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName, email, textarea }),
    });
    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
