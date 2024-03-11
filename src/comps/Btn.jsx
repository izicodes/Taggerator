/* eslint-disable react/prop-types */
const Btn = ( {title, content, onclick, style, dataColorSet} ) => {
  return (
    <div className="border border-[#c5c5c5] w-fit bg-[#eeeeee] hover:bg-[#f9e1e7]">
        <button type="button" data-colors={dataColorSet} className={`border border-r-0 border-b-0 border-t-white border-l-white p-1 font-medium h-full ${style}`} onClick={onclick} title={title} >{content}</button>
    </div>
  )
}

export default Btn