// Create your Projects component here
import Project from '../assets/login.png';
import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects=()=>{
    const Settings={
        dots: true,
        infinite: false,
        initialSlide:0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint:600,
                settings: {
                    infinite: false,
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
}