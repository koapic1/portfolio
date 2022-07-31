Splitting();
ScrollTrigger.defaults({
    //markers: true,
});
gsap.defaults({
    duration: 1,
    ease: "back",
});
const introTL = gsap.timeline({
    delay: 1,
    scrollTrigger: {
        trigger: "#intro",
        start: "top-=10 top",
        end: "bottom top",
        onUpdate: function (self) {
            //console.log(self);
            gsap.set("#intro", { filter: `blur(${self.progress * 10}px)` });
        },
    },
});
introTL
    .from("#intro .slogan h1 .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.2 })
    .from("#intro .slogan p .char", { opacity: 0, x: 200, duration: 1, ease: "power2", stagger: 0.08 }, "-=1")
    .from(CSSRulePlugin.getRule("#intro .slogan strong::after"), { cssRule: { scale: 0 }, duration: 0.5 })
    .from("#intro .iconScroll", { opacity: 0, duration: 2, stagger: 1, delay: 2 }, "-=2");

const profileTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#profile",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
    },
});
profileTL
    .from("#profile .album", { opacity: 0, duration: 3, stagger: 1 })
    .from("#profile .info h2 .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 })
    .from("#profile h2", {
        borderBottomWidth: 0,
    })
    .from("#profile .info ul .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 });

const mySkill = {
    markup: $("#skill ul li").eq(0).find(".num").data("percent"),
    _css: $("#skill ul li").eq(1).find(".num").data("percent"),
    js: $("#skill ul li").eq(2).find(".num").data("percent"),
    react: $("#skill ul li").eq(3).find(".num").data("percent"),
    node: $("#skill ul li").eq(4).find(".num").data("percent"),
    java: $("#skill ul li").eq(5).find(".num").data("percent"),
    spring: $("#skill ul li").eq(6).find(".num").data("percent"),
};
const skillTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#skill",
        start: "top top",
        end: "bottom top-=50",
        pin: true,
        scrub: 1,
    },
});
skillTL
    .from("#skill h2 .char", {
        x: "+=100",
        color: "rgb(165, 1, 1)",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from("#skill h2 .char", {
        color: "red",
        stagger: {
            each: 0.1,
        },
    })
    .from(
        "#skill ul li",
        {
            y: "-100",
            opacity: 0,
            stagger: {
                each: 0.1,
            },
        },
        "circleStart"
    )
    .to(
        "#skill ul li:nth-child(1) .line circle ",
        {
            strokeDashoffset: -570 * 0.2,
            ease: "linear",
            duration: 2,
        },
        "circleStart+=1"
    )
    .to(
        "#skill ul li:nth-child(2) .line circle ",
        {
            strokeDashoffset: -570 * 0.2,
            ease: "linear",
            duration: 2,
        },
        "circleStart+=1"
    )
    .to(
        "#skill ul li:nth-child(3) .line circle ",
        {
            strokeDashoffset: -570 * 0.4,
            ease: "linear",
            duration: 2,
        },
        "circleStart+=1"
    )
    .to(
        "#skill ul li:nth-child(4) .line circle ",
        {
            strokeDashoffset: -570 * 0.5,
            ease: "linear",
            duration: 2,
        },
        "circleStart+=1"
    )
    .to(
        "#skill ul li:nth-child(5) .line circle ",
        {
            strokeDashoffset: -570 * 0.5,
            ease: "linear",
            duration: 3,
        },
        "circleStart+=1"
    )
    .to(
        "#skill ul li:nth-child(6) .line circle ",
        {
            strokeDashoffset: -570 * 0.5,
            ease: "linear",
            duration: 2,
        },
        "circleStart+=1"
    )
    .to(
        "#skill ul li:nth-child(7) .line circle ",
        {
            strokeDashoffset: -570 * 0.5,
            ease: "linear",
            duration: 2,
        },
        "circleStart+=1"
    )
    .from(
        mySkill,
        {
            markup: 0,
            _css: 0,
            js: 0,
            react: 0,
            node: 0,
            java: 0,
            spring: 0,
            duration: 3,
            ease: "linear",
            onUpdate: function () {
                console.log(mySkill.css);
                $("#skill li").eq(0).find(".num").text(Math.floor(mySkill.markup));
                $("#skill li").eq(1).find(".num").text(Math.floor(mySkill._css));
                $("#skill li").eq(2).find(".num").text(Math.floor(mySkill.js));
                $("#skill li").eq(3).find(".num").text(Math.floor(mySkill.react));
                $("#skill li").eq(4).find(".num").text(Math.floor(mySkill.node));
                $("#skill li").eq(5).find(".num").text(Math.floor(mySkill.java));
                $("#skill li").eq(6).find(".num").text(Math.floor(mySkill.spring));
            },
        },
        "circleStart+=1"
    );

const profileSlider = new Swiper(".album", {
    autoplay: true,
    speed: 500,
    effect: "fade",
    loop: true,
    pagination: {
        el: ".album .pagination",
        type: "bullets",
        clickable: true,
    },
});

const portfolioTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
    },
});
// const contectTL = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#contact",
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         scrub: 1,
//     },
// });

function showCursorInfo() {
    console.log(e.clientY);
    console.log(e.pageY);
    console.log(e.offsetY);
    console.log(e.screenY);
    $("input[name='clientY']").val(e.clientY);
    $("input[name='pageY']").val(e.pageY);
    $("input[name='offsetY']").val(e.offsetY);
    $("input[name='screenY']").val(e.screenY);
}

const cursor = $(".cursor");
$(window).on("mousemove", function (e) {
    //showCursorInfo();
    gsap.to(cursor, { left: e.clientX, top: e.clientY });
});

const itemListUL = $("#portfolio .itemList");

let grid = null;

$.ajax({
    url: "../data/portfolio.json",
    success: function (res) {
        //console.log(res);
        const itemList = res.portfolioList;
        let output = "";
        $.each(itemList, function (idx, item) {
            output += `
                <li class="item ${item.category}">
                    <a href="../images/portfolio/${item.img}" data-fancybox="${item.category}" data-caption="${item.title} <a href='${item.link}' target='_blank'>LINK</a>">
                        <div class="img">
                                <img src="../images/portfolio/${item.img}" alt="" />
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p class="desc">${item.desc}</p>
                            <p class="skill">skill : <strong>${item.skill}</strong></p>
                            <p class="period">period : <strong>${item.period}</strong></p>
                            <p class="category">category : <strong>${item.category}</strong></p>
                        </div>
                    </a>
                </li>
                `;
        });
        itemListUL.html(output);
        Fancybox.bind("[data-fancybox]");
        $(".itemList").imagesLoaded(function () {
            grid = $(".itemList").isotope({
                // options
                itemSelector: ".item",
                layoutMode: "masonry",
                getSortData: {
                    point: ".point parseFloat",
                    title: ".title",
                },
            });
        });
        portfolioTL
            .from("#portfolio h2 .char", {
                x: "+=100",
                color: "rgb(165, 1, 1)",
                opacity: 0,
                stagger: {
                    each: 0.1,
                },
            })
            .from("#portfolio h2 .char", {
                color: "red",
                stagger: {
                    each: 0.1,
                },
            })
            .from("#portfolio #filter ul li", {
                opacity: 0,
                stagger: {
                    each: 0.1,
                },
            })
            .from("#portfolio .itemList li", {
                y: "+=100",
                opacity: 0,
                stagger: {
                    each: 0.1,
                },
            });
    },
});

$("#filter li").on("mouseenter", function () {
    gsap.killTweensOf(".cursor");
    $(".cursor .txt").text("CLICK");
    gsap.to(".cursor", {
        width: 50,
        height: 50,
        backgroundColor: "rgb(165, 1, 1)",
        ease: "elastic",
        duration: 1,
    });
});
$("#filter li").on("mouseleave", function () {
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

$(".itemList").on("mouseenter", "li", function () {
    gsap.killTweensOf(".cursor");
    $(".cursor .txt").text("VIEW");
    gsap.to(".cursor", {
        width: 50,
        height: 50,
        backgroundColor: "rgb(165, 1, 1)",
        ease: "elastic",
        duration: 1,
    });
});
$(".itemList").on("mouseleave", "li", function () {
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

$("#filter li").on("click", function () {
    if ($(this).hasClass("on")) return;
    $(this).addClass("on").siblings("li").removeClass("on");
    const _filter = $(this).data("filter");
    grid.isotope({
        filter: `.${_filter}`,
        sortBy: ["point", "title"],
        sortAscending: false,
    });
});

//porfolio
const popup = $("#popup");
const btnOneday = popup.find(".oneday");
const btnClose = popup.find(".close");
btnOneday.on("click", function () {
    //popup.hide();
    Cookies.set("oneday", "one", { expires: 1 });
    gsap.to("#popup", {
        duration: 1,
        top: "-100%",
        ease: "back.in",
        onComplete: function () {
            popup.remove();
        },
    });
});
//cookie를 이용
btnClose.on("click", function () {
    //popup.hide();
    gsap.to("#popup", {
        duration: 1,
        top: "-100%",
        ease: "back.in",
        onComplete: function () {
            popup.remove();
        },
    });
});

console.log(Cookies.get("oneday"));
if (Cookies.get("oneday") === "one") {
    popup.hide();
} else {
    popup.show();
}
