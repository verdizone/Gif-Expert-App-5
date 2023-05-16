const getGifs = async(category)=>{
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Gygqjc4Xb5HHbYOYLl4eyGnikCZEIA25&q=${category}&limit=5`;
    
    const respuesta = await fetch(url);
    const {data} = await respuesta.json()
    // console.log(data)

    const images = data.map(img=>(
        {
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url
            
        }
        ))
        return(images)

}
export default getGifs