document.addEventListener('DOMContentLoaded', () => {
    // Initialize Vanta.js background effect
    VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00ffff,
        backgroundColor: 0x0a0a1a
    });

    // Custom cursor implementation
    const cursor = document.querySelector('.cursor-dot');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    document.addEventListener('mousedown', () => cursor.classList.add('active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('active'));

    // Typing effect for hero section
    const typedText = document.querySelector('.typed-text');
    const typedSubtext = document.querySelector('.typed-subtext');
    const texts = ['Preeti Chauhan', 'Software Developer', 'Creative Innovator', 'Problem Solver'];
    const subtexts = ['Transforming Ideas into Digital Realities', 'Crafting Elegant Solutions', 'Pushing Technological Boundaries', 'Designing the Future of Web'];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        const currentSubtext = subtexts[textIndex];

        if (!isDeleting && charIndex <= currentText.length) {
            typedText.textContent = currentText.slice(0, charIndex);
            typedSubtext.textContent = currentSubtext.slice(0, charIndex);
            charIndex++;
        }

        if (isDeleting && charIndex > 0) {
            typedText.textContent = currentText.slice(0, charIndex);
            typedSubtext.textContent = currentSubtext.slice(0, charIndex);
            charIndex--;
        }

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();

    // Dynamic Tech Stack rendering
    const techStackContainer = document.getElementById('tech-stack-container');
    const techStack = [
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' }
    ];

    techStack.forEach(tech => {
        const techIcon = document.createElement('div');
        techIcon.classList.add('stack-icon');
        techIcon.innerHTML = `<i class="${tech.icon}" style="color: ${tech.color}" title="${tech.name}"></i>`;
        techStackContainer.appendChild(techIcon);
    });

    // Dynamic Skills rendering
    const skillsContainer = document.getElementById('skills-container');
    const skills = [
        { name: 'Web Development', level: 90, icon: 'fas fa-code' },
        { name: 'Responsive Design', level: 85, icon: 'fas fa-mobile-alt' },
        { name: 'Backend Development', level: 75, icon: 'fas fa-server' },
        { name: 'UI/UX Design', level: 80, icon: 'fas fa-palette' },
        { name: 'Database Management', level: 70, icon: 'fas fa-database' },
        { name: 'Version Control', level: 85, icon: 'fab fa-git-alt' }
    ];

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('skill-card', 'col-md-4');
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h4>${skill.name}</h4>
            <div class="skill-progress">
                <div class="progress" style="height: 5px;">
                    <div class="progress-bar" role="progressbar" 
                         style="width: ${skill.level}%; background-color: var(--primary-color);" 
                         aria-valuenow="${skill.level}" 
                         aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                </div>
                <span>${skill.level}%</span>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Dynamic Projects rendering
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            name: 'E-Library System',
            description: 'Full-stack web application for online book management',
            technologies: ['PHP', 'MySQL', 'Bootstrap'],
            image: 'elibrary.jpg',
            link: '#'
        },
        {
            name: 'Weather Forecast App',
            description: 'Real-time weather tracking with interactive UI',
            technologies: ['JavaScript', 'OpenWeatherMap API', 'Chart.js'],
            image: 'weather-app.jpg',
            link: '#'
        },
        {
            name: 'Portfolio Website',
            description: 'Responsive personal portfolio with modern design',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'portfolio.jpg',
            link: '#'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'col-md-4');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <div class="project-details">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => 
                        `<span class="badge" style="background-color: var(--primary-color);">${tech}</span>`
                    ).join(' ')}
                </div>
                <a href="${project.link}" class="btn btn-outline-primary mt-3">View Project</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Sending...
        `;

        setTimeout(() => {
            submitBtn.innerHTML = `
                <span class="btn-text">Message Sent!</span>
                <span class="btn-icon"><i class="fas fa-check"></i></span>
            `;
            contactForm.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    <span class="btn-text">Send Message</span>
                    <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
                `;
            }, 3000);
        }, 2000);
    });

    // Initialize AOS (Animation on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });
});
