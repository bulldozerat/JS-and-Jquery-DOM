function action() {
    let nav = document.getElementById('nav');
    nav.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';

    if (window.scrollY < 300) {
        nav.style.backgroundColor = 'red';
    }else if(window.scrollY > 300) {
        nav.style.backgroundColor = 'rgba(0, 0, 255, 0.7)';
    }

    if(window.scrollY > 500){
        nav.style.backgroundColor = 'rgba(40, 40, 55, 0.4)';
    }
}