let MenuBtn =document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('header').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
    this.classList.toggle('fa-bars');
})


let typed = new Typed('.auto-input',{
    strings:['Designer!','FrontEnd Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });
