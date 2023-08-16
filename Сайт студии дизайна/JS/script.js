let dots = document.getElementsByClassName('projects-menu__element'),
    links = document.getElementsByClassName('projects-list__link')
    dotsArea = document.getElementsByClassName('projects-menu__element-wrapper')[0],
    slides = document.getElementsByClassName('projects-photo'),
    prevBtn = document.getElementsByClassName('projects-menu__img-left'),
    nextBtn = document.getElementsByClassName('projects-menu__img-right'),
    city = document.getElementsByClassName('description-element__subtitle city'),
    apartmentArea = document.getElementsByClassName('description-element__subtitle area'),
    repairTime = document.getElementsByClassName('description-element__subtitle time'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < city.length; i++) {
        city[i].style.display = 'none'
    }
    for (let i = 0; i < apartmentArea.length; i++) {
        apartmentArea[i].style.display = 'none'
    }
    for (let i = 0; i < repairTime.length; i++) {
        repairTime[i].style.display = 'none'
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('special');
    }
    city[slideIndex - 1].style.display = 'block';
    apartmentArea[slideIndex - 1].style.display = 'block';
    repairTime[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    links[slideIndex - 1].classList.add('special');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('projects-menu__element') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}