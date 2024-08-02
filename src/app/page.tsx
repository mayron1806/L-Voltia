import HomeWeb from "@/components/pages/home-web";
import HomeWhatsapp from "@/components/pages/home-whatsapp";

const Home = ({ searchParams }: {searchParams: { template?: 'whatsapp' | 'web' }}) => {
  return searchParams.template === 'whatsapp' ? <HomeWhatsapp /> : <HomeWeb />;
}
 
export default Home;