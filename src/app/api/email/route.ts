import { firestore } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const email = body?.email;
  const emailSchema = z.string({ message: "Email inválido" }).email("Email inválido");
  const result = emailSchema.safeParse(email);
  if (!result.success) {
    return NextResponse.json({ success: false, error: result.error.issues[0].message}, { status: 400 });
  }

  try {
    const emailsCollectionPath = process.env.EMAILS_COLLECTIONS!;
    const template = req.nextUrl.searchParams.get('template') === 'whatsapp' ? 'whatsapp' : 'web';
    const email = result.data;
    
    await firestore.collection(`${emailsCollectionPath}-${template}`).doc(result.data).set({ email });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
  }
  return NextResponse.json({ success: true });
}