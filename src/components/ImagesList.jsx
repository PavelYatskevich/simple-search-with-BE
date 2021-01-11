import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ImagesContext } from "../context/ImagesContext";
import { getSearch } from '../context/selectors';

export const ImagesList = () => {

    const [images, setImages] = useState([]);
    const [state] = useContext(ImagesContext);
    const search = getSearch(state.state);

    useEffect(() => {
        axios.get(`http://localhost:8080/search/${search}`).then((response) => {
            setImages(response?.data?.hits)
        })
    }, [search])
    return (
        <div className="images-container">
            {images.map(image => {
                return (
                    <img width={image.previewWidth} height={image.previewHeight} src={image.previewURL} key={image.id} />
                )
            })}
        </div>
    )
}
