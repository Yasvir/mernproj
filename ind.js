document.addEventListener('DOMContentLoaded', function() {
    const sliderIcon = document.getElementById('sliderIcon');
    const menuIcon = document.getElementById('menuIcon');
    const dropdown = document.querySelector('.dropdown');

    sliderIcon.addEventListener('click', function() {
        document.querySelectorAll('.menuit').forEach(item => {
            item.style.display = item.style.display === 'none' ? 'block' : 'none';
        });
    });

    menuIcon.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });
});
