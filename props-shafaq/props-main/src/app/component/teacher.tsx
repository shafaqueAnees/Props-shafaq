import Image from "next/image";

interface TeacherProps {
  teacher: string;
}

const TeacherComponent = (props: TeacherProps) => {
  return (
    <div>
    {/* Teacher Section */}
    <div className="flex flex-col md:flex-row items-center bg-slate-300 p-6 md:p-10 gap-6 md:gap-10">
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-blue-950 w-full md:w-auto text-center">
        {props.teacher}
      </h1>
      <Image
        src="/sirali.png"
        alt="teacher"
        id="img"
        width={300}
        height={300}
        className="md:w-60 md:h-60 w-40 h-40 object-cover rounded-full border-4 border-x-neutral-700"
      />
    </div>
    </div>
  
  
  );
};

export default TeacherComponent;
