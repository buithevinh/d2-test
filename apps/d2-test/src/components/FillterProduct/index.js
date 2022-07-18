import { useState } from 'react'
import ReactSlider from 'react-slider';
import DropDownList from '../DropDownList';
import styles from './FillterProduct.module.scss';
const list = [
    {
      id: '1',
      text: 'Assassin'
    },
    {
      id: '2',
      text: 'Neon Guy'
    },
    {
      id: '3',
      text: 'Mafia England'
    },
    {
      id: '4',
      text: 'Bassketball Girl'
    }
  
]
const Fillter = () => {
  const [value, setValue] = useState([75, 100])
  return (
    <div className="col-span-1" style={{width:  372}}>
      <div className="px-4 px-0 mb-16">
        <div type="button" className="w-full py-1.5 pl-2 pr-3 flex items-center text-sm rounded-md text-[#89888B] border-[#89888B] border border-solid">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
            <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
          </svg>
          <input type="text" name="price" id="price" className="block w-full focus:outline-none pr-12 bg-transparent" placeholder="Search" />
        </div>
      </div>
      <div className={styles.content_range}>
        <p className='text-white text-base'>PRICE</p>
        <ReactSlider
          step={1}
          min={0}
          max={200}
          className="w-full h-2 pr-2 my-4 bg-gray-200 rounded cursor-grab"
          thumbClassName={`${styles.thumb} absolute w-3 h-3 cursor-grab bg-indigo-500 rounded-full -top-[8px] a`}
          trackClassName={styles.track}
          defaultValue={[75, 100]}
          minDistance={0.1}
          onChange={(value) => {
            setValue(value)
          }}
          />
        <div className='text-white text-base flex justify-between'>
          <p>{value[0]} ETH</p>
          <p>{value[1]} ETH</p>
        </div>
      </div>
      <DropDownList list={list} defaultValue={'All'} label={'TIER'}></DropDownList>
      <DropDownList list={list} defaultValue={'Halloween'} label={'THEME'}></DropDownList>
      <DropDownList list={list} defaultValue={'Lastest'} label={'TIME'}></DropDownList>
      <DropDownList list={list} defaultValue={'Low to high'} label={'PRICE'}></DropDownList>
    </div>
  )
}

export default Fillter;