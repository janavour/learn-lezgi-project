"use strict"
const changeColorSchemeBtn = document.querySelector('#color-scheme-btn')
const rootElem = document.querySelector(':root')

function changeTheme(theme) {
    if (theme === 'dark' && rootElem.className === 'bright') {
        document.querySelector('#color-scheme-btn img').src='assets/img/sun.png'
        rootElem.classList.toggle('bright')
    } else if (theme === 'bright') {
        rootElem.classList.toggle('bright')
        document.querySelector('#color-scheme-btn img').src='assets/img/moon.png'
    }
}

changeColorSchemeBtn.addEventListener('click', () => {
    const themeType = rootElem.className !== 'bright' ? 'bright' : 'dark'

    changeTheme(themeType)
    localStorage.setItem('theme', themeType)
})

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme')
    if (!theme) return;
    changeTheme(theme);
})