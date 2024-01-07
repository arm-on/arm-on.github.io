// Add lightbox class to all image links magnific-popup
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// All others magnific-popup
$(document).ready(function () {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 600, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

// FitVids options
$(function () {
  $(".content").fitVids();
});

// Projects Menu
$('.projects-menu-icon').click(function () {
  $('html').toggleClass('no-scroll');
  $(this).toggleClass('active');
  $('.overlay').toggleClass('show-projects');
});

// Languages Menu
$('.languages-menu-icon').click(function () {
  $('html').toggleClass('no-scroll');
  $(this).toggleClass('active');
  $('.overlay').toggleClass('show-languages');
});

// Mode Menu
$('.mode-menu-icon').click(function () {
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'light' ? 'dark' : 'light');
  localStorage.getItem('mode') === 'light' ? lightMode('transition') : darkMode('transition');
  changeModeIcon('indirect');

});

// load mode as fast as the page loads
$(document).on('DOMContentLoaded', modeKeeper);

// fires onscroll function
$('.block-right').on('scroll', readProgressBar);

function modeKeeper() {
  // gets mode from local storage and if it's not initialized yet, sets it to 'light'
  // and the calls mode specific functions to change css styles
  // it ues no-transition mode because it's not "changing" mode,
  // it's only keeping it between refreshes or going to other pages in the site
  (localStorage.getItem('mode') || 'light') === 'light' ? lightMode('no-transition') : darkMode('no-transition');
  changeModeIcon('direct');
}

function changeModeIcon(mode) {
  if (mode === 'direct') {
    localStorage.getItem('mode') === 'light' ? $("#sun-moon").removeClass('fa-sun').addClass('fa-moon') : $("#sun-moon").removeClass('fa-moon').addClass('fa-sun');
  } else if (mode == 'indirect') {
    localStorage.getItem('mode') === 'light' ? $("#sun-moon").toggleClass('fa-moon fa-sun') : $("#sun-moon").toggleClass('fa-sun fa-moon');
  }
}

function lightMode(mode) {
  let light;
  if (mode === 'transition') {
    light = 'light transit';
  } else if (mode === 'no-transition') {
    light = 'light';
  }

  // I need help to somehow clean this ugly code
  // all this classes should be in a list and the method iterate over them
  // I couldn't find a way to do that so I just put everything in this ...
  $('body, .languages-menu-icon, .languages-menu-icon-posts, .mode-menu-icon, .posts-menu-icon, .projects-menu-icon').removeClass('transit').removeClass('dark').addClass(light);
  $('.mode-link, .languages-link, .posts-link, .projects-link, .about-info, .posts-list, .inner-post, .tags, .tag-heading').removeClass('transit').removeClass('dark').addClass(light);
  $('.highlighter-rouge, .highlight, .change-language, .date-highlight, .pagination, .pagination_pager, .entry-meta').removeClass('transit').removeClass('dark').addClass(light);
  $('.btn, .notice, .notice_warning, .notice_success, .notice_danger, .notice_info, blockquote, table, thead, dt, dd').removeClass('transit').removeClass('dark').addClass(light);
}

function darkMode(mode) {
  let dark;
  if (mode === 'transition') {
    dark = 'dark transit';
  } else if (mode === 'no-transition') {
    dark = 'dark';
  }

  $('body, .languages-menu-icon, .languages-menu-icon-posts, .mode-menu-icon, .posts-menu-icon, .projects-menu-icon').removeClass('transit').removeClass('light').addClass(dark);
  $('.mode-link, .languages-link, .posts-link, .projects-link, .about-info, .posts-list, .inner-post, .tags, .tag-heading').removeClass('transit').removeClass('light').addClass(dark);
  $('.highlighter-rouge, .highlight, .change-language, .date-highlight, .pagination, .pagination_pager, .entry-meta').removeClass('transit').removeClass('light').addClass(dark);
  $('.btn, .notice, .notice_warning, .notice_success, .notice_danger, .notice_info, blockquote, table, thead, dt, dd').removeClass('transit').removeClass('light').addClass(dark);
}

function readProgressBar() {
  // calculate the percentage the user has scrolled down the page
  // calculates the maximum height of block-right and then
  // gets percentage of current height divided by maximum height to fill the progress bar
  var currentLocationHeight = $('.block-right').scrollTop();
  // it comes to my attention that the height is way too bigger
  // than it should be and even I scroll to end of page,
  // currentLocationHeight != maximumHeight
  // so after some tests I came with this dirty hack to
  // subtract 780 from maximum height so it would work just fine
  var maximumHeight = $('.block-right')[0].scrollHeight - 780;

  // honestly copied this part from stackoverflow and have no idea what these if's do!
  if (currentLocationHeight >= $('.block-right').offset().top) {
    if (currentLocationHeight <= ($('.block-right').offset().top + maximumHeight)) {
      // I understand this part
      $('.read-progress-bar').css('width', ((currentLocationHeight - $('.block-right').offset().top) / maximumHeight) * 100 + "%");
    } else {
      // and this part
      $('.read-progress-bar').css('width', "100%");
    }
  } else {
    $('.read-progress-bar').css('width', "0px");
  }
}

// Smooth Scroll function
// funny thing about this part of my code is that I've tried many ways with jquery
// to do this and the result didn't make me happy, but ironically this pure javascript did the job
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
