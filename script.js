/**
 * Rausku Workspace - Interactive Scripts
 * 🐟 Swim with the flow
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive features
    initSmoothScroll();
    initScrollAnimations();
    initDynamicBubbles();
    initParallaxEffect();
    initFishEasterEgg();
});

/**
 * Smooth scroll for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Reveal animations on scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add visible class handler
    const style = document.createElement('style');
    style.textContent = `
        .feature-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Add dynamic bubbles on click
 */
function initDynamicBubbles() {
    document.addEventListener('click', (e) => {
        // Don't create bubbles on button clicks
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

        createBubble(e.clientX, e.clientY);
    });
}

function createBubble(x, y) {
    const bubble = document.createElement('span');
    const size = Math.random() * 20 + 10;
    
    bubble.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.2));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: bubbleFloat 2s ease-out forwards;
    `;

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 2000);
}

// Add bubble animation keyframes
const bubbleStyle = document.createElement('style');
bubbleStyle.textContent = `
    @keyframes bubbleFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, -100px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(bubbleStyle);

/**
 * Parallax effect for hero section
 */
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallax = hero.querySelector('.container');
                if (parallax) {
                    parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
                    parallax.style.opacity = Math.max(0, 1 - scrolled / 500);
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Fish Easter Egg - Konami code style
 * Type "FISH" for a surprise!
 */
function initFishEasterEgg() {
    const sequence = ['F', 'I', 'S', 'H'];
    let index = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key.toUpperCase() === sequence[index]) {
            index++;
            if (index === sequence.length) {
                triggerFishParty();
                index = 0;
            }
        } else {
            index = 0;
        }
    });
}

function triggerFishParty() {
    const fishes = ['🐟', '🐠', '🐡', '🦈', '🦑'];
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10000;
        overflow: hidden;
    `;
    document.body.appendChild(container);

    // Create swimming fishes
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const fish = document.createElement('div');
            const emoji = fishes[Math.floor(Math.random() * fishes.length)];
            const startY = Math.random() * window.innerHeight;
            
            fish.textContent = emoji;
            fish.style.cssText = `
                position: absolute;
                font-size: 2rem;
                left: -50px;
                top: ${startY}px;
                animation: swimAcross ${3 + Math.random() * 2}s linear forwards;
            `;
            container.appendChild(fish);

            setTimeout(() => fish.remove(), 5000);
        }, i * 200);
    }

    // Add swim animation
    const swimStyle = document.createElement('style');
    swimStyle.textContent = `
        @keyframes swimAcross {
            0% {
                transform: translateX(0) rotate(0deg);
            }
            25% {
                transform: translateX(25vw) rotate(-5deg);
            }
            50% {
                transform: translateX(50vw) rotate(5deg);
            }
            75% {
                transform: translateX(75vw) rotate(-5deg);
            }
            100% {
                transform: translateX(calc(100vw + 50px)) rotate(0deg);
            }
        }
    `;
    document.head.appendChild(swimStyle);

    // Show message
    showFishMessage();

    // Cleanup
    setTimeout(() => {
        container.remove();
        swimStyle.remove();
    }, 6000);
}

function showFishMessage() {
    const message = document.createElement('div');
    message.textContent = '🐟 Rausku Party! 🐟';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #0ea5e9, #06b6d4);
        color: white;
        padding: 1.5rem 3rem;
        border-radius: 16px;
        font-size: 1.5rem;
        font-weight: 700;
        z-index: 10001;
        animation: popIn 0.5s ease forwards;
        box-shadow: 0 20px 60px rgba(14, 165, 233, 0.4);
    `;

    const popStyle = document.createElement('style');
    popStyle.textContent = `
        @keyframes popIn {
            0% { transform: translate(-50%, -50%) scale(0); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(popStyle);
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'popIn 0.3s ease reverse forwards';
        setTimeout(() => {
            message.remove();
            popStyle.remove();
        }, 300);
    }, 2000);
}

/**
 * Add current year to footer copyright
 */
document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
    }
});

console.log('🐟 Rausku Workspace loaded! Type "FISH" for a surprise.');
