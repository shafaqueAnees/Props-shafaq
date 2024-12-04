import ChildCmpt from "./components/childCmpt";
import Button from "./components/btn";
import BgColor from "./components/BgClr";


export default function Home() {
  return <div>
    <ChildCmpt />
    <Button btnText="Login" />
    <Button btnText="Logout" />
    <BgColor bgclr="bg-blue-500" />
<BgColor bgclr="bg-green-300" />

  </div>
}
