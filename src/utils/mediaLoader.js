export async function loadProjectMedia(projectFolder) {
    try {
        console.log("Loading media for folder:", projectFolder);
        const files = import.meta.glob("/src/assets/projects/**/*", {
            eager: true,
        });
        console.log("Found files:", files);

        const mediaFiles = [];
        const folderPath = `/src/assets/projects/${projectFolder}`;

        for (const path in files) {
            if (path.startsWith(folderPath)) {
                const fileName = path.split("/").pop();
                const isVideo = path.match(/\.(mp4|webm|ogg)$/i);

                const mediaItem = {
                    type: isVideo ? "video" : "image",
                    src: files[path].default,
                    alt: fileName.replace(/\.[^/.]+$/, ""),
                    isThumb: fileName.toLowerCase().startsWith("thumbnail"),
                };
                console.log("Created media item:", mediaItem);

                mediaFiles.push(mediaItem);
            }
        }

        // Sort so thumbnail appears first
        mediaFiles.sort((a, b) => b.isThumb - a.isThumb);
        console.log("Final media files array:", mediaFiles);

        return mediaFiles;
    } catch (error) {
        console.error("Error in loadProjectMedia:", error);
        return [];
    }
}
