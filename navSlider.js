const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navBar = document.querySelectorAll('.nav-bar li');
  
    window.onscroll = () => {
      if(window.pageYOffset >= navBar.offsetTop)
        nav.classList.add("sticky");
      else
        nav.classList.remove("sticky");
    };
  
    burger.addEventListener('click',()=> {
      nav.classList.toggle('nav-on');
  
      navBar.forEach((link, index) => {
        if(link.style.animation) 
          link.style.animation = '';
        else
          link.style.animation=`navSliderFade 0.5s ease forwards ${index/7 + 0.69}s`;
      });
  
      burger.classList.toggle('toggle');
    });
  }
  
  navSlider();