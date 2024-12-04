
interface NameProps {
    name: string;
  }
  
  const NameComponent = (props: NameProps) => {
    return (
      <div className="flex justify-center w-full bg-sky-950 text-red-100 p-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center whitespace-nowrap">
        {props.name}
      </h1>
    </div>
    
    
    );
  };
  
  export default NameComponent;
  