import React from 'react'
import styles from './Navbar.module.css'
import { BiHomeAlt } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";

import Logo from '../../Assets/logo.jpg'


const Navbar = () => {

  const handleLogin = () => {
    window.alert('Login success')
  }

  return (
    <div className={styles.container}>

      <div className={styles.logo_container}>
        <img className={styles.logo} src={Logo} alt="" />
        {/* <h3 className={styles.logo}>logo</h3> */}
      </div>

      <div className={styles.menu_container}>

        <div className={styles.menu}>
          <MenuItem
            icon={<BiHomeAlt />}
            text="Medical"
          />
          <MenuItem
            icon={<FaRegListAlt />}
            text="Prelist"
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.login_button} onClick={handleLogin}>
            Please Login
          </button>
        </div>

      </div>

    </div>
  )
}


const MenuItem = ({ icon, text }) => {

  return (
    <div className={styles.menuItem_container}>
      <div className={styles.menuItem_icon}>
        {icon}
      </div>

      <h5 className={styles.menuItem_text}>
        {text}
      </h5>
    </div>
  )
}

export default Navbar
