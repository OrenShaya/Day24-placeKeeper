'use strict'

const STORAGE_KEY = 'userSetting'
var gUser = {
    email: '',
    txtColor: '#ad0303',
    bgColor: '#333333',
    age: NaN,
    birthDate: '',
    birthTime: '',
}

function onInitUser() {
    loadUserStorage()
    renderColors()
    loadUserSettings()
}

function saveUserSettings(event, settings) {
    event.preventDefault()

    if (settings.txtColor) {
        const txtColor = settings.txtColor.value
        gUser.txtColor = txtColor
    }
    if (settings.bgColor) {
        const bgColor = settings.bgColor.value
        gUser.bgColor = bgColor
    }   // maybe remove the if's and make the form required
    if (settings.email) gUser.email = settings.email.value
    if (settings.age) gUser.age = settings.age.value
    if (settings.birthDate) gUser.birthDate = settings.birthDate.value
    if (settings.birthTime) gUser.birthTime = settings.birthTime.value

    saveUserStorage()
    renderColors()
}

function loadUserSettings() {
    const user = loadUserStorage()

    const elSettings = document.querySelector('.settings')
    elSettings.email.value = user.email
    elSettings.txtColor.value = user.txtColor
    elSettings.bgColor.value = user.bgColor
    console.log(user.age);
    console.log(elSettings.age)   
    
    elSettings.age.value = user.age
    elSettings.birthDate.value = user.birthDate
    elSettings.birthTime.value = user.birthTime
}

function saveUserStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gUser))
}

function loadUserStorage() {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEY))
    gUser = {...user}
    return gUser
}