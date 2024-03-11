import Description from "./Description"
import MiniWindows from "./MiniWindows"
import AddTags from "./AddTags"
import Theme from "./Theme"
import DownloadScreen from "./DownloadScreen"
import Setup from "./Setup"

const Body = () => {
  return (
    <div className="h-full myBody bg-white p-2 flex flex-col gap-8 overflow-auto body-scroll">
        <MiniWindows title="Description" content={<Description />} state={true}/>
        <MiniWindows title="Theme" content={<Theme />} state={false} />
        <MiniWindows title="Tags List" content={<AddTags />} state={false} />
        <MiniWindows title="Download" content={<DownloadScreen />} state={false} />
        <MiniWindows title="Setup" content={<Setup />} state={false} />
    </div>
  )
}

export default Body