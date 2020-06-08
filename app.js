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
    } else {
    }
};

let navBarDOMAt1366 = window.matchMedia("(min-width: 1366px)");
triggerAt1366px(navBarDOMAt1366);
navBarDOMAt1366.addListener(triggerAt1366px);

const triggerAt1365px = (navBarDOMAt1365) => {
    if (navBarDOMAt1365.matches) {
        dropDownMenu.appendChild(navList);
    } else {
        navLinks.insertBefore(navList, btnRealP);
    }
};

let navBarDOMAt1365 = window.matchMedia("(max-width: 1365px)");
triggerAt1365px(navBarDOMAt1365);
navBarDOMAt1365.addListener(triggerAt1365px);

const triggerAt800px = (navBarDOMAt800) => {
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
});

yearlyBtn.addEventListener("click", () => {
    yearlyBtn.classList.add("on-checked-radio");
    monthlyBtn.classList.remove("on-checked-radio");
});
