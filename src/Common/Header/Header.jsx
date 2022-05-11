import logo from "../../logo.svg"
import "./Header.css"
export default function Header(){
    return(
        <header className="header">
            <div className="header--title">
                <img className="logo" src={logo} alt="logo"/>
                <h3 className="title">Meme Gator</h3>
            </div>
            <div className="header--section">
                <p>2nd Preojetc - React</p>
            </div>
        </header>
    )
}