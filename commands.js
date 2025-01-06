const categories = document.querySelectorAll('.categ');
const overlayContent = document.querySelector('.overlay-content');

function showslide(categoryname){
    const flipbook = document.getElementById('flipbook');
    const overlay = document.getElementById('overlay');
}

// Ensure overlay is hidden initially
overlay.style.display = 'none';
flipbook.innerHTML = '';

categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.getAttribute('data-content');

        let slides = [];
        switch (categoryName) {
            case 'Hot Drinks':
                slides = [
                    { title: 'Espresso', img: 'itemimg/hot drinks/express.png', price: 2.5},
                    { title: 'Double Espresso', img: 'itemimg/hot drinks/double espresso.png', price: 5.0 },
                    { title: 'Americano', img: 'itemimg/hot drinks/american.png', price: 3.0 },
                    { title: 'Macchiato', img: 'itemimg/hot drinks/makiato.png', price: 3.0 },
                    { title: 'Latte', img: 'itemimg/hot drinks/latte.png', price: 3.5 },
                    { title: 'Milk Chocolate', img: 'itemimg/hot drinks/milk choclat.png', price: 3.5 },
                    { title: 'Nescafé', img: 'itemimg/hot drinks/nescaffe.png', price: 3.5 },
                    { title: 'Hot Chocolate', img: 'itemimg/hot drinks/hot choclat.png', price: 4.0 },
                    { title: 'Hot Spéculoos', img: 'itemimg/hot drinks/hot speculose.png', price: 4.0 }
                ];
                break;

            case 'Cold Drinks':
                slides = [
                    { title: 'Iced Espresso', img: 'itemimg/cold drinks/iced expres.png', price: 3.5 },
                    { title: 'Shakerato', img: 'itemimg/cold drinks/shakirato.png', price: 4.5},
                    { title: 'Iced Coffee', img: 'itemimg/cold drinks/iced coffe.png', price: 6 },
                    { title: 'Affogato', img: 'itemimg/cold drinks/afogado.png', price: 5.5 },
                    { title: 'Espresso Tonic', img: 'itemimg/cold drinks/express tonic.png', price: 5.0 },
                    { title: 'Iced Tea', img: 'itemimg/cold drinks/iced tea.png', price: 4.5 },
                    { title: 'Mojitos', img: 'itemimg/cold drinks/mojito.png', price: 7.0},
                    { title: 'Frappuccino', img: 'itemimg/cold drinks/frapucino.png', price: 6.0 },
                    { title: 'Milkshakes', img: 'itemimg/cold drinks/molkshake.png', price: 8.0 }
                ];
                break;

            case 'Healthy Drinks':
                slides = [
                    { title: 'Carrot, Orange, Ginger', img: 'itemimg/healthy style/orange carrot ginger.png', price: 10.0 },
                    { title: 'Beet, Orange, Ginger', img: 'itemimg/healthy style/beet,orange,ginger.png', price: 10.0 },
                    { title: 'Cucumber, Tonic, Black Pepper', img: 'itemimg/healthy style/cucmber.png', price: 10.0 },
                    { title: 'Detox Shot', img: 'itemimg/healthy style/detox.png', price: 3.0 },
                    { title: 'Protein Shake', img: 'itemimg/healthy style/protein shake.png', price: 7.0 },
                    { title: 'Smoothies', img: 'itemimg/healthy style/smoothies.png', price: 13.0 }
                ];
                break;

        case 'Juice':
            slides = [
                { title: 'Lemonade', img: 'itemimg/juice/limounadha.png', price: 4.0 },
                { title: 'Strawberry Juice', img: 'itemimg/juice/jus de fraise.png', price: 4.5 },
                { title: 'Orange Juice', img: 'itemimg/juice/jus de orange.png', price: 3.5 },
            ];
            break;

        case 'Cocktail':
            slides = [
                { title: 'Apple Cinnamon', img: 'itemimg/cocktailes/apple cinemon.png', price: 7.5 },
                { title: 'Pina Colada', img: 'itemimg/cocktailes/pina colada.png', price: 7.5 },
                {title: 'Can i compose?',img:'itemimg/cocktailes/cani.png',price: 7.5 }
            ];
            break;

        case 'Savory Food':
            slides = [
                
                
                { title: 'Savory Crepes', img: 'itemimg/savory food/crepe salleé.png', price: 7.5 },
                { title: 'Croque Monsieur', img: 'itemimg/savory food/croque mr.png', price: 5.5 },
                { title: 'Paninis', img: 'itemimg/savory food/panini.png', price: 5.5 }
            ];
            break;

        case 'Sweet Food':
            slides = [
                { title: 'Sweet Crepes', img: 'itemimg/sweet food/crepe sucree.png', price: 8.5 },
                { title: 'Sweet Waffles', img: 'itemimg/sweet food/waffles.png', price: 7.0 },
            ];
            break;

        default:
            slides = [];
            break;
    }

    function playSound(sound) {
        sound.currentTime = 0; // Reset sound to the start
        sound.play();
    }

    if (slides.length > 0) {
        // Wrap slides in divs for Turn.js to work
        flipbook.innerHTML = slides.map(slide => `
            <div class="slide">
                <h2>${slide.title}</h2>
                <img src="${slide.img}" alt="${slide.title}" style="auto; width:80%; height:50%; margin-bottom:20px; margin-left:12%">
                <h6>${slide.price.toFixed(2)} Dt</h6>
            </div>
        `).join('');

        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        

        // Initialize Turn.js
        $(document).ready(function () {
            var $flipbook = $('#flipbook');
        
            // Initialize the flipbook with one page at a time
            function initializeFlipbook() {
                var flipSound = new Audio('audio/daddy.mp3');
                $flipbook.turn({
                    width: '100%',  // Set the width to 100% of the container
                    height: '100%', // Set the height to 100% of the container
                    display: 'single', // Use single page mode (one page at a time)
                    autoCenter: true,
                    acceleration: true, // Enable acceleration for faster swipe reactions
                    drag: 2, // Increase drag sensitivity, reducing swipe distance for page turn
                    swipeThreshold: 5, // Minimum swipe threshold (default is around 30-40px, try reducing)
                    speed: 800, // Adjust the speed of the turning transition if needed
                    when: {
                        turned: function (event, page, view) {
                            console.log('Currently showing page:', page);
                            flipSound.currentTime=0;
                        
                        }
                    },
                    
                });
        
                // Allow swipe-up behavior to navigate pages
                $('#flipbook').on('swipeup', function () {
                    var currentPage = $flipbook.turn('page');
                    var totalPages = $flipbook.turn('pages');
        
                    // Check if we're not on the last page
                    if (currentPage < totalPages) {
                        $flipbook.turn('next');
                        
                    }
                });
        
                // Allow swipe-down behavior to navigate pages backward
                var hammer = new Hammer(flipbook);

                // Detect left and right swipe gestures
                hammer.on('swipeleft', function () {
                    $flipbook.turn('next'); // Turn to the next page
                });
                hammer.on('swiperight', function () {
                    $flipbook.turn('previous'); // Turn to the previous page
                });
            }
        
            // Show the overlay when a category is clicked
            $('.categ').on('click', function () {
                $('#overlay').fadeIn(); // Show overlay with fade-in effect
                
                
            });
        
            // Close the overlay when the close button is clicked
            $('#closeOverlay').on('click', function () {
                $('#overlay').fadeOut(); // Hide overlay with fade-out effect
                location.reload();
            });
        
            // Initialize the flipbook
            initializeFlipbook();
        });
        
        
        

        // Show the overlay with the flipbook
        overlay.style.display = 'flex';

        // Close overlay functionality
        document.querySelector('.close-overlay').addEventListener('click', () => {
            overlay.style.display = '';
        });
        
        
    }
});
});
