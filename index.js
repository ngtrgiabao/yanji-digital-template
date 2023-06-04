gsap.from("nav", { duration: 1.2, ease: "power2.out", y: -100 });

const tl = gsap.timeline({
    defaults: {
        duration: 1.2,
    },
});

tl.from(".slogan__action-btn", {
    opacity: 0,
})
    .from(".slogan__logo", {
        y: 100,
        ease: "power2.out",
        opacity: 0,
    })
    .from(".slogan__sub-slogan", {
        y: 100,
        ease: "power2.out",
        opacity: 0,
        stagger: 0.2,
    });
