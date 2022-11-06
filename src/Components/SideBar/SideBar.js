import React, { useState } from 'react'
import styles from './SideBar.module.css'
import { FaCompressArrowsAlt } from 'react-icons/fa'
import { BiUpload } from 'react-icons/bi'
import ImageUpload from './ImageUpload'

import { motion } from "framer-motion"



const SideBar = ({setImage}) => {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const handleFullScreen = () => {
    alert('Full Screen')
  }

  const handleOpensideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }


  return (
    <div className={styles.sidebar_container}>

      <div className={styles.left_container}>

        <SideBarItem
          icon={<FaCompressArrowsAlt />}
          onClick={handleFullScreen}
        />
        <SideBarItem
          icon={<BiUpload />}
          onClick={handleOpensideMenu}
        />

      </div>

      <motion.div
        className={styles.right_container}
        style={{
          paddingLeft: isSideMenuOpen ? '10px' : '0px',
          paddingRight: isSideMenuOpen ? '10px' : '0px',
          paddingTop: "50px",
        }}

        animate={{
          width: isSideMenuOpen ? 'auto' : '0px',
        }}
      >
        <ImageUpload setImage={setImage}/>
      </motion.div>

    </div>
  )
}


const SideBarItem = ({ icon, onClick }) => {

  return (
    <div className={styles.sidebar_menuItem} onClick={onClick}>
      {icon}
    </div>
  )
}

export default SideBar