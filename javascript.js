//tab-uri

function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('active', '');
    });
    
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  }
  
  const element = document.getElementById('nav-tab');
  
  element.addEventListener('click', onTabClick, false);


//accordeon

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function() {
    
      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      console.log("test")
      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    })
});
