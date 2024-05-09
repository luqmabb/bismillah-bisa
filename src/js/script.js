// navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

//hamburger
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
})

//navbar menu
hamburger.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('hidden')
})

//get in touch
document.getElementById('getData').addEventListener('submit', (event) => {
    event.preventDefault()

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(name === '') {
        return alert('Please type your name')
    } else if(email === '') {
        return alert('Please type your email')
    } else if(message === '') {
        return alert('please type your message')
    }

    const emailDestination = "luqmannfauzy46@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${emailDestination}?subject=collaboration&body= Hello my name is, ${name}, ${message}`
    a.click()

    const data = {
        name,
        email,
        message
      }
    
      console.log(data)

})

