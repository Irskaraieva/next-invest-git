/* opening nav lists*/
const investment = document.querySelector('.investment');
const investmentImg = document.querySelector('.investment__img');
const howItWorks = document.querySelector('.how__it__works');
const investmentList = document.querySelector('#open__investment');
const howItWorksList = document.querySelector('#open__how');

investment.addEventListener('click', function() {
    investmentList.classList.toggle('open');

    if (investmentList.classList.contains('open')) {
        howItWorksList.classList.remove('open');
      }
});

howItWorks.addEventListener('click', function() {
    howItWorksList.classList.toggle('open');

    if (howItWorksList.classList.contains('open')) {
        investmentList.classList.remove('open');
      }
});

document.addEventListener('click', function(event) {
    if (!event.target.matches('.investment') && !event.target.matches('.how__it__works')) {
      investmentList.classList.remove('open');
      howItWorksList.classList.remove('open');
    }
});

/* opening mob navigate*/

const showMenu = document.querySelector('.header__menu');
const navBtn = document.querySelector('.nav__btn');
const navBtnImg = document.querySelector('#nav__btn__img');

navBtn.onclick = () => {
   if (showMenu.classList.toggle('active')) {
    navBtnImg.src = './photo/close.svg';
   } else {
    navBtnImg.src = './photo/menu-burger.svg';
   }
};

/*remove active for screenWidth > 1000*/

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000 && showMenu.classList.contains('active')) {
        showMenu.classList.remove('active');
        navBtnImg.src = './photo/menu-burger.svg';
    }
});

const projects = document.getElementById('projects');
const viewAllBtn = document.querySelector('.view-all');

viewAllBtn.addEventListener('click', () => {
  projects.classList.toggle('expanded');
});

// Back to Top
const backToTopButton = document.querySelector('.back__to__top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});