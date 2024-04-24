gsap.registerPlugin(ScrollTrigger)

gsap.from('.info',{
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".container-flex", 
        start: "top 80%",
        scrub: true,
    }
})
gsap.from('.container', {
    xPercent: -100,
    duration: 6,
    opacity: 0,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".flex-container", 
       start: "top 80%",
    }
})
gsap.from('.bottom-gallery', {
    xPercent: 100,
    duration: 6,
    opacity: 0,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".gallery-bg", 
       start: "top 80%",
       end: "80%, 80%",
       scrub: true,
    }
})