import "../styles/Projects.css";
import projectsData from "../data/projects.json";

function Projects() {
    return (
        <section id="projects">
            <h2 className="text-center">My Projects</h2>
            <div className="projects-grid">
                {projectsData.projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">
                            {project.description}
                        </p>
                        <div className="project-tech">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
