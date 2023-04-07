/* create lists */

const cardsDates = [{
    img: './photo/01.png'
}, {
    img: './photo/02.png'
}, {
    img: './photo/03.png'
}, {
    img: './photo/04.png'
}, {
    img: './photo/05.png'
}, {
    img: './photo/10.png'
}, {
    img: './photo/12.png'
}, {
    img: './photo/07.png'
}, {
    img: './photo/08.png'
}, {
    img: './photo/09.png'
}, {
    img: './photo/10.png'
}, {
    img: './photo/11.png'
}];

function createContentTemplate(cardDate) {
    const article = `
    <article id="card" class="card">                        
    <header id="card__header" class="card__header">
    <div class="card__image">
        <img src='${cardDate.img}' alt="card-image" >
    </div>
    <div class="card__btns">
        <a href="#" alt="House" class="card__left__span">House</a>
        <a href="#" alt="Family business" class="card__right__span">Family business</a>
    </div>
    </header>
    
    <section class="card__content">
    <div class="card__name">
        <h3>Oxalis</h3>
        <h4>Brooklyn, NY</h4>
    </div>
    <div class="card__description">
        <p>A recognized leader in language immersion & early education, opening second school.</p>
    </div>
    <div class="progress">
        <p><span class="price">$574,920</span> raised of $1,000,000</p>
    </div>
    </section>
    
    <section id="card__appear" class="card__appear">
    <div class="card__details">
            <ul class="card__details-table">
                <li>
                    <span class="col-1">Security Type</span>
                    <span class="col-2">Revenue Sharing Note</span>
                </li>
           
                <li>
                    <span class="col-1">Investment Multiple</span>
                    <span class="col-2">1.4x</span>
                </li>

                <li>
                    <span class="col-1">Maturity</span>
                    <span class="col-2">48 Monthse</span>
                </li>

                <li>
                    <span class="col-1">Min. Investment</span>
                    <span class="col-2">$100</span>
                </li>
            </ul>
    </div>
    <a href="#" class="appear__btn">View</a>
    </section>
    </article>
    `;
    return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content;
}

function appendContent(content) {
    const el = document.getElementById('projects');
    el.appendChild(content);
}

function init() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 6; i++) {
        const cardDate = cardsDates[i];
        fragment.appendChild(createContentTemplate(cardDate));
      }

    appendContent(fragment);
}

init(cardsDates);


/*
const viewBtn = document.querySelector('.view-all');
viewBtn.onclick = () => {

    function initAll() {
        const fragment = document.createDocumentFragment();
    
        for (let i = 6; i < cardsDates.length; i++) {
            const cardDate = cardsDates[i];

            fragment.appendChild(createContentTemplate(cardDate));

          }
    
        appendContent(fragment);
    }
    
    initAll(cardsDates);
    viewBtn.textContent = 'Show less';
}
*/
const viewBtn = document.querySelector('.view-all');
let isShown = false;

function initAll() {
  const fragment = document.createDocumentFragment();
  for (let i = 6; i < cardsDates.length; i++) {
    const cardDate = cardsDates[i];
    fragment.appendChild(createContentTemplate(cardDate));
  }
  appendContent(fragment);
}



viewBtn.onclick = () => {

    if (viewBtn.textContent == 'View All Projects') {
        initAll(cardsDates);
        viewBtn.textContent = 'Show less';
    } else if (viewBtn.textContent == 'Show less') {
        const cards = document.querySelectorAll('.card');
        for (let i = 6; i < cardsDates.length; i++) {
            cards.forEach(card => { card.remove()});
    };
        viewBtn.textContent = 'View All Projects';
        init(cardsDates);
    }
};


/* card hover/active 

const cardContainer = document.querySelector('#projects');


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const cardHeader = card.querySelector('.card__header');
  const cardAppear = card.querySelector('.card__appear');
  const cardContent = card.querySelector('.card__content');

    card.addEventListener('mouseenter', () => {
        cards.forEach(otherCard => {
            const otherCardHeader = otherCard.querySelector('.card__header');
            const otherCardAppear = otherCard.querySelector('.card__appear');
            const otherCardContent = otherCard.querySelector('.card__content');

            if (otherCard !== card) {
                otherCardHeader.classList.remove('invisible');
                otherCardAppear.classList.remove('visible');
                otherCardContent.classList.remove('transform');
            }
        });

        cardHeader.classList.add('invisible');
        cardAppear.classList.add('visible');
        cardContent.classList.add('transform');
    });

  card.addEventListener('mouseleave', () => {
    cardHeader.classList.remove('invisible');
    cardAppear.classList.remove('visible');
    cardContent.classList.remove('transform');
  });
});
*/

const cardContainer = document.querySelector('#projects');

cardContainer.addEventListener('mouseover', event => {
  const card = event.target.closest('.card');
  if (!card) return;
  
  const cardHeader = card.querySelector('.card__header');
  const cardAppear = card.querySelector('.card__appear');
  const cardContent = card.querySelector('.card__content');

  cardContainer.querySelectorAll('.card').forEach(otherCard => {
    if (otherCard !== card) {
      const otherCardHeader = otherCard.querySelector('.card__header');
      const otherCardAppear = otherCard.querySelector('.card__appear');
      const otherCardContent = otherCard.querySelector('.card__content');

      otherCardHeader.classList.remove('invisible');
      otherCardAppear.classList.remove('visible');
      otherCardContent.classList.remove('transform');
    }
  });

  cardHeader.classList.add('invisible');
  cardAppear.classList.add('visible');
  cardContent.classList.add('transform');
});

cardContainer.addEventListener('mouseout', event => {
  const card = event.target.closest('.card');
  if (!card) return;
  
  const cardHeader = card.querySelector('.card__header');
  const cardAppear = card.querySelector('.card__appear');
  const cardContent = card.querySelector('.card__content');

  cardHeader.classList.remove('invisible');
  cardAppear.classList.remove('visible');
  cardContent.classList.remove('transform');
});