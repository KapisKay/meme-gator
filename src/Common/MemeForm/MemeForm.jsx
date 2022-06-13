import "./MemeForm.css"
import memesData from "./memeData"
import { useState } from "react"

export default function MemeForm(){
     const [meme, setMeme] = useState({
         topText: '',
         bottomText: '',
         randomImage: 'https://i.imgflip.com/30b1gx.jpg'
     })

     const [allMemeImage , setAllMemeImage] = useState(memesData)

    const getMeme = () =>{
        const memeImages = allMemeImage.data.memes
        const randomElement = Math.floor(Math.random() * memeImages.length)
        const memeImage = memeImages[randomElement]
        console.log(memeImage)
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: memeImage.url
        }))
        console.log(meme)
        return meme
     }

    return(
        <section>
            <div className="meme-form">
                <div className="form-control">
                    <input type= "text" placeholder="Top Text"/>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Bottom Text"/>
                </div>
                <div className="form-submit">
                    <button 
                        className="submit-button submit"
                        onClick={getMeme}
                        >
                        Generate Meme
                    </button>
                </div>
            </div>
            <div className="meme">
                <img className="memeImage" src={meme.randomImage} alt="" />
            </div>
        </section>
    )
}