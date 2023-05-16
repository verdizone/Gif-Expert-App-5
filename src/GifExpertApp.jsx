import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Naruto']);
    const [value, setValue] = useState('');

  return (
    <div>
        <h1>GifExpertApp</h1>

        <hr />
        
        <AddCategory 
            categories={categories}
            setCategories={setCategories}
            value={value}
            setValue={setValue}
        />
        
        <hr />
        
        <div>
            {
                categories.map(category=>(
                    <div key={category}>
                        <GifGrid 
                            category={category}
                        />

                    </div>
                ))
            }
           
        </div>

    </div>
  )
}

export default GifExpertApp