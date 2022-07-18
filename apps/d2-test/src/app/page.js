import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Navbar from "../components/Navbars/";
import Products from "../components/Products";
import styles from "./app.module.scss";
export function Page() {
  return (
    <div className={styles.bg_page}>
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
      <Frame></Frame>
      <Footer></Footer>
    </div>
  )
}
export default Page;