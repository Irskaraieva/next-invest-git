/* opening nav lists*/
const investment = document.querySelector('.investment');
const investmentImg = document.querySelector('.investment__img');
const howItWorks = document.querySelector('.how__it__works');
const howItWorksImg = document.querySelector('.how__works__img');
const investmentList = document.querySelector('#open__investment');
const howItWorksList = document.querySelector('#open__how');

investment.addEventListener('click', function () {
  investmentList.classList.toggle('open');
  investmentImg.classList.toggle('arrow-up');

  if (investmentList.classList.contains('open')) {
    howItWorksList.classList.remove('open');
  }
});

investmentImg.addEventListener('click', function (e) {
  e.stopPropagation();
  investmentList.classList.toggle('open');
  investmentImg.classList.toggle('arrow-up');

  if (investmentList.classList.contains('open')) {
    howItWorksList.classList.remove('open');
  }
});

howItWorks.addEventListener('click', function () {
  howItWorksList.classList.toggle('open');
  howItWorksImg.classList.toggle('arrow-up');

  if (howItWorksList.classList.contains('open')) {
    investmentList.classList.remove('open');
  }
});

howItWorksImg.addEventListener('click', function (e) {
  e.stopPropagation();
  howItWorksList.classList.toggle('open');
  howItWorksImg.classList.toggle('arrow-up');

  if (howItWorksList.classList.contains('open')) {
    investmentList.classList.remove('open');
  }
});

const showMenu = document.querySelector('.header__menu');
const navBtn = document.querySelector('.nav__btn');
const navBtnImg = document.querySelector('#nav__btn__img');
const logBtn = document.querySelector('.login');
const registerBtn = document.querySelector('.register');
const aboutBtn = document.querySelector('.about__us');

document.addEventListener('click', function (event) {
  if (!event.target.matches('.investment') && !event.target.matches('.how__it__works')) {
    investmentList.classList.remove('open');
    howItWorksList.classList.remove('open');
    investmentImg.classList.remove('arrow-up');
    howItWorksImg.classList.remove('arrow-up');
  };
});

const hideMenu = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 1000 && showMenu.classList.contains('active')) {
    showMenu.classList.remove('active');
    navBtnImg.src = './photo/menu-burger.svg';
  }
}

logBtn.onclick = () => {
  hideMenu();
}

registerBtn.onclick = () => {
  hideMenu();
}

aboutBtn.onclick = () => {
  hideMenu();
}

/* opening mob navigate*/

navBtn.onclick = () => {
  if (showMenu.classList.toggle('active')) {
    navBtnImg.src = './photo/close.svg';
  } else {
    navBtnImg.src = './photo/menu-burger.svg';
  }
};

/*remove active for screenWidth > 1000*/

window.addEventListener('resize', function () {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1000 && showMenu.classList.contains('active')) {
    hideMenu();
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


AOS.init({
  once: true
});