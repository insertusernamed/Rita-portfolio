import "../styles/Skills.css";
import skillsData from "../data/skills.json";
import * as Si from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function Skills() {
    const [activeCategory, setActiveCategory] = useState("embedded");
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const getIcon = (iconName) => {
        const Icon = Si[iconName];
        return Icon ? <Icon /> : null;
    };

    return (
        <section id="skills" ref={ref}>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
                Specialized in embedded systems development, software
                engineering, and automation technologies
            </p>
            <div className="expertise-container">
                <div className="expertise-nav">
                    {Object.entries(skillsData.skills).map(
                        ([key, category]) => (
                            <button
                                key={key}
                                className={`expertise-btn ${
                                    activeCategory === key ? "active" : ""
                                }`}
                                onClick={() => setActiveCategory(key)}
                            >
                                <div className="expertise-btn-content">
                                    <span className="expertise-icon">
                                        {getIcon(category.items[0].icon)}
                                    </span>
                                    <span>{category.title}</span>
                                </div>
                            </button>
                        )
                    )}
                </div>

                <div className="skill-content">
                    <div className="proficiency-grid">
                        {skillsData.skills[activeCategory].items.map(
                            (skill, index) => (
                                <div key={index} className="proficiency-item">
                                    <div className="proficiency-header">
                                        <span className="skill-icon">
                                            {getIcon(skill.icon)}
                                        </span>
                                        <span className="skill-name">
                                            {skill.name}
                                        </span>
                                        <span className="proficiency-level">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="proficiency-bar-container">
                                        <div
                                            className="proficiency-bar"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                    {skill.keyProjects && (
                                        <div className="skill-projects">
                                            {skill.keyProjects.map(
                                                (project, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="project-tag"
                                                    >
                                                        {project}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </div>

                    {skillsData.skills[activeCategory].achievements && (
                        <div className="achievement-cards">
                            {skillsData.skills[activeCategory].achievements.map(
                                (achievement, index) => (
                                    <div
                                        key={index}
                                        className="achievement-card"
                                    >
                                        <h4>{achievement.title}</h4>
                                        <p>{achievement.description}</p>
                                        {achievement.metrics && (
                                            <div className="achievement-metrics">
                                                {achievement.metrics.map(
                                                    (metric, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="metric-item"
                                                        >
                                                            <span className="metric-number">
                                                                {metric.value}
                                                            </span>
                                                            <span className="metric-description">
                                                                {metric.label}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Skills;
