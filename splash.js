document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    const blackBox = document.querySelector('.black-box');
    
    startButton.addEventListener('click', (e) => {
        e.preventDefault();
        startButton.style.transform = 'translateY(2px)';
        startButton.style.boxShadow = '0 2px 10px rgba(220, 53, 69, 0.2)';
        blackBox.style.transform = 'scale(0.95)';
        setTimeout(() => {
            window.location.href = 'home';
        }, 150);
    });

    startButton.addEventListener('mousedown', (e) => {
        if(e.button === 0) {
            startButton.style.transform = 'translateY(2px)';
            startButton.style.boxShadow = '0 2px 10px rgba(220, 53, 69, 0.2)';
        }
    });

    startButton.addEventListener('mouseup', () => {
        startButton.style.transform = '';
        startButton.style.boxShadow = '';
    });

    startButton.addEventListener('mouseleave', () => {
        startButton.style.transform = '';
        startButton.style.boxShadow = '';
    });

    blackBox.addEventListener('mouseup', () => {
        blackBox.style.transform = '';
    });
});
