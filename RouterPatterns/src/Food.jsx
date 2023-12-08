import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

const GIPHY_URL = "https://api.giphy.com/v1"

const Food = () => {
    const { name } = useParams()
    const [src, setSrc] = useState(null)

    useEffect(() => {
        const fetchGif = async(searchTerm) => {
            try {
                let resp = await axios.get(`${GIPHY_URL}/gifs/search`, {
                    params: { q:searchTerm, api_key: "8BWw8yXxekl4Rd5NAPANs6LNBIvymErr"}
                })
                setSrc(resp.data.data[0].images.original.url)
            } catch (e) {
                console.log(e)
            }
        }
        fetchGif(name)
    })

    let img = src ? <img src={src} alt={name} /> : null
    
    return (
        <div>
            <h1>Here's a pic of {name}</h1>
            {img}
        </div>
    )
}

export default Food