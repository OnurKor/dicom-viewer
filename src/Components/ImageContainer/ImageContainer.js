import React from 'react'
import styles from './ImageContainer.module.css'

import CanvasDraw from "react-canvas-draw";

const ImageContainer = ({ image }) => {


  return (
    <div className={styles.imageContainer_container}>

      {/* {
        image && (
          <img
        src={image?.["data_url"]}
        alt=""
        className={styles.image_container}
      />
        )
      } */}


      <CanvasDraw

        brushColor="#04750a"
        catenaryColor="green"
        gridColor="transparent"
        brushRadius={2}
     
        style={{
          backgroundImage: `url(${image?.["data_url"]})`,
          backgroundSize: "contain",
          backgroundRepeat: 'no-repeat',
          width: "80%",
          height: "90%",
          objectFit: "contain",
          color: '#fff',

          backgroundColor: '#262c3a'
        }}
      />

    </div>
  )
}

export default ImageContainer