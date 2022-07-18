import { useState } from "react";

const DropDownList = ({label, list, defaultValue}) => {
  const [select, setSelect] = useState(null);
  const [show, setShow]= useState(false)
  return (
    <div className="mb-8">
      <label className="text-[#89888B]  text-base mb-3 block">{label}</label>
      <button onClick={() => setShow(!show)} id="dropdownDefault" data-dropdown-toggle="dropdown" className="border border-solid text-white border-[#89888B] w-full justify-between items-center focus:outline-none rounded px-4 py-2 flex" type="button">
        {select || defaultValue}
        <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div style={{display: show ? 'block' : 'none'}} id="dropdown" className="w-full hidden z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
          {list.map(item => (
            <li key={item.id}>
              <a onClick={() => (setSelect(item.text), setShow(false))} href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.text}</a>
           </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default DropDownList;