import styles from "./Banner.module.scss";
const cards = [
  {
    src: '../../assets/images/pngwing 6-0.png',
    name: 'Assassin'
  },
  {
    src: '../../assets/images/pngwing 6-1.png',
    name: 'Neon Guy'
  },
  {
    src: '../../assets/images/pngwing 6-3.png',
    name: 'Mafia England'
  },
  {
    src: '../../assets/images/pngwing 6-2.png',
    name: 'Bassketball Girl'
  }
]
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bg_banner}>
        <div className={`${styles.banner_content} max-w-screen-2xl`}>
          <div className={`${styles.banner_content_new}`}>
            <img src="../../assets/images/baner_new.png"></img>
          </div>
        </div>
      </div>
      <div className={styles.bg_footer}>
        <div className={`${styles.container} max-w-screen-2xl`}>
          <div className={styles.content_hero}>
            <img src="../../assets/images/pngwing 6.png"></img>
            <img className={styles.img_text} src="../../assets/images/bg-text.png"></img>
            <span className={styles.text}>The DJ</span>
          </div>
          <div className={styles.cards_content}>
            {cards.map(item => (
              <div key={item.name} className={styles.cards}>
                <div className={styles.bg_cards}>
                  <img src={item.src}></img>
                </div>
                <p className={styles.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner;