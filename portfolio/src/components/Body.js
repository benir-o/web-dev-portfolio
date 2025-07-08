// Create your Body component here
import {FaGithub, FaLinkedin,FaJs,FaReact} from "react-icons/fa";
// import { FaJs } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaGithub} from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// ...existing code...
import Avatar from '../assets/Software.png';

const Body =()=>{
    return(
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-ing" alt='avatar' src={Avatar}/>
                    <div className="body-content">
                        <div className="body-headline">Benir Odeny</div>
                        <div className="body-text">Software Architect</div>
                    </div>
                    <div className="body-icons">
                        <a href="https://github.com/benir-o" target="_blank" rel="noreferrer" className="icon-link"><i>FaGithub</i></a>
                        <a href="https://www.linkedin.com/benirodeny" target="_blank" rel="noreferrer" className="icon-link"><i>FaLinkedin</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;