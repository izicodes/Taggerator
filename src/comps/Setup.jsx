/* eslint-disable react/no-unescaped-entities */
const Setup = () => {
    const emoji = "(„• ᴗ •„)";
  return (
    <div>
        <div>
            <p className="mb-2">Downloaded all the files for the extension? Let's get it up and running on your browser!</p>
        </div>
        <hr className="myHR w-1/2 m-auto my-5"/>
        <div className="w-full setup">
            <h2>₊˚ʚ Instructions</h2>
            <p><span className="font-medium">[ 1 ]</span> Drag and drop the downloaded files into a newly created folder.</p>
            <p><span className="font-medium">[ 2 ]</span> Open Google Chrome browser and go to your Settings page.</p>
            <p><span className="font-medium">[ 3 ]</span> Scroll down and click "Extensions" in the left sidebar.</p>
            <p><span className="font-medium">[ 4 ]</span> Enable "Developer mode" by toggling the switch at the top right corner.</p>
            <p><span className="font-medium">[ 5 ]</span> Click "Load unpacked" button and click the folder with the downloaded extenison files.</p>
            <p><span className="font-medium">[ 6 ]</span> Look for the extension icon near the search bar in the top right corner of your Chrome browser - make sure to pin it so you can always see it.</p>
        </div>
        <hr className="myHR w-1/2 m-auto my-5"/>
        <p>Done~! Enjoy your tags extension~! {emoji}</p>
    </div>
  )
}

export default Setup