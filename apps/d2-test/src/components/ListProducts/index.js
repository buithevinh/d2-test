import { useState } from "react";
import Cards from "../Cards";
import Paginations from "../Paginations";
import Tags from "../Tags";
const Name = ['Assassin', 'Neon Guy', 'Bassketball Girl', 'Mafia England', 'The DJ'];
const Rate = ['Common', 'Rare', 'Mythic', 'Legendary', 'Epic']
const items = [...Array(100).keys()].map((item, index) => {
  const random = Math.floor(Math.random() * Name.length)
  return {
    id: index,
    bg: 'bg-' + random,
    name: Name[random],
    index: random,
    rate: Rate[random]
  }
})
const tags = [
  {
    id: '1',
    text: 'All'
  },
  {
    id: '2',
    text: 'Upper Body'
  },
  {
    id: '3',
    text: 'Lower Body'
  },
  {
    id: '4',
    text: 'Hat'
  },
  {
    id: '5',
    text: 'Shoes'
  },
  {
    id: '11',
    text: 'Accessory'
  },
  {
    id: '6',
    text: 'Legendary'
  },
  {
    id: '7',
    text: 'Mythic'
  },
  {
    id: '8',
    text: 'Epic'
  },
  {
    id: '9',
    text: 'Rare'
  },
  {
    id: '10',
    text: 'Common'
  }
]

const ListProducts = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const onHandlePagin = (index) => {
    setPageIndex(index)
  }
  return (
    <div className="mt-5 ml-7 md:mt-0 md:col-span-3">
      <Tags tags={tags} tag={'1'}></Tags>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.slice(pageIndex  * 20, pageIndex * 20 + 20).map(item => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </div>
      <Paginations onHandlePagin={onHandlePagin} pageIndex={pageIndex} pageSize={Math.ceil(items.length / 20)}></Paginations>
    </div>)
}

export default ListProducts;