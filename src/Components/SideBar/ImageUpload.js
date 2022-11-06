import React from 'react'
import ImageUploading from 'react-images-uploading';
import { BiCloudUpload } from 'react-icons/bi'

import styles from './SideBar.module.css'


const ImageUpload = ({ setImage }) => {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const handleUpload = () => {
        setImage(images[0])
    }

    const handleDelete = (cb) => {
        cb(0)
        setImage(null)
    }


    return (
        <div className="">

            <h4
                style={{
                    color: '#fff',
                    marginBottom: '10px',
                }}
            >
                Lorem
            </h4>

            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">

                        <div
                            className={styles.imageUpload_area}
                            style={isDragging ? { color: 'red' } : undefined}
                            {...dragProps}
                        >

                            {
                                imageList?.length ?
                                    (
                                        <div className="image-item">
                                            <img src={imageList[0]['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                                <button onClick={() => onImageUpdate(0)}>Update</button>
                                                <button onClick={() => handleDelete(onImageRemove)}>Remove</button>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div
                                            onClick={onImageUpload}

                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                            }}
                                        >
                                            <div className={styles.imageUpload_icon}>
                                                <BiCloudUpload />
                                            </div>
                                            Click or Drop
                                        </div>
                                    )
                            }

                        </div>
                        <div
                            className={styles.imageUpload_button}
                            onClick={handleUpload}
                        >
                            Upload
                        </div>

                    </div>
                )}
            </ImageUploading>

        </div>
    )
}

export default ImageUpload