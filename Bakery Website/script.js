window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 10) {
        nav.classList.add("nav-glass");
    } else {
        nav.classList.remove("nav-glass");
    }
});


// Filter Products Function
    function filterProducts(category) {
        const sections = document.querySelectorAll('.category-section');
        const buttons = document.querySelectorAll('.filter-btn');
        
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        event.target.classList.add('active');
        
        if (category === 'all') {
            sections.forEach(section => section.style.display = 'block');
        } else {
            sections.forEach(section => {
                if (section.dataset.category === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
        
        // Smooth scroll to top
        window.scrollTo({ top: 400, behavior: 'smooth' });
    }