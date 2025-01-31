import { useEffect, useRef } from "react";

function ParticleBackground() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        const particleCount = 70;
        const connectionDistance = 150;
        const mouseRadius = 150;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = Math.random() * 30 + 1;
                this.speedX = Math.random() * 0.2 - 0.1;
                this.speedY = Math.random() * 0.2 - 0.1;
            }

            update() {
                // Mouse interaction
                if (mouseRef.current.x != null) {
                    let dx = mouseRef.current.x - this.x;
                    let dy = mouseRef.current.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;

                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        this.x -= forceDirectionX * force;
                        this.y -= forceDirectionY * force;
                    }
                }

                // Regular movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Boundary check
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = "rgba(72, 229, 194, 0.4)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function connect() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        let opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(72, 229, 194, ${
                            opacity * 0.1
                        })`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => particle.update());
            connect();
            particles.forEach((particle) => particle.draw());
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (event) => {
            mouseRef.current = {
                x: event.clientX,
                y: event.clientY,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = {
                x: null,
                y: null,
            };
        };

        resize();
        init();
        animate();

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 0,
                background: "transparent",
                pointerEvents: "none",
                opacity: 0.8,
            }}
        />
    );
}

export default ParticleBackground;
