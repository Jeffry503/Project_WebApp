$(document).ready(function() {
    // Handle page transitions
    $('.nav-link').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      
      // Remove active class from all pages
      $('.page').removeClass('active');
  
      // Add active class to target page
      $(target).addClass('active');
  
      // Handle fade-in and fade-out transitions
      $('.page').addClass('leaving');
      $(target).removeClass('leaving');
    });
  });
  