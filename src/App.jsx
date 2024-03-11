import Wrapper from "./comps/Wrapper";
import Header from "./comps/Header";
import NavBar from "./comps/NavBar";
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <div className="bg-[#fffbfb] md:w-[32rem] rounded-md border border-[#b5b5b5] myShadow">
      <div className="rounded-md h-full border border-[#ffffff] flex flex-col">
      <Header />
      <BrowserRouter>
        <NavBar />
        <Wrapper />
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
