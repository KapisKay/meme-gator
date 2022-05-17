import "./MemeForm.css"
import memesData from "./memeData"
import { useState } from "react"

export default function MemeForm(){
     const [memeImage , setMemeImage] = useState("")
    const getMeme = () =>{
        const memes = memesData.data.memes
        const randomElement = Math.floor(Math.random() * memes.length)
        const meme = memes[randomElement]
        console.log(meme)
        setMemeImage(meme.url)
        return memeImage
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
                <img className="memeImage" src={memeImage} alt="" />
            </div>
        </section>
    )
}