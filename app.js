const hamMenuBtn = document.querySelector(".ham-menu");
const topBar = document.querySelector(".top-bar");
const midBar = document.querySelector(".mid-bar");
const bottomBar = document.querySelector(".bottom-bar");
const dropDownMenu = document.querySelector(".drop-down-list");
const navList = document.querySelector(".list");
const navBar = document.querySelector(".nav-ele");
const navLinks = document.querySelector(".links-section");
const callToActionBtn = document.querySelector(".nav-cta .trial");
const btnRealP = document.querySelector(".nav-cta");
const navBarContainer = document.querySelector(".nav-container");
const hamWrapper = document.querySelector(".wrapper");
const landingParent = document.querySelector("#landing");
const lastName = document.querySelector(".last-name");
const iconSVG = document.querySelector(".icon-svg path");
const monthlyBtn = document.querySelector(".monthly .radio-btn");
const yearlyBtn = document.querySelector(".yearly .radio-btn");
const listOfBrandCards = document.querySelectorAll(".b");
const imgLogo = document.querySelector(".brand-logo img");
const textBrandC = document.querySelector(".brand-txt-11");
const owner = document.querySelector(".name-of-owner");
const price = document.querySelectorAll(".individual .specific .monthly-price");

const imagePreUrl = "./assets/";
const imagePostUrl = [
    "designit-vfl6xuIHt.svg",
    "university_of_florida-vflZIQgCW.svg",
    "arizona_state_university-vfliy24jJ.svg",
    "topps-vflkySfq1.svg",
    "world_bicycle_relief-vfleERmxe.svg",
    "lonely_planet-vflHDIWAi.svg",
    "hearst_corp-vflzU5uY9.svg",
    "expedia-vfl5NETTa.svg",
];

const coloursOriginal = [
    "#a2d39b",
    "#0093ce",
    "#61082b",
    "#ff1c1c",
    "#d5001f",
    "#0d2481",
    "#b4d0e7",
    "#ffd830",
];

const coloursHighlight = [
    "#D1E9CD",
    "#80C9E7",
    "#B08495",
    "#FF8E8E",
    "#EA808F",
    "#8692C0",
    "#DAE8F3",
    "#FFEC98",
];

const brandText = [
    "Our team is constantly working across different countries, time zones and offices. A lot of solutions can accommodate that now, but none make it as seamless as Dropbox and Dropbox Paper.",
    "Our users were accomplishing a lot of great work on Dropbox without any support. Deploying a central account allowed that great work to continue, uninterrupted, in the most secure way possible.",
    "With Dropbox, educators can collaborate securely with colleagues on any device and platform — across campus and across the world.",
    "“We’ve always been a pioneer in the card industry, and we think of ourselves in the same way in the digital space. Thankfully, we pretty much have three words internally that keep us creating great work: ‘It’s on Dropbox.’”",
    "We’re receiving tons of pictures and are constantly overriding things that couldn’t be managed in email. Dropbox saves us a huge amount of miscommunication by allowing the latest versions of documents to be available to everybody at all times.",
    "We’ve always had a global presence, but before Dropbox, we couldn’t be as spread out as we are now. Dropbox makes our employees feel like they’re all in the same office.",
    "Hearst has more than 360 businesses. Dropbox makes a significant impact by providing a central hub for our teams to access all of the content they need from anywhere, on any device. It has completely changed the way these teams work.",
    "A lot of times when we deploy software, we first hear about the challenges. But during our phased deployment of Dropbox Business, we mostly just heard employees saying, ‘Can I get that now?’",
];

const brandOwner = [
    "Morten Thomsen, Global IT Lead",
    "Elias Eldayrie, Vice President & CIO",
    "Tina Thorstenson, CISO",
    "Chris R. Vaccaro, Director, Live Operations & Editor-in-Chief, Mobile",
    "Andrew Hall, Product Manager",
    "Daniel Jiménez, Head of Mobile Product & Design",
    "Nicole D’Antuono, VP of Employee Applications",
    "Chris Burgess, VP of IT",
];

let i = 0;

const highlightBorder = () => {
    if (window.innerWidth >= 880) {
        if (i === 0 || i === 8) {
            if (i === 8) {
                listOfBrandCards[i - 1].style.borderColor =
                    coloursOriginal[i - 1];
                i = 0;
            }
            listOfBrandCards[i].style.borderColor = coloursHighlight[i];
            document.querySelector(".strip").classList.add("add-anim");
            imgLogo.setAttribute("src", imagePreUrl + imagePostUrl[i]);
            textBrandC.textContent = brandText[i];
            owner.textContent = brandOwner[i];
            i++;
        } else {
            listOfBrandCards[i - 1].style.borderColor = coloursOriginal[i - 1];
            listOfBrandCards[i].style.borderColor = coloursHighlight[i];
            imgLogo.setAttribute("src", imagePreUrl + imagePostUrl[i]);
            textBrandC.textContent = brandText[i];
            owner.textContent = brandOwner[i];
            i++;
        }
    } else {
        for (let i = 0; i < listOfBrandCards.length; i++) {
            listOfBrandCards[i].style.borderColor = coloursOriginal[i];
        }
    }
};

const startImm = (func, time) => {
    func();
    return setInterval(func, time);
};
startImm(highlightBorder, 5000);

window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
        navBarContainer.classList.add("nav-white");
        navBar.classList.add("nav-on-scroll");
        iconSVG.classList.add("svg-scrolled");
        callToActionBtn.classList.add("button-white");
        lastName.classList.add("last-name-on-scroll");
    } else if (window.scrollY < 15) {
        navBarContainer.classList.remove("nav-white");
        navBar.classList.add("nav-on-scroll");
        iconSVG.classList.remove("svg-scrolled");
        callToActionBtn.classList.remove("button-white");
        lastName.classList.remove("last-name-on-scroll");
    }
});

hamMenuBtn.addEventListener("click", () => {
    topBar.classList.toggle("open-nav-top");
    bottomBar.classList.toggle("open-nav-bottom");
    midBar.classList.toggle("open-nav-mid");
    dropDownMenu.classList.toggle("drop-down-list-now-shown");
    navBar.classList.toggle("nav-bar-with-open-menu");
    if (!navBarContainer.classList.contains("nav-white")) {
        navBarContainer.classList.add("nav-white");
        callToActionBtn.classList.add("button-white");
    } else if (
        navBarContainer.classList.contains("nav-white") &&
        window.scrollY > 15
    ) {
        navBarContainer.classList.add("nav-white");
        callToActionBtn.classList.add("button-white");
        lastName.classList.add("last-name-on-scroll");
    } else {
        navBarContainer.classList.remove("nav-white");
        callToActionBtn.classList.remove("button-white");
        lastName.classList.remove("last-name-on-scroll");
    }
    landingParent.classList.toggle("nav-above-landing");
    document.querySelector("body").classList.toggle("hide-overflow-y");
});

const triggerAt1365px = (navBarDOMAt1365) => {
    // console.log("1365");
    if (navBarDOMAt1365.matches) {
        dropDownMenu.appendChild(navList);
    } else {
        navLinks.insertBefore(navList, hamMenuBtn);
    }
};

let navBarDOMAt1365 = window.matchMedia("(max-width: 1365px)");
triggerAt1365px(navBarDOMAt1365);
navBarDOMAt1365.addListener(triggerAt1365px);

const triggerAt800px = (navBarDOMAt800) => {
    // console.log("800");

    if (navBarDOMAt800.matches) {
        dropDownMenu.insertBefore(btnRealP, navList);
    } else {
        navLinks.insertBefore(btnRealP, hamMenuBtn);
    }
};

let navBarDOMAt800 = window.matchMedia("(max-width: 800px)");
triggerAt800px(navBarDOMAt800);
navBarDOMAt800.addListener(triggerAt800px);

// Radio-btn-logic

monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("on-checked-radio");
    yearlyBtn.classList.remove("on-checked-radio");
    price[0].textContent = "$19.99";
    price[1].textContent = "$15";
    price[2].textContent = "$25";
});

yearlyBtn.addEventListener("click", () => {
    yearlyBtn.classList.add("on-checked-radio");
    monthlyBtn.classList.remove("on-checked-radio");
    price[0].textContent = "$15";
    price[1].textContent = "$12";
    price[2].textContent = "$20";
});

// Media Query
const triggerAt1366px = (navBarDOMAt1366) => {
    if (navBarDOMAt1366.matches) {
        topBar.classList.remove("open-nav-top");
        bottomBar.classList.remove("open-nav-bottom");
        midBar.classList.remove("open-nav-mid");
        dropDownMenu.classList.remove("drop-down-list-now-shown");
        navBar.classList.remove("nav-bar-with-open-menu");
        navBarContainer.classList.remove("nav-white");
        hamWrapper.classList.remove("wrapper-white");
        callToActionBtn.classList.remove("button-white");
        landingParent.classList.remove("nav-above-landing");
        document.querySelector("body").classList.remove("hide-overflow-y");
        navLinks.insertBefore(navList, btnRealP);
    } else {
    }
};

let navBarDOMAt1366 = window.matchMedia("(min-width: 1366px)");
triggerAt1366px(navBarDOMAt1366);
navBarDOMAt1366.addListener(triggerAt1366px);
