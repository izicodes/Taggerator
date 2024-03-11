import { FaRegWindowMinimize, FaRegWindowMaximize  } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-[#ffdce5] rounded-t-md border-b border-[#b5b5b5]">
        <div className="flex gap-1 items-center">
          <img src="../../src/assets/love.gif" alt="" className="h-fit"/>
          <h1 className="font-medium text-[#dd7b94]">Taggerator - tags extension creator</h1>
        </div>
        <div className="flex myIcons h-full text-lg">
        <div className="border border-[#c5c5c5]"><FaRegWindowMinimize /></div>
        <div className="border border-[#c5c5c5]"><FaRegWindowMaximize /></div>
        <div className="border border-[#c5c5c5]"><RxCross2 /></div>
        </div>
    </div>
  )
}

export default Header