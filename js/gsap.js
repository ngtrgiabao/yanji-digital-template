gsap.registerPlugin(ScrollTrigger, Draggable);

const animateSlider = (element, duration) => {
    gsap.to(element, {
        xPercent: -100,
        duration: duration,
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize((x) => {
                const width = parseFloat(
                    window.getComputedStyle(
                        document.querySelector(".slider__wrapper")
                    ).width
                );
                return (parseFloat(x) - width) % width;
            }),
        },
        ease: "none",
    });
};

gsap.from("nav", { duration: 1.2, ease: "power2.out", y: -100 });

const tl = gsap.timeline({
    defaults: {
        duration: 1.2,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    animateSlider(".slider__wrapper", 18);
    animateSlider(".flip", 18);

    // hero

    tl.from(".slogan__sub-slogan", {
        y: 100,
        ease: "power2.out",
        opacity: 0,
        stagger: 0.2,
    }).from(".slogan__action-btn", {
        opacity: 0,
    });

    gsap.to(".slogan", {
        scrollTrigger: {
            trigger: ".slogan",
            start: "60% 20%",
            end: "60% 20%",
            toggleActions: "play none reverse none",
            scrub: 5,
        },
        x: 2000,
    });

    gsap.to(".container__rainbow-card", {
        scrollTrigger: {
            trigger: ".container__rainbow-card",
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none none",
        },

        opacity: 1,
        scale: 1,
    });

    gsap.to(".banner__container-desc", {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
            trigger: ".banner__container",
            start: "top center",
            end: "+=300 +=300",
            toggleActions: "play none none reverse",
            scrub: 2,
        },
    });

    gsap.to(".flip-card", {
        scrollTrigger: {
            trigger: ".flip",
            start: "top center",
            end: "center center",
            toggleActions: "play none none none",
        },

        opacity: 1,
        duration: 1.2,
        ease: "power1.out",
        stagger: 0.2, // Adjust the stagger delay to control the interval between flip cards
    });
});
