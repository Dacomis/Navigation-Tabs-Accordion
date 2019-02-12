//tabs

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


// accordion

document.addEventListener('click', function (event) {
  
  if (!event.target.classList.contains('accordion-toggle')) return;
  
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  event.preventDefault();
  
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  var accordions = document.querySelectorAll('.accordion-content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  content.classList.toggle('active');
})