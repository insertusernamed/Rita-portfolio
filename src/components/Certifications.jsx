import { useState } from "react";
import Masonry from "react-masonry-css";
import { getCertifications } from "../utils/getCertifications";
import "../styles/Certifications.css";

function Certifications() {
    const certifications = getCertifications();
    const [selectedCert, setSelectedCert] = useState(null);

    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <section id="certifications">
            <h2 className="text-center">Certifications</h2>
            <Masonry
                breakpointCols={breakpointColumns}
                className="certifications-masonry-grid"
                columnClassName="certifications-masonry-column"
            >
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="certification-card"
                        onClick={() => setSelectedCert(cert)}
                    >
                        <div className="image-container">
                            <img
                                src={cert.url}
                                alt={cert.title}
                                className="cert-image"
                                loading="lazy"
                            />
                            <div className="cert-title-overlay">
                                <h3>{cert.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Masonry>

            {selectedCert && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedCert(null)}
                        >
                            ×
                        </button>
                        <h3>{selectedCert.title}</h3>
                        <img src={selectedCert.url} alt={selectedCert.title} />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certifications;
