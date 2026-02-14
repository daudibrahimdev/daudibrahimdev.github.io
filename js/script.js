/**
 * PROJECT: DAUD IBRAHIM PORTFOLIO ENGINE
 */

/**
 * ALL ABOUT NAVBAR INTERACTIONS
 */

const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", function() {
    navbarNav.classList.toggle("active");
});

// Close navbar when clicking outside
document.addEventListener("click", function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});















/**
 * ALL ABOUT GSAP ANIMATIONS WITH SCROLLTRIGGER
 */

// 1. Inisialisasi Utama
gsap.registerPlugin(ScrollTrigger);

// 2. ANIMASI TECHNICAL ARSENAL (3D Entry)
(function() {
    const arsenalCards = gsap.utils.toArray(".skill-card");
    if (arsenalCards.length > 0) {
        arsenalCards.forEach((card, i) => {
            const depth = (i + 1) * 80; 
            gsap.fromTo(card, 
                {
                    opacity: 0,
                    y: depth,
                    rotateX: -25,
                    scale: 0.85,
                    z: -100
                }, 
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    z: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 150%",
                        end: "top 0%",
                        scrub: 1
                    }
                }
            );
        });
    }
})();

// 3. ANIMASI SKILLS SECTION (Title Parallax & CTA Reveal)
(function() {
    // Parallax Title
    gsap.from(".skills .section-title", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".skills",
            start: "top 70%",
            end: "top 10%",
            scrub: 1
        }
    });

    // Reveal Skills CTA
    const sCtaBtn = document.querySelector(".skills-cta");
    if (sCtaBtn) {
        gsap.to(sCtaBtn, {
            opacity: 1,
            y: -20,
            scrollTrigger: {
                trigger: ".skills-container",
                start: "bottom 70%",
                end: "bottom 70%",
                scrub: 1.5
            }
        });

        const sBtnLink = sCtaBtn.querySelector("a");
        if (sBtnLink) {
            sBtnLink.addEventListener("mouseenter", () => {
                gsap.to(sBtnLink, { scale: 1.05, duration: 0.4, ease: "power2.out" });
                gsap.to(sBtnLink.querySelector("i"), { x: 5, duration: 0.3 });
            });
            sBtnLink.addEventListener("mouseleave", () => {
                gsap.to(sBtnLink, { scale: 1, duration: 0.4, ease: "power2.inOut" });
                gsap.to(sBtnLink.querySelector("i"), { x: 0, duration: 0.3 });
            });
        }
    }
})();

// 4. ANIMASI ABOUT SECTION (The Journey Timeline)
(function() {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 40%",
                end: "top 10%",
                scrub: 1.5,
            }
        });

        aboutTl.from("#about .section-title", {
            y: -50,
            opacity: 0,
            duration: 2,
            ease: "power2.out"
        })
        .from(".about-img", {
            x: -150,
            opacity: 0,
            duration: 2.5,
            ease: "power2.out"
        }, "-=0.8")
        .from(".about .content h3, .about .content p", {
            x: 150,
            opacity: 0,
            duration: 2.2,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=1.2")
        .from(".about-cta", { // Fade-in CTA About
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=1");
    }
})();

// 5. ANIMASI PROJECTS SHOWCASE (Layered Parallax)
(function() {
    const projectCards = gsap.utils.toArray(".project-card");
    if (projectCards.length > 0) {
        projectCards.forEach((card, i) => {
            const pImg = card.querySelector(".project-img img");
            const pInfo = card.querySelector(".project-info");
            const rotAngle = i % 2 === 0 ? 5 : -5;

            // Entrance Card
            gsap.fromTo(card, 
                { opacity: 0, y: 250, rotateX: -15, rotateZ: rotAngle, scale: 0.8 }, 
                {
                    opacity: 1, y: 0, rotateX: 0, rotateZ: 0, scale: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        end: "top 40%",
                        scrub: 1.2
                    }
                }
            );

            // Inner Image Parallax
            if (pImg) {
                gsap.to(pImg, {
                    y: "15%",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

            // Info Contrast Motion
            if (pInfo) {
                gsap.from(pInfo, {
                    y: 40,
                    opacity: 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 2
                    }
                });
            }
        });
    }
})();

// 6. PROJECTS FINAL TOUCH (Freeze Title & Projects CTA)
(function() {
    // Title Follow & Freeze
    gsap.fromTo("#projects .section-title", 
        { y: -150, opacity: 0 }, 
        {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "#projects",
                start: "top bottom",
                end: "top 30%",
                scrub: 1,
            }
        }
    );

    // Reveal Projects CTA
    const pCta = document.querySelector(".projects-cta");
    if (pCta) {
        gsap.fromTo(pCta, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "bottom 90%",
                    end: "bottom 70%",
                    scrub: 1
                }
            }
        );

        const pBtnLink = pCta.querySelector("a");
        if (pBtnLink) {
            pBtnLink.addEventListener("mouseenter", () => {
                gsap.to(pBtnLink, { 
                    scale: 1.05, 
                    backgroundColor: "rgba(0, 242, 255, 0.1)",
                    borderColor: "var(--primary)",
                    boxShadow: "0 0 20px var(--primary-glow)",
                    duration: 0.4 
                });
                gsap.to(pBtnLink.querySelector("i"), { rotate: 45, x: 3, duration: 0.3 });
            });

            pBtnLink.addEventListener("mouseleave", () => {
                gsap.to(pBtnLink, { 
                    scale: 1, 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "var(--glass-border)",
                    boxShadow: "none",
                    duration: 0.4 
                });
                gsap.to(pBtnLink.querySelector("i"), { rotate: 0, x: 0, duration: 0.3 });
            });
        }
    }
})();

// 7. Icon Initializer
if (typeof feather !== 'undefined') {
    feather.replace();
}