import { useState, useEffect } from "react";
import "../styles/Projects.css";
import projectsData from "../data/projects.json";
import { loadProjectMedia } from "../utils/mediaLoader";
import ModalPortal from "./ModalPortal";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [setDebug] = useState({});

    useEffect(() => {
        const loadProjects = async () => {
            try {
                console.log("Starting to load projects");
                const loadedProjects = await Promise.all(
                    projectsData.projects.map(async (project) => {
                        console.log("Loading project:", project.title);
                        const media = await loadProjectMedia(project.folder);
                        console.log("Loaded media for project:", {
                            project: project.title,
                            mediaCount: media.length,
                            media,
                        });
                        return { ...project, media };
                    })
                );
                console.log("All projects loaded:", loadedProjects);
                setProjects(loadedProjects);
                setDebug((prev) => ({
                    ...prev,
                    loadedProjects,
                    timestamp: new Date().toISOString(),
                }));
            } catch (err) {
                console.error("Error in loadProjects:", err);
                setDebug((prev) => ({
                    ...prev,
                    error: err.message,
                    errorStack: err.stack,
                    timestamp: new Date().toISOString(),
                }));
            }
        };

        loadProjects();
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedProject) return;

            switch (e.key) {
                case "Escape":
                    closeModal();
                    break;
                case "ArrowLeft":
                    navigateMedia(-1);
                    break;
                case "ArrowRight":
                    navigateMedia(1);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [selectedProject]);

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentMediaIndex(0);
    };

    const navigateMedia = (direction) => {
        if (!selectedProject) return;
        const length = selectedProject.media.length;
        setCurrentMediaIndex((prev) => (prev + direction + length) % length);
    };

    return (
        <section id="projects">
            {/* {process.env.NODE_ENV === "development" && (
                <div
                    style={{
                        padding: "10px",
                        margin: "10px",
                        border: "1px solid red",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        color: "white",
                    }}
                >
                    <h4>Debug Info:</h4>
                    <pre>{JSON.stringify(debug, null, 2)}</pre>
                </div>
            )} */}
            <h2 className="text-center">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div
                            className="project-media"
                            onClick={() =>
                                project.media && setSelectedProject(project)
                            }
                        >
                            {project.media ? (
                                project.media[0].type === "video" ? (
                                    <video
                                        src={project.media[0].src}
                                        className="project-image"
                                        alt={project.media[0].alt}
                                    />
                                ) : (
                                    <img
                                        src={project.media[0].src}
                                        alt={project.media[0].alt}
                                        className="project-image"
                                    />
                                )
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            )}
                        </div>
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

            {selectedProject && (
                <ModalPortal>
                    <div
                        className="media-modal"
                        onClick={closeModal}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="modal-content"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    closeModal();
                                }
                                e.stopPropagation();
                            }}
                        >
                            <button
                                className="close-button"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            <button
                                className="nav-button prev"
                                onClick={() => navigateMedia(-1)}
                            >
                                &lt;
                            </button>
                            <button
                                className="nav-button next"
                                onClick={() => navigateMedia(1)}
                            >
                                &gt;
                            </button>

                            {selectedProject.media[currentMediaIndex].type ===
                            "video" ? (
                                <video
                                    src={
                                        selectedProject.media[currentMediaIndex]
                                            .src
                                    }
                                    controls
                                    className="modal-media"
                                />
                            ) : (
                                <img
                                    src={
                                        selectedProject.media[currentMediaIndex]
                                            .src
                                    }
                                    alt={
                                        selectedProject.media[currentMediaIndex]
                                            .alt
                                    }
                                    className="modal-media"
                                />
                            )}
                        </div>
                    </div>
                </ModalPortal>
            )}
        </section>
    );
}

export default Projects;
