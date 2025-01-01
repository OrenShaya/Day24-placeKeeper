'use strict'

function onInit() {
    loadUserStorage()
    renderColors()
    displayBithday()
}

function renderColors() {
    const user = loadUserStorage()    
    
    const root = document.querySelector(":root");
    root.style.setProperty("--txt-color", user.txtColor);
    root.style.setProperty("--bg-color", user.bgColor);
}

function displayBithday() {
    const user = loadUserStorage()
    var birthdayText = 'Your birthday is on: '
    if (user.birthDate) birthdayText += `${user.birthDate} `
    if (user.birthTime) birthdayText += `${user.birthTime} `
    const elBirthday = document.querySelector('.birth-day')
    elBirthday.innerText = birthdayText
}