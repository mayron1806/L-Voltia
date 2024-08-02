import HomeWeb from "@/components/pages/home-web";
import HomeWhatsapp from "@/components/pages/home-whatsapp";
import { Metadata } from "next";

const metadataWhatsapp: Metadata = {
  title: "Zoldy / Whatsapp com super poderes",
  description: "Transforme seu WhatsApp em uma máquina de vendas 100% automatizada e deixe seus concorrentes para trás!",
  openGraph: {
    type: 'website',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    images: [{ url: '/logo.png' }],
  }
};
const metadataWeb: Metadata = {
  title: "Zoldy / Automatize seu E-commerce",
  description: "Aumente as vendas e a satisfação dos seus clientes com o nosso chat 100% automatizado!",
  openGraph: {
    type: 'website',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    images: [{ url: '/logo.png' }],
  }
};
export async function generateMetadata({ searchParams }: { searchParams: { template?: string }}) {
  if(!searchParams?.template) return metadataWeb;
  if(searchParams.template === 'whatsapp') return metadataWhatsapp;
  return metadataWeb;
}

const Home = ({ searchParams }: {searchParams: { template?: 'whatsapp' | 'web' }}) => {
  return searchParams.template === 'whatsapp' ? <HomeWhatsapp /> : <HomeWeb />;
}
 
export default Home;