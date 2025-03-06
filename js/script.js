// document.addEventListener('DOMContentLoaded', function(){
//     const track = document.querySelector('.carousel-track');
//     const slides = Array.from(document.querySelectorAll('.carousel-slide'));
//     const hero = document.querySelector('hero');
//     const nextButton = document.querySelector('.carousel-button.next');
//     const prevButton = document.querySelector('.carousel-button.prev');

//     const navLinks = Array.from(document.querySelectorAll('.nav-link'));
//     const recipes = Array.from(document.querySelectorAll('.recipe'));

//     const slideWidth = slides[0].getBoundingClientRect().width; // Configura o carrossel
//     const drinkClasses = ['whisky', 'caipirinha', 'margarita']; // Define os itens que vamos fazer a track
//     let currentIndex = 0; // Seta a posição do carrossel para o primeiro card

//     function setSlidePosition() {
//         track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
//         hero.className = `hero ${drinkClasses[currentIndex]}`;

//         navLinks.forEach((link, index) => {
//             if(index === currentIndex) {
//                 link.classList.add('active');
//             } else {
//                 link.classList.remove('active');
//             }
//     });

//         updateActiveContent();
//     }

//     function updateActiveContent() {
//         const currentDrink = drinkClasses[currentIndex];

//         recipes.forEach(recipe => {
//             if (recipe.dataset.drink === currentDrink){
//                 recipe.classList.add('active');
//             } else {
//                 recipe.classList.remove('active');
//             }
//         });
//     }

//     function moveToNextSlide() {
//         if (currentIndex === slides.length - 1) {
//             currentIndex = 0;
//         } else {
//             currentIndex++;
//         }
//         setSlidePosition();
//     }

//     function moveToPrevSlide() {
//         if (currentIndex === 0) {
//             currentIndex = slides.length - 1;
//         } else {
//             currentIndex--;
//         }
//         setSlidePosition();
//     }

//     function moveToSlide(index) {
//         currentIndex = index;
//         setSlidePosition();
//     }
    
//     nextButton.addEventListener('click', moveToNextSlide);
//     prevButton.addEventListener('click', moveToPrevSlide);

//     navLinks.forEach((link, index) => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             moveToSlide(index);
//         });
//     });

//     let autoPlayCount = 0;
//     const autoPlayInterval = setInterval(() => {
//         moveToNextSlide();
//         autoPlayCount++;
        
//         if (autoPlayCount >= slides.length - 1) {
//             clearInterval(autoPlayInterval);
//         }
//     }, 5000);

//     setSlidePosition();
// });



document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const hero = document.querySelector('.hero');
    
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    
    const recipes = Array.from(document.querySelectorAll('.recipe'));
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    const drinkClasses = ['whisky', 'caipirinha', 'margarita'];
    
    function setSlidePosition() {
        track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        hero.className = `hero ${drinkClasses[currentIndex]}`;
    
        navLinks.forEach((link, index) => {
            if (index === currentIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        updateActiveContent();
    }
    
    function updateActiveContent() {
        const currentDrink = drinkClasses[currentIndex];
        
        recipes.forEach(recipe => {
            if (recipe.dataset.drink === currentDrink) {
                recipe.classList.add('active');
            } else {
                recipe.classList.remove('active');
            }
        });
    }
    
    function moveToNextSlide() {
        if (currentIndex === slides.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        setSlidePosition();
    }
    
    function moveToPrevSlide() {
        if (currentIndex === 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex--;
        }
        setSlidePosition();
    }
    
    function moveToSlide(index) {
        currentIndex = index;
        setSlidePosition();
    }
    
    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);
    
    // Event listeners para os links de navegação
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            moveToSlide(index);
        });
    });
    
    let autoPlayCount = 0;
    const autoPlayInterval = setInterval(() => {
        moveToNextSlide();
        autoPlayCount++;
        
        if (autoPlayCount >= slides.length - 1) {
            clearInterval(autoPlayInterval);
        }
    }, 5000);
    
    setSlidePosition();
});