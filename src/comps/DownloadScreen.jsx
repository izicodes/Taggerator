/* eslint-disable react/no-unescaped-entities */
import Btn from "./Btn"
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";

const DownloadScreen = () => {
    const [manifestOpen, setManifestOpen] = useState(false);
    const [htmlOpen, setHtmlOpen] = useState(false);
    const [cssOpen, setCSSOpen] = useState(false);
    const [javascriptOpen, setJavaScriptOpen] = useState(false);
    const [logoOpen, setLogoOpen] = useState(false);

    const toggleText = (sectionId) => {
    switch (sectionId) {
        case "manifestSection":
            setManifestOpen(!manifestOpen);
            break;
        case "htmlSection":
            setHtmlOpen(!htmlOpen);
            break;
        case "cssSection":
            setCSSOpen(!cssOpen);
            break;
        case "jsSection":
            setJavaScriptOpen(!javascriptOpen);
            break;
        case "logoSection":
            setLogoOpen(!logoOpen);
            break;
    }
};
  return (
    <div className="flex flex-col place-items-center w-full">
        <div>
            <p className="mb-2">Time to download the files for each component for your tags extension!</p>
            <p>Download all the files <span className="font-medium underline decoration-double">if this is your first time</span> making your tags extension. Select an individual file if you've come back to make changes that affects that file.</p>
        </div>
        <hr className="myHR w-1/2 m-auto my-5"/>
        <h2 className="w-full font-bold text-[#e588a4]">₊˚ʚ Files</h2>
        <section className="w-full">
            <div className="myDownloadRow" id="manifestSection">
               <div>
                    <p className="flex gap-1 place-items-center">manifest.json <HiInformationCircle className="fill-[#dd7b94] text-base cursor-pointer" onClick={() => toggleText("manifestSection")}/></p>
                    <Btn title="♡ Download the file" content="Download" style="text-xs"/>
               </div>
                {manifestOpen && (
                    <p>
                        <span className="text-red-600 font-medium underline decoration-double">Must have this file</span> in order for the extension to work. Important data information about the extension.
                    </p>
                )}
            </div>
            <div className="myDownloadRow" id="htmlSection">
                <div>
                    <p className="flex gap-1 place-items-center">popup.html <HiInformationCircle className="fill-[#dd7b94] text-base cursor-pointer" onClick={() => toggleText("htmlSection")}/></p>
                    <Btn title="♡ Download the file" content="Download" style="text-xs"/>
                </div>
                {htmlOpen && (
                    <p>
                        Your custom tags list will go in here. Changes in the <span className="font-medium underline decoration-double">'Tags List'</span> will affect this file.
                    </p>
                )}
            </div>
            <div className="myDownloadRow" id="jsSection">
                <div>
                    <p className="flex gap-1 place-items-center">popup.js<HiInformationCircle className="fill-[#dd7b94] text-base cursor-pointer" onClick={() => toggleText("jsSection")}/></p>
                    <Btn title="♡ Download the file" content="Download" style="text-xs"/>
                </div>
                {javascriptOpen && (
                    <p>
                        The code file that will make you copy the tags to your clipboard.
                    </p>
                )}
            </div>
            <div className="myDownloadRow" id="cssSection">
                <div>
                    <p className="flex gap-1 place-items-center">styles.css<HiInformationCircle className="fill-[#dd7b94] text-base cursor-pointer" onClick={() => toggleText("cssSection")}/></p>
                    <Btn title="♡ Download the file" content="Download" style="text-xs"/>
                </div>
                {cssOpen && (
                    <p>
                        The design code for the extension. Changes in <span className="font-medium underline decoration-double">'Theme'</span> will affect this file.
                    </p>
                )}
            </div>
            <div className="myDownloadRow" id="logoSection">
                <div>
                    <p className="flex gap-1 place-items-center">logo.png<HiInformationCircle className="fill-[#dd7b94] text-base cursor-pointer" onClick={() => toggleText("logoSection")}/></p>
                    <Btn title="♡ Download the file" content="Download" style="text-xs"/>
                </div>
                {logoOpen && (
                    <p>
                        This is the image icon you will see on your broswer for the extension.
                    </p>
                )}
            </div>
        </section>
        <hr className="myHR w-1/2 m-auto my-5"/>
        <Btn title="♡ Download all the files" content="Download All" style="text-center"/>
    </div>
  )
}

export default DownloadScreen