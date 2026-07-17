const mobileMenu = document.getElementById('modalId');
const openMenuBtn = document.getElementById('btnId');
const closeMenuBtn = document.getElementById('closeId');
const orderBtn = document.getElementById('btnOrderId');
const orderModal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalId');

if (openMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');
    });
}

if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
    });
}

if (orderBtn && orderModal) {
    orderBtn.addEventListener('click', () => {
        orderModal.classList.toggle('is-open');
    });
}

if (closeModalBtn && orderModal) {
    closeModalBtn.addEventListener('click', () => {
        orderModal.classList.remove('is-open');
    });
}
