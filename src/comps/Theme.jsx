import Btn from "./Btn"
import { useEffect } from "react";
const Theme = () => {

    const allContainers = document.querySelectorAll(".myColorSelect");

    for (const group of allContainers){
        group.classList.remove("select");
    }

    useEffect(() => {
        const getTheme = JSON.parse(localStorage.getItem("themeSet"));
        if (getTheme) {
            const themeID = getTheme.id;
            const chosenDiv = document.getElementById(themeID);
            chosenDiv.classList.add('select');
        } else {
            document.getElementById('PinkSet').classList.add('select');
        }
      }, []);

    const selectBtnClick = (e) => {
        const allContainers = document.querySelectorAll(".myColorSelect");

        for (const group of allContainers){
            group.classList.remove("select");
        }

        e.currentTarget.closest(".myColorSelect").classList.add("select");
        const colorSetData = e.currentTarget.dataset.colors.split(",").map(color => color.trim());
        const colorSetID = e.currentTarget.closest(".myColorSelect").id;

        // Create the object with keys for "light", "medium", and "dark"
        const colorSetObject = {
            light: colorSetData[0],
            medium: colorSetData[1],
            dark: colorSetData[2],
            id: colorSetID
        };

        // Save colorSetObject to localStorage
        localStorage.setItem("themeSet", JSON.stringify(colorSetObject));
    }


  return (
    <div>
        <div>
            <p className="mb-2">
                Obviously pink is not for everyone, so choose the colour theme for your extension~!
            </p>
            <p>➼ This will create the <span className="font-bold">styles.css</span> file of the extension~!</p>
        </div>
        <hr className="myHR w-1/2 m-auto my-5"/>
        <div className="grid grid-cols-3 gap-2 w-full place-items-center mb-2">
            <div className="myColorSelect" id="PinkSet">
                <div className="colorCon">
                    <div className="myColorBoxes bg-[#fff4f7]"></div>
                    <div className="myColorBoxes bg-[#ffdce5]"></div>
                    <div className="myColorBoxes bg-[#dd7b94]"></div>
                </div>
                <p>Pink</p>
                <Btn content="Select" style="text-xs" onclick={selectBtnClick} dataColorSet="#fff4f7, #ffdce5, #dd7b94" />
            </div>
            <div className="myColorSelect" id="PurpleSet">
                <div className="colorCon">
                    <div className="myColorBoxes bg-[#fff4fe]"></div>
                    <div className="myColorBoxes bg-[#ffdcfd]"></div>
                    <div className="myColorBoxes bg-[#dd7bd3]"></div>
                </div>
                <p>Purple</p>
                <Btn content="Select" style="text-xs" onclick={selectBtnClick} dataColorSet="#fff4fe, #ffdcfd, #dd7bd3"/>
            </div>
            <div className="myColorSelect" id="BlueSet">
                <div className="colorCon">
                    <div className="myColorBoxes bg-[#f4f4ff]"></div>
                    <div className="myColorBoxes bg-[#dce3ff]"></div>
                    <div className="myColorBoxes bg-[#7b8fdd]"></div>
                </div>
                <p>Blue</p>
                <Btn content="Select" style="text-xs" onclick={selectBtnClick} dataColorSet="#f4f4ff, #dce3ff, #7b8fdd"/>
            </div>
            <div className="myColorSelect" id="GreenSet">
                <div className="colorCon">
                    <div className="myColorBoxes bg-[#fefae0]"></div>
                    <div className="myColorBoxes bg-[#ccd5ae]"></div>
                    <div className="myColorBoxes bg-[#588157]"></div>
                </div>
                <p>Green</p>
                <Btn content="Select" style="text-xs" onclick={selectBtnClick} dataColorSet="#fefae0, #ccd5ae, #588157"/>
            </div>
            <div className="myColorSelect" id="OrangeSet">
                <div className="colorCon">
                    <div className="myColorBoxes bg-[#ffe9df]"></div>
                    <div className="myColorBoxes bg-[#f7b799]"></div>
                    <div className="myColorBoxes bg-[#e0826d]"></div>
                </div>
                <p>Orange</p>
                <Btn content="Select" style="text-xs" onclick={selectBtnClick} dataColorSet="#ffe9df, #f7b799, #e0826d"/>
            </div>
            <div className="myColorSelect" id="BrownSet">
                <div className="colorCon">
                    <div className="myColorBoxes bg-[#f9f3eb]"></div>
                    <div className="myColorBoxes bg-[#e3d5ca]"></div>
                    <div className="myColorBoxes bg-[#786153]"></div>
                </div>
                <p>Brown</p>
                <Btn content="Select" style="text-xs" onclick={selectBtnClick} dataColorSet="#f9f3eb, #e3d5ca, #786153"/>
            </div>
        </div>
    </div>
  )
}

export default Theme