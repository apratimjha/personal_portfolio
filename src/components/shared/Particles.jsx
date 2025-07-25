import React, { useEffect } from 'react';

const Particles = () => {
    useEffect(() => {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;
        
        let existingParticles = particlesContainer.childElementCount;
        if(existingParticles >= 50) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            particlesContainer.appendChild(particle);
        }
    }, []);

    return <div className="particles"></div>;
};

export default Particles;