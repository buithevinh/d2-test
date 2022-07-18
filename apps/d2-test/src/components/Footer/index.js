import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className="p-4 p-6 bg-[#17161A text-white] max-w-screen-2xl mx-auto mt-16 ">
      <div className="flex justify-between">
        <div className="mb-8">
          <a href="#" className="flex items-center">
            <img src="../../assets/images/Group 13181.png" className="mr-3" alt="gosquid Logo" />
          </a>
        </div>
        <div className="flex ">
          <div className="w-8/12">
            <h2 className="text-xl text-white uppercase font-bold mb-8">Navigation</h2>
            <ul className="text-white block mb-20">
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline ">Home</a>
              </li>
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline">Whitepaper</a>
              </li>
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline">FAQs</a>
              </li>
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline">About us</a>
              </li>
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline">Marketplace</a>
              </li>
              <li className="mb-4 w-2/6  inline-block text-base">
                <a href="#" className="hover:underline">News</a>
              </li>
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline">Our teams</a>
              </li>
              <li className="mb-4 w-2/6  inline-block text-base">
                <a href="#" className="hover:underline">Roadmap</a>
              </li>
              <li className="mb-4 w-2/6 inline-block text-base">
                <a href="#" className="hover:underline">Community</a>
              </li>
            </ul>
            <h2 className="text-xl font-bold text-white uppercase mb-8">Subcribe to receive our latest update</h2>
            <div className="flex">
            <div type="button" className="w-8/12 mr-5 py-1.5 pl-2 pr-3 flex items-center text-sm rounded-md text-white border-[#fff] border border-solid">
              <input type="text" name="price" id="price" className="block w-full focus:outline-none pr-12 bg-transparent" placeholder="Your email address" />
            </div>
            <button type="button"  className={`w-2/6 rounded  py-1.5 pl-2 pr-3 text-base text-white ${styles.btn_subcribe}`}>
              Subcribe
            </button>
            </div>
          </div>
          <div className="w-2/6">
            <h2 className="text-xl text-white uppercase font-bold mb-8">contact us</h2>
            <ul className="text-white block">
              <li className="mb-4">
                <img className="inline-block mr-2 align-middle " src="../../assets/images/21 Handset_6.svg"></img>
                <a href="#" className="hover:underline inline-block align-middle ">0378-785-855</a>
              </li>
              <li>
                <img className="inline-block mr-2 align-middle " src="../../assets/images/11 Comment_2.svg"></img>
                <a href="#" className="hover:underline align-middle ">support@gosquid.io</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 max-w-screen-2xl mx-auto border-[#3A3841] " />
      <div className="flex items-center justify-between">
        <span className="text-sm text-white text-center ">© 2022 GoSquid. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 justify-center mt-0">
          <a href="#" className="text-white">
            Security
          </a>
          <a href="#" className="text-white">
           Legal
          </a>
          <a href="#" className="text-white">
          Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;