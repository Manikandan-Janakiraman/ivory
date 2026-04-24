        // Slider Variables
        let currentSlideIndex = 0;
        const sliderWrapper = document.getElementById('sliderWrapper');
        const slides = document.querySelectorAll('.slide');
        const sliderDots = document.querySelectorAll('.slider-dot');
        const totalSlides = slides.length;
        let autoSlideInterval;

        // Function to show specific slide
        function currentSlide(index) {
            currentSlideIndex = index;
            updateSlider();
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Function to move to next slide
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            updateSlider();
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Function to move to previous slide
        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Update slider position and dots
        function updateSlider() {
            const offset = -currentSlideIndex * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;

            // Update dots
            sliderDots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentSlideIndex) {
                    dot.classList.add('active');
                }
            });
        }

        // Auto slide function
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds
        }

        // Add event listeners for arrow buttons
        document.getElementById('prevBtn').addEventListener('click', prevSlide);
        document.getElementById('nextBtn').addEventListener('click', nextSlide);

        // Add keyboard navigation
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') prevSlide();
            if (event.key === 'ArrowRight') nextSlide();
        });

        // Start auto slide on load
        startAutoSlide();

        // Pause on mouse over, resume on mouse out
        const bannerSlider = document.querySelector('.banner-slider');
        bannerSlider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        bannerSlider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // Hamburger Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Add smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Add active link highlight
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(l => l.style.color = '#333');
                this.style.color = '#ff8c00';
            });
        });
    