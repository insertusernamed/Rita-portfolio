export function getCertifications() {
    const certificationFiles = import.meta.glob(
        "../assets/certifications/*.png",
        {
            eager: true,
        }
    );

    return Object.entries(certificationFiles).map(([path, module]) => {
        const fileName = path.split("/").pop();
        const title = fileName
            .replace(".png", "")
            .replace(/CertificateOfCompletion_/i, "")
            .split(/[-_]/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        return {
            title,
            fileName,
            url: module.default,
        };
    });
}
