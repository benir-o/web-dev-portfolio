// Create your About component here
import IMG from '../assets/Detective.png';

const About=()=>{
    return(
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Benir is a curious and driven computer
                    science student with a passion for building 
                    creative, practical solutions—ranging from Java projects to web applications. </p>
                <div className='about-img'>
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;