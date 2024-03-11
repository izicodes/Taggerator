import MiniWindows from "./MiniWindows"
 const FAQ = () => {
  return (
    <div className="h-full myBody bg-white p-2 flex flex-col gap-8 overflow-auto body-scroll">
        <MiniWindows title="Contact" content={contactContent()} state={true}/>
        <MiniWindows title="FAQ" content={faqContent()} state={false}/>
    </div>
  )
}

const faqContent = () => {
    return (
        <div>
            Hello!
        </div>
    )
}
const contactContent = () => {
    return (
        <div>
            Hello!
        </div>
    )
}

export default FAQ