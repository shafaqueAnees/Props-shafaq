import NameComponent from "./name";
import TeacherComponent from "./teacher";
import DishComponent from "./dish";

const ParentComponent = () => {
  let name = "I am Shafaque Anees !- Quarter # 02, 11th Assignment Props";
  let teacher = "Sir Ali Jawwad! is Our Qurater 2 Teacher -------";
  let dish = "I like to eat all sea food in winter--------------------!";

  return (
    <div className="mt-10">
      <NameComponent name={name} />
      <TeacherComponent teacher={teacher} />
      <DishComponent dish={dish} />
    </div>
  );
};

export default ParentComponent;
