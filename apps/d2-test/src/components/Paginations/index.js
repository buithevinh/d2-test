import styles from './Paginations.module.scss';
const Paginations = ({pageSize, pageIndex, onHandlePagin}) => {
  const onHandleCLick = (index) => {
    onHandlePagin(index)
  }
  return (
    <nav className="w-full mt-20 block">
      <ul className="inline-flex w-full items-center justify-center -space-x-px">
        {pageIndex !== 0 ? <li>
          <a onClick={() => onHandleCLick(pageIndex - 1)} href="#" className={`block mr-3 py-2 px-2 ml-0 text-white bg-transparent rounded border ${styles.btn_pagination}`}>
            <span className="sr-only">Previous</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </li> : ''}
       
        {[...Array(pageSize).keys()].map((item, i) => (
           <li key={'page' + i}>
            <a onClick={() => onHandleCLick(i)} href="#" className={`py-2 mr-3 px-3 rounded  text-white text-sm bg-transparent border ${pageIndex === i ? styles.active: styles.btn_pagination}`}>{i + 1}</a>
         </li>
        ))}
        {pageIndex !== pageSize - 1 ?  <li>
          <a onClick={() => onHandleCLick(pageIndex+1)} href="#" className={`block mr-3 py-2 px-2 ml-0 text-white bg-transparent rounded border ${styles.btn_pagination}`}>
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </li> : ''}
      
      </ul>
    </nav>
  )
}
export default Paginations