import Image from "next/image";

const Logo = ({ height = 250, width = 250}: { width?: number, height?: number }) => {
  return ( 
    <Image src="/logo.png" alt="Logo" width={width} height={height} />
  );
}
 
export default Logo;