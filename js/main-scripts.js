// Nav bar
const navBtn = document.querySelectorAll('#nav-bar button')
const pageSections = document.querySelectorAll('.page-sections')

// Click btn in nav-bar to change to that class section
for (let btn = 0; btn < navBtn.length; btn++) {
    navBtn[btn].addEventListener('click', () => {
        for (let i = 0; i < navBtn.length; i++) {
            navBtn[i].classList.remove('selected')
            pageSections[i].classList.add('hidden')
        }

        navBtn[btn].classList.add('selected')
        pageSections[btn].classList.remove('hidden')

    })
}