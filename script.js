// Плавная прокрутка при клике на навигационные ссылки
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Учёт высоты хедера
                behavior: 'smooth'
            });
        }
    });
});

// Скрипт для копирования адреса контракта в буфер обмена
document.getElementById('copy-button').addEventListener('click', function() {
    const contractAddress = document.getElementById('contract-address').textContent;

    // Копируем текст в буфер обмена без подтверждения
    navigator.clipboard.writeText(contractAddress).then(function() {
        console.log('Адрес контракта скопирован: ' + contractAddress);
    }).catch(function(err) {
        console.error('Ошибка при копировании текста: ', err);
    });
});
