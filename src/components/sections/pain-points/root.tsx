type Props = {
  children: React.ReactNode
}
const PainPointsRoot = ({ children }: Props) => {
  return ( 
    <ul className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </ul>
  );
}
 
export default PainPointsRoot;