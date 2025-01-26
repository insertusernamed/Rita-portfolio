import "../styles/Skills.css";
import skillsData from "../data/skills.json";

function Skills() {
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
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
