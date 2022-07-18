import FaceIcon from "../FaceIcon";
import styles from "./Cards.module.scss";
const Cards = ({item}) => {
  return (
  <div className={`${styles.cards_container}  relative`}>
    <div className={`${styles.img_block} ${styles[item.bg]}`}>
      <div className={`${styles.actions }`}>
        <button className={styles.btn_epic}>{item.rate}</button>
        <button  className={styles.btn_like}>
          <img src="`../../assets/images/like.svg"></img>
        </button>
      </div>
      <img src={`../../assets/images/pngwing 6-${item.index}.png`} alt="" className="object-center object-cover" />
    </div>
    <div className="mt-4 flex flex-col justify-between">
      <div className="flex justify-between">
        <h3 className="text-sm text-white font-bold text-base">
          <a href="#">
            
            {item.name}
          </a>
        </h3>
        <p className="text-sm font-medium text-white">
        <img className="inline-block align-middle mr-2" src="../../assets/images/logos_ethereum.svg"></img> 
        <span className="inline-block align-middle">2,75 ETH</span>
      </p>
      </div>
      <div className="mt-3 flex justify-start items-center ">
         <FaceIcon verified={Math.floor(Math.random() * 2)}></FaceIcon>
         <p className="text-white ml-3 text-xs">Ghozali_Ghozalu</p>
        </div>
    </div>
  </div>
)
}
export default Cards;