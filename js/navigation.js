const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

// Method to show or hide the mobile menu
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
}

// Show/hide menu when clicking the hamburger button
document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);

// Hide menu when clicking any menu link
document.querySelectorAll('#mobile-menu li').forEach(link => {
    link.addEventListener('click', function(){
        toggleMobileMenu();
    })
})
