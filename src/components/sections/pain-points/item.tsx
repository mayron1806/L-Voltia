type Props = {
  title: string;
  description: string;
}
const PainPointItem = ({ description, title }: Props) => {
  return (
    <div className="w-full">
      <div
        className={
          "shadow-md shadow-foreground/40 w-full bg-foreground text-background hover:scale-110 ease-in-out transition-all overflow-hidden relative h-80 rounded-lg flex flex-col justify-center p-6"
        }
      >
        <div className="text relative flex flex-col gap-5 z-50 text-center">
          <h3 className="font-bold text-secondary text-lg relative">
            {title}
          </h3>
          <p className="font-normal relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default PainPointItem;