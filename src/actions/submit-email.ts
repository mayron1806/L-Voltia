'use server';

import { firestore } from "@/lib/db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const submitEmail = async (prevState: any, formData: FormData) => {
  const email = formData.get('email');
  const emailSchema = z.string({ message: "Email inválido" }).email("Email inválido");
  const result = emailSchema.safeParse(email);
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message};
  }
  try {
    const emailsCollectionPath = process.env.EMAILS_COLLECTIONS!;
    await firestore.collection(emailsCollectionPath).doc(result.data).set({ email: result.data });
    redirect('/congratulations');
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
  }
  return {};
}