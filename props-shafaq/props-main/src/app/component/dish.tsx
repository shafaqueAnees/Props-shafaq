import Image from "next/image";

interface DishProps {
  dish: string;
}

const DishComponent = (props: DishProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-slate-300 p-6 md:p-10 gap-6 md:gap-10">
    <h1 className="text-2xl sm:text-3xl md:text-5xl text-center text-sky-950 w-full md:w-auto">
      {props.dish}
    </h1>
    <Image
      src="/sea.jpg"
      alt="biryani"
      id="img"
      width={300}
      height={300}
      className="md:w-60 md:h-60 w-40 h-40 object-cover rounded-full border-4 border-x-neutral-700"
    />
  </div>

  );
};

export default DishComponent;
