/*
JavaScript Email Obfuscation 
https://dev.to/websilvercraft/how-to-protect-email-addresses-from-spam-bots-3cji
*/
document.addEventListener('DOMContentLoaded', function() {
  const emailElements = document.querySelectorAll('.email-protect');
  emailElements.forEach(element => {
    const username = element.getAttribute('data-user');
    const domain = element.getAttribute('data-domain');
    element.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = `mailto:${username}@${domain}`;
    });
    element.innerHTML = `${username}@${domain}`;
  });
});
