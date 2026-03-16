// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
    offset: 80
});

// Navbar scroll effect
var navbar = document.getElementById('mainNav');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll-spy: highlight active nav link
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// Back to top button
var backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Close mobile nav on link click
var navCollapse = document.getElementById('navContent');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (navCollapse.classList.contains('show')) {
            var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});
