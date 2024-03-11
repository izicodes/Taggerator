/* eslint-disable react/no-unescaped-entities */
import { FaVolumeUp, FaVolumeMute, FaRegMoon } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import Btn from "./Btn";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [musicState, setMusicState] = useState(false);
    const [themeMode, setThemeMode] = useState(true);
    const [audio, setAudio] = useState(null);

    const navigate = useNavigate();

    const navToFAQ = () => {
        navigate('/faq'); // Navigate to the About page
    };
    const navToHome = () => {
        navigate('/'); // Navigate to the About page
    };

    const toggleThemeMode = () => {
        setThemeMode((prevState) => !prevState); // Functional update form
    };
    const toggleMusic = () => {
        setMusicState((prevState) => !prevState); // Functional update form
    };
    // Load the audio file
    useEffect(() => {
        const audioElement = new Audio("../../src/assets/bg-music.mp3");
        audioElement.volume = 0.3; // Set initial volume to 50%
        audioElement.loop = true;
        setAudio(audioElement);
      }, []);

    useEffect(() => {
        if (audio) {
            if (musicState) {
            audio.play();
            } else {
            audio.pause();
            }
        }
    }, [musicState, audio]);

    useEffect(() => {
    // Play audio initially when musicState and audio are set
    if (audio && musicState) {
        audio.play(); // Play the audio on initial load
    }
    }, [audio, musicState]);


  return (
    <div className="w-full bg-[#eeeeee] border border-t-white border-b-[#c5c5c5] p-2 flex gap-2">
        <Btn title="♡ Homepage" content={<HiMiniHome />} onclick={navToHome} />
        <Btn title={musicState ? "♡ Music Off" : "♡ Music On"} content={musicState ? <FaVolumeUp /> : <FaVolumeMute />} onclick={toggleMusic} />
        <div className=" bg-[#ffffff] flex items-center whitespace-nowrap overflow-hidden grow outline-0 p-[0.10rem] px-2 myBody italic text-xs cursor-default">
            <p className="relative movingText">Built by izi because she was bored one afternoon after watching JoJo's Bizzare Adventure &nbsp; ♡ &nbsp; follow me on tumblr @izicodes &nbsp; ♡ &nbsp; The Lord Jesus Christ Loves You And Wants To Be A Part Of Your Life &nbsp; ♡ &nbsp; “Good, better, best. Never let it rest. 'Til your good is better and your better is best.” - St. Jerome &nbsp; ♡ &nbsp; my favourite animal is a panda 🐼</p>
        </div>
        <div className="flex gap-2">
            <Btn title="♡ FAQ + Contact" content={<FaQuestion />} onclick={navToFAQ}/>
            <Btn content={themeMode ? <FaRegMoon /> : <FiSun />} onclick={toggleThemeMode}/>
        </div>

    </div>
  )
}

export default NavBar