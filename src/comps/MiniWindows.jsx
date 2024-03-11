/* eslint-disable react/prop-types */
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";


const MiniWindows = ( {title, content, state = false} ) => {
    const [openState, setOpenState] = useState(state);

    const toggleText = () => {
        setOpenState((prevState) => !prevState); // Functional update form
    };
  return (
    <div className="border border-[#b5b5b5] myShadow">
        <div onClick={toggleText} className="cursor-pointer flex justify-between p-2 bg-[#fff4f7]">
            <h2 className="font-bold text-[#dd7b94]">˗ˏˋ {title} ´ˎ˗</h2>
            <div className="flex myIcons h-full text-lg">
                <div className="border border-[#c5c5c5]">{openState ? (<HiOutlineChevronUp />) : (<HiOutlineChevronDown />)}</div>
            </div>
        </div>
        {openState && (
        <div className="border-t border-[#b5b5b5] bg-white p-3">
            {content}
        </div>
        )}
    </div>
  )
}

export default MiniWindows