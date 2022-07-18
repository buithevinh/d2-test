import { useState } from "react";
import styles from './Tags.module.scss'
const Tags = ({tags}) => {
  const [tag, setTag] = useState('1')
  return (
    <ul className={`flex flex-nowrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ${styles.tag_content}`}>
      {tags.map(item => (
        <li key={'tags'+ item.id }>
          <a onClick={() => setTag(item.id)} className={`inline-block whitespace-nowrap py-3 mr-6 px-4 text-white rounded cursor-pointer  ${tag === item.id ? styles['active'] : styles.bg_tag}`}>{item.text}</a>
        </li>
      ))}
      
  </ul>
  )
}
export default Tags;