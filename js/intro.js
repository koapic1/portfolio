Splitting();
const typed = new Typed(".typing .txt", {
    strings: [
        "<strong>from now on</strong>",
        "i will take on a new <strong>challenge.</strong>",
        "I want to be a <strong>Frount-End developer</strong>.",
        "i will definitely grow through <strong>challenge</strong>",
        "keep an <strong>eyes on me.</strong>",
    ],
    typeSpeed: 50,
    startDelay: 1000,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,
});

const cursor = $(".cursor");
$(window).on("mousemove", function (e) {
    gsap.to(cursor, { left: e.clientX, top: e.clientY });
});

$(".icon").on("mouseenter", function () {
    gsap.killTweensOf(".cursor");
    $(".cursor .txt").text("GO!");
    gsap.to(".cursor", {
        width: 40,
        height: 40,
        backgroundColor: "#c92a2a",
        ease: "elastic",
        duration: 1,
    });
});
$(".icon").on("mouseleave", function () {
    gsap.killTweensOf(".cursor");
    $(".cursor .txt").text("");
    gsap.to(".cursor", {
        width: 10,
        height: 10,
        backgroundColor: "#fff",
        ease: "power4",
        duration: 0.2,
    });
});
