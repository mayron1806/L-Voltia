'use client';
import Link from "next/link";
const MainButton = () => {
  return (
    <div className="relative">
      <Link
        href="#form"
        className="bg-primary text-background text-xl font-bold p-5 border-primary flex items-center space-x-2"
      >Automatizar Whatsapp</Link>
    </div>
  );
}
 
export default MainButton;