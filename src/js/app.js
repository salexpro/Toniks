/* eslint no-unused-vars: off */
/* global Foundation, initMap, google */

/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min',
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min';
@codekit-prepend quiet '../../node_modules/owl.carousel/dist/owl.carousel.min';
*/

$(document).foundation();

const menu = $('.head--fixed');
$(window).scroll(() => {
    if($(window).scrollTop() > 70){
        menu.addClass('is_visible');
    } else {
        menu.removeClass('is_visible');
    }
});

$('.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        1024: {
            items: 3
        }
    }
});

const offcanvas = $('.off-canvas');
function responsive(size) {
    if (size === 'small') {
        offcanvas.removeClass('position-top').addClass('position-left');
        $('.menu', offcanvas).addClass('vertical');
        $('.button', offcanvas).removeClass('clear');
        $('.close-button', offcanvas).addClass('small');
    } else {
        offcanvas.addClass('position-top').removeClass('position-left');
        $('.menu', offcanvas).removeClass('vertical');
        $('.button', offcanvas).addClass('clear');
        $('.close-button', offcanvas).removeClass('small');
    }
}

$(window).on('changed.zf.mediaquery', (event, newSize) => {
    responsive(newSize);
})

responsive(Foundation.MediaQuery.current);

// Contact map
function initMap() {
    const latlng = {
        lat: 48.1579592,
        lng: 11.5852069
    };

    let center = {lat: 48.1579592, lng: 11.5852069};
    if (Foundation.MediaQuery.current !== 'small') center.lat = 48.1609592

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        disableDefaultUI: true
    });

    const marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
}


// Form submitting
