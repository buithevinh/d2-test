import { useState } from "react"
import styles from "./Navbar.module.scss";
const Navbars = [
  {
    key: '',
    text: 'Home',
  },
  {
    key: 'about-us',
    text: 'about us',
  }, {
    key: 'our-teams',
    text: 'Our teams',
  }, {
    key: 'marketplace',
    text: 'Marketplace',
  }, {
    key: 'roadmap',
    text: 'Roadmap',
  }, {
    key: 'whitepaper',
    text: 'Whitepaper',
  }
]
const Navbar = () => {
  const [current, setCurrent] = useState('marketplace');
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav style={{ backgroundColor: 'rgba(23, 22, 26, 0.7)', zIndex: 1000 }} className="fixed  inset-x-0 top-0 left-0">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block  h-8 w-auto" src="../../assets/images/logo.png" alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {Navbars.map(item =>
                  (<a href="/#" onClick={() => setCurrent(prev => item.key)} key={item.key} className={`${current === item.key ? styles.active : ''} text-white px-3 py-2 rounded-md text-sm font-medium uppercase`}>{item.text} {current === item.key ? <span className={styles.span}></span> : ''}</a>)
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className={styles.btn_connect}>
              Connect Wallet
            </button>
            <div className="ml-3 relative">
              <div>
                <button onClick={() => setDropdown(!dropdown)} type="button" className="flex items-center  text-sm rounded-full focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img className="h-4 w-4 rounded-full" src="../../assets/images/global.png" alt="" />
                  <img alt="" className="h-4 w-4 ml-2 rounded-full" src="../../assets/images/arrow-down.svg" />
                </button>
              </div>

              <div style={{ display: dropdown ? 'block' : 'none' }} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Navbars.map(item =>
            (<a href="/#" onClick={() => setCurrent(prev => item.key)} key={item.key} className={`${current === item.key ? styles.active : ''} text-white px-3 py-2 rounded-md text-sm font-medium uppercase block `}>{item.text} {current === item.key ? <span className={styles.span}></span> : ''}</a>)
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar