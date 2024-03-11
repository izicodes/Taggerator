import Body from "./Body"
import FAQ from "./FAQ"
import { Routes, Route } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="border-t border-white bg-[#eeeeee] p-2 grow flex flex-col overflow-auto">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  )
}

export default Wrapper