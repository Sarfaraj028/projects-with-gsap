function homeAnime() {
    let tl = gsap.timeline()

tl.from("nav h2, nav .right-nav li a, nav .right-nav button",{
    opacity: 0,
    y: -30,
    duration: .4,
    stagger: .1
})


tl.from(".text-div h2, .text-div p", {
    opacity: 0,
    duration: .5,
    stagger: .1,
    x: -300
})

tl.from(".text-div button, .photo-div img", {
    opacity: 0,
    duration: 3,
    ease: "power2.out",
    stagger: .1
})

tl.from(".sponsher img", {
    opacity: 0,
    duration: .5,
    delay: -3,
    y:30,
    ease: "power2.out",
    stagger: .2
})
}
homeAnime()

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".grid",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2
    }
})


tl2.from(".grid-1",{
    x: -200,
    opacity: 0,
    duration: .5,
}, "anim")

tl2.from(".grid-2",{
    x: 200,
    opacity: 0,
    duration: .5
}, "anim")

tl2.from(".grid-3",{
    x: 200,
    opacity: 0,
    duration: .4
}, "anim2")

tl2.from(".grid-4",{
    x: -200,
    opacity: 0,
    duration: .4
}, "anim2")