document.addEventListener("DOMContentLoaded", function() {
    var nut = document.querySelector('.bars');
    var khoi = document.querySelector('.noidungto');
    var den = document.querySelector('.den');
    nut.onclick = function() {
        den.classList.toggle('len');
        khoi.classList.toggle('dichphai');
    }
    den.onclick = function() {
            den.classList.remove('len');
            khoi.classList.remove('dichphai');
        }
        //xu ly menu
    var menu = document.querySelector('.menu');
    var trangthaimenu = 'duoi100';
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            if (trangthaimenu == 'duoi100') {
                menu.classList.add('xulymenu');
                trangthaimenu = 'tren100';
            }
        } else if (window.pageYOffset < 100) {
            if (trangthaimenu == 'tren100') {
                menu.classList.remove('xulymenu');
                trangthaimenu = 'duoi100';
            }

        }
    })

}, false)