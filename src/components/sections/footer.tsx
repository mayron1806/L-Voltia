import Logo from "../logo";

const Footer = () => {
  return ( 
    <footer className="py-5 flex justify-evenly items-center bg-foreground text-background">
      <Logo />
      <span className="font-bold opacity-80">© 2024 Zoldy - Todos os direitos reservados.</span>
    </footer>
  );
}
 
export default Footer;