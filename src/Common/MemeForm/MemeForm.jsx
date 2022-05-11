import "./MemeForm.css"
export default function MemeForm(){
    return(
        <section>
            <form className="meme-form">
                <div className="form-control">
                    <input type= "text" placeholder="Top Text"/>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Bottom Text"/>
                </div>
                <div className="form-submit">
                    <button className="submit-button submit"> Generate Meme</button>
                </div>
            </form>
        </section>
    )
}