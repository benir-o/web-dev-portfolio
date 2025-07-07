// Create your Skills component here

import { FaCss3, FaDocker, FaGithub, FaJs, FaReact } from "react-icons/fa"

const Skills=()=>{
    const skillsArr=[
        {
            "name":"JavaScript",
            "icon":FaJs
        },
        {
            "name":"HTML",
            "icon":FaCss3
        },
        {
            "name":"CSS",
            "icon":FaCss3
        },
        {
            "name":"Git",
            "icon":FaGithub
        },
        {
            "name":"Reactjs",
            "icon":FaReact
        },
        {
            "name":"Docker",
            "icon":FaDocker
        }
    ];
    return (
        <div id ='skills' className="skills">
            <h2 className='title'>Skills</h2>
            <div className="skill-holder">
                {
                    skillsArr.map((skill,index)=>{
                        const Icon=skill.icon;
                        return(
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                className='Skill'>{skill.name}</p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Skills;