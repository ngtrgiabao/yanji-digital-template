gsap.registerPlugin(ScrollTrigger, Draggable);

const animateSlider = (element, duration) => {
    gsap.to(element, {
        xPercent: -100,
        duration: duration,
        repeat: -1,
        ease: "linear",
        smoothChildTiming: true,
        immediateRender: true,
        force3D: true,
    });
};

gsap.from("nav", {
    duration: 3,
    ease: "power2.out",
    opacity: 0,
});

const tl = gsap.timeline({
    defaults: {
        duration: 1.2,
    },
});

animateSlider(".flip", 20);
animateSlider(".container__slider-wrapper-item", 30);

// hero

tl.from(".slogan__sub-slogan", {
    y: 100,
    ease: "power2.out",
    opacity: 0,
    stagger: 0.2,
}).from(".slogan__action-btn", {
    opacity: 0,
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

gsap.to(".banner__container", {
    scrollTrigger: {
        trigger: ".banner__container",
        start: "top center",
        end: "+=300 +=300",
        toggleActions: "play none none none",
    },
    opacity: 1,
});

const scrollTl = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".img",
            scrub: true,
        },
    })
    .to(".img", {
        stagger: 0.2,
        y: -750,
        scrub: true,
    });

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.utils.toArray(".scale-banner").forEach((banner) => {
    gsap.to(banner, {
        scale: 0.94,
        scrollTrigger: {
            trigger: banner,
            scrub: 1.2,
            start: "top center",
            end: "+=100 center",
        },
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".slogan-banner__title", {
    scrollTrigger: {
        trigger: ".slogan-banner__title",
        start: "-=100 center",
        end: "-=100 center",
        scrub: 2,
    },
    width: "100%",
});

gsap.to(".slogan-banner__main-content", {
    scrollTrigger: {
        trigger: ".slogan-banner__main-content",
        start: "-=330 center",
        end: "-=330 center",
        scrub: 2,
    },
    opacity: 1,
    scale: 1,
});

gsap.to(".slogan-banner__btn", {
    scrollTrigger: {
        trigger: ".slogan-banner__btn",
        start: "-=400 center",
        end: "-=400 center",
        scrub: 1.2,
    },
    opacity: 1,
    scale: 1,
});
