import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"


const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
    }

    useEffect(()=>{
        
        getImages()

    },[])


  return (
    <div>
        <h2 className="category">{category}</h2>
        <div className="images-card">
            {
                images.map(img=>(
                    <div 
                        className="card"
                        key={img.id}
                    >
                        <img src={img.url} alt={img.title} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GifGrid