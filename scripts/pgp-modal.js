const pgpDialogElement = document.getElementById('pgp');
const pgpDialogShowButton = document.getElementById('show-pgp-button');
const pgpDialogCloseButton = pgpDialogElement.querySelector('button');
const pgpCopyButton = document.getElementById('pgp-copy');

pgpDialogShowButton.addEventListener("click", (event) => {
    event.preventDefault();
    pgpDialogElement.showModal();
});

pgpDialogCloseButton.addEventListener("click", (event) => {
    event.preventDefault();
    pgpDialogElement.close();
});

pgpCopyButton.addEventListener('click', (event) => {
    event.preventDefault();
    const copyText = document.getElementById('pgp-key');
    navigator.clipboard.writeText(copyText.innerText);
});
