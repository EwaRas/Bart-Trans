//toggle menu
var toggle = document.querySelector('#menu-toggle');
var menu = document.querySelector('#nawigacja-menu');

toggle.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
        toggle.classList.remove('cross-menu');
    } else {
        menu.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
        toggle.classList.add('cross-menu');
    }
});
menu.addEventListener('click', function() {
    menu.classList.remove('is-active');
    toggle.classList.remove('cross-menu');
});
var dropDownMenu = document.querySelectorAll('.drop-down-submenu');
var dropDownList = document.querySelectorAll('.drop-down-list');
var lastLinkDropDown = document.querySelectorAll('.drop-down-submenu li:last-child a');

function openDropDown(e) {
    e.currentTarget.closest('.drop-down-list').classList.add('is-open');
    e.currentTarget.querySelector('.drop-down-button').setAttribute('aria-expanded', 'true');
    e.currentTarget.querySelector('.drop-down-submenu').classList.add('drop-down-active');
}

function closeDropDown(e) {
    e.target.closest('.drop-down-list').classList.remove('is-open');
    e.target.closest('.drop-down-list').querySelector('.drop-down-button').setAttribute('aria-expanded', 'false');
    e.target.closest('.drop-down-list').querySelector('.drop-down-submenu').classList.remove('drop-down-active');
}

function clickToggle(e) {
    if (e.target.closest('.drop-down-list').classList.contains('is-open') || e.target.classList.contains('drop-down-list-link')) closeDropDown(e);
    else openDropDown(e);
}


function addEvent(evnt, elem, func) {
    if (elem.addEventListener)
        elem.addEventListener(evnt, func, false);
    else if (elem.attachEvent) {
        elem.attachEvent("on" + evnt, func);
    } else {
        elem["on" + evnt] = func;
    }
}

for (var i = 0; i < dropDownList.length; i++) {
    console.log(dropDownList[i].id);
    addEvent('mouseenter', dropDownList[i], openDropDown);
    addEvent('focusin', dropDownList[i], openDropDown);
    addEvent('focus', dropDownList[i], openDropDown);
    addEvent('click', dropDownList[i], clickToggle);
    addEvent('mouseleave', dropDownList[i], closeDropDown);
    addEvent('focusout', dropDownList[i].querySelector('.drop-down-submenu li:last-child a'), closeDropDown);

}


/*

//Move focus from cliked link to linked section (for IE)
const sections = document.querySelectorAll('[id]');
const sectionIds = [];
const menuLinks = menu.querySelectorAll('a');
const menuLinksArr = [];

for (let i = 0; i < sections.length; i++) {
    sectionIds[i] = sections[i]
}
for (let i = 0; i < menuLinks.length; i++) {
    menuLinksArr[i] = menuLinks[i]
}

function moveFocus(e) {
    let link = e.target.getAttribute('href');
    let elId;
    for (let i = 0; i < sectionIds.length; i++) {
        elId = '#' + sectionIds[i].getAttribute('id');
        if (link == elId) {
            sectionIds[i].querySelector('a:first-of-type').focus();
            e.preventDefault();
        }
    }
}
for (let i = 0; i < menuLinksArr.length; i++) {
    menuLinksArr[i].addEventListener('click', moveFocus);
}*/