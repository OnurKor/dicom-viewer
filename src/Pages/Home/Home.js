import React, { useState } from 'react'
import ImageContainer from '../../Components/ImageContainer/ImageContainer'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'

const Home = () => {

    const [image, setImage] = useState(null)

    return (
        <div className="home-container">
            <Navbar />
            <div className="main-container">
                <SideBar
                    image={image}
                    setImage={setImage}
                />
                <ImageContainer
                    image={image}
                    setImage={setImage}
                />
            </div>
        </div>
    )
}

export default Home