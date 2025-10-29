document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    let isOpen = false;

    function toggleMobileMenu(){
        if (isOpen){
            mobileMenu.style.maxHeight = '0px';
            mobileMenu.style.opacity = '0';
            console.debug('Menu is closed.');
        } else {
            mobileMenu.style.maxHeight = '100vh';
            mobileMenu.style.opacity = '1';
            console.debug('Menu is open.');
        }
        isOpen = !isOpen;
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }

    // Show/hide menu when clicking the hamburger button
    hamburger.addEventListener('click', toggleMobileMenu);

    // Show/hide menu with keyboard 'Enter' and 'Spacebar' keys
    hamburger.addEventListener('keydown', function(keyboardEvent) {
        if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
            keyboardEvent.preventDefault();
            toggleMobileMenu();
        }
    })

    // Hide menu when clicking any menu link
    document.querySelectorAll('#mobile-menu li').forEach(link => {
        link.addEventListener('click', function(){
            toggleMobileMenu();
        })
    })

});