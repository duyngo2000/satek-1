$(document).ready(() => {
    // const menu = ['../images/detail-oi.webp', '../images/detail-cam.webp', '../images/detail-xoai.webp', '../images/detail-dua.webp', '../images/detail-chanhday.webp',]
    const slideMenu = [
        "oi-slide",
        "cam-slide",
        "mango-slide",
        "dua-slide",
        "chanhday-slide",
    ]

    const menu = [
        {
            name: "PINK GUAVA",
            calories: 320,
            img: "../images/detail-oi.webp",
            background1: "#bfe18d",
            background2: "#9bc461",
            backgroundText1: "#9bc461 0%",
            backgroundText2: "rgba(255, 255, 255, 0.1) 80%",
            text: `<span class="fw-bold">Pink Guava is</span> a sweet,
            aromatic, and crunchy pineapple commonly foundin Dong Thap
            province.Pink Guavas are yellow when ripe, cone - shaped,
        about 6cm in meter and about 15cm in length.The average weight
            of a Pink Guava is between. 1200 and 500 grams,
        <span class="fw-bold"
        >and it is considered one of the most delicious pineapples in
            Vietnam, 'adored and purchased by many.</span
        >`,
        },
        {
            name: "ORANGE",
            calories: 400,
            img: "../images/detail-cam.webp",
            background1: "#69ddbf",
            background2: "#5cc9b4",
            backgroundText1: "#8edfcd 0%",
            backgroundText2: "rgba(142, 223, 205, 0.1) 80%",
            text: `<span class="fw-bold">Orange is</span> a sweet,
            aromatic, and crunchy pineapple commonly foundin Dong Thap
            province.Oranges are yellow when ripe, cone - shaped,
        about 6cm in meter and about 15cm in length.The average weight
            of a Orange is between. 1200 and 500 grams,
        <span class="fw-bold"
        >and it is considered one of the most delicious pineapples in
            Vietnam, 'adored and purchased by many.</span
        >`,
        },
        {
            name: "MANGO",
            calories: 240,
            img: "../images/detail-mango.webp",
            background1: "#f7cb67",
            background2: "#f7ce8b",
            backgroundText1: "#e5b46c 0%",
            backgroundText2: "rgba(240, 194, 116, 0.1) 80%",
            text: `<span class="fw-bold">Mango is</span> a sweet,
            aromatic, and crunchy pineapple commonly foundin Dong Thap
            province.Mangos are yellow when ripe, cone - shaped,
        about 6cm in meter and about 15cm in length.The average weight
            of a Mango is between. 1200 and 500 grams,
        <span class="fw-bold"
        >and it is considered one of the most delicious pineapples in
            Vietnam, 'adored and purchased by many.</span
        >`,
        },
        {
            name: "PINEAPPLE",
            calories: 500,
            img: "../images/detail-dua.webp",
            background1: "#f6c4c3",
            background2: "#f3afad",
            backgroundText1: "#f7cdcc 0%",
            backgroundText2: "rgba(245, 187, 185, 0.1) 80%",
            text: `<span class="fw-bold">Pineapple is</span> a sweet,
            aromatic, and crunchy pineapple commonly foundin Dong Thap
            province.Pineapples are yellow when ripe, cone - shaped,
        about 6cm in meter and about 15cm in length.The average weight
            of a Pineapple is between. 1200 and 500 grams,
        <span class="fw-bold"
        >and it is considered one of the most delicious pineapples in
            Vietnam, 'adored and purchased by many.</span
        >`,
        },
        {
            name: "PASSION",
            calories: 160,
            img: "../images/detail-chanhday.webp",
            background1: "#b777c3",
            background2: "#995baa",
            backgroundText1: "#9862a7 0%",
            backgroundText2: "rgba(165, 105, 181, 0.1) 80%",
            text: `<span class="fw-bold">Passion is</span> a sweet,
            aromatic, and crunchy pineapple commonly foundin Dong Thap
            province.Passions are yellow when ripe, cone - shaped,
        about 6cm in meter and about 15cm in length.The average weight
            of a Passion is between. 1200 and 500 grams,
        <span class="fw-bold"
        >and it is considered one of the most delicious pineapples in
            Vietnam, 'adored and purchased by many.</span
        >`,
        },
    ]

    const detail = localStorage.getItem("detail")
    if (detail == null) {
        $(".detail-image").attr("src", menu[0])
    }

    for (let i = 0; i < slideMenu.length; i++) {
        if (slideMenu[i] == detail) {
            $(".section-details").css('background', `linear-gradient(180deg, ${menu[i].background1}, ${menu[i].background2})`)
            $(".text-inset").css({ 'background': `linear-gradient(180deg, ${menu[i].backgroundText1}, ${menu[i].backgroundText2})`, 'background-clip': 'text', 'color': 'transparent' })
            $(".calories").text(menu[i].calories)
            $(".detail-image").attr("src", menu[i].img)
            $(".desription").html(menu[i].text)
        }
    }
    $(".detail-image").on("error", function (event) {
        event.target.src = "../images/noimg.jpg"
        event.onerror = null
    })
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > $(".header").height()) {
            for (let i = 0; i < slideMenu.length; i++) {
                if (slideMenu[i] == detail) {
                    $(".header").css({ "background": menu[i].background2, "box-shadow": `0px 2px 5px 5px ${menu[i].background1}` })
                }
            }
        }
        else {
            $(".header").css({ "background": "transparent", "box-shadow": "none" })
        }
    })
})
