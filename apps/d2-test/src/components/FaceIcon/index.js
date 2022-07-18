import styles from './Face.module.scss';

const FaceIcon = ({verified}) => {
  return(
    <div className="flex -space-x-2 overflow-hidden relative">
      <img className="inline-block h-12 w-12 rounded-full" src="../../assets/images/face.png" alt=""/>
      <span className={styles.verified}>
        <img src={`../../assets/images/ic_round-verified_${verified}.svg`}></img>
      </span>
    </div>
  )
}
export default FaceIcon;