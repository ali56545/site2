document.querySelectorAll('.circles > div').forEach(circle => {
    circle.addEventListener('mouseover', () => {
        circle.style.transform = 'scale(1.2)';
    });

    circle.addEventListener('mouseout', () => {
        circle.style.transform = 'scale(1)';
    });
});
