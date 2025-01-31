import "../styles/Skills.css";
import skillsData from "../data/skills.json";
import * as Si from "react-icons/si";

function Skills() {
    const getIcon = (iconName) => {
        const Icon = Si[iconName];
        return Icon ? <Icon /> : null;
    };

    return (
        <section id="skills">
            <h2 className="text-center">My Skills</h2>
            <div className="skills-container">
                {Object.entries(skillsData.skills).map(([category, skills]) => (
                    <div key={category} className="skill-category">
                        <h3>
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-tag">
                                    <span className="skill-icon">
                                        {getIcon(skill.icon)}
                                    </span>
                                    <span className="skill-name">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
