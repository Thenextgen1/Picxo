const myNav = document.querySelector('#backnav');
window.addEventListener('scroll', () => {
    let lastPosition = window.scrollY;
    if (lastPosition > 50) {
        myNav.style.backgroundColor = '#6b705c';
    }
})



// const myNav = document.querySelector('#backnav');
// window.addEventListener('scroll', function () {
//     const lastPosition = window.scrollY;
//     if (lastPosition > 50) {
//         myNav.classList.add('adjust');
//     } else if (myNav.classList.contains('adjust')) {
//         myNav.classList.remove('adjust');
//     } else {
//         myNav.classList.remove('adjust');
//     }
// })