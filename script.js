const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    // ሜኑ ንምኽፋትን ንምዕጻውን
    navLinks.classList.toggle('active');
    
    // ምልክት (Icon) ካብ Bars ናብ X ንምቕያር
    const icon = menuIcon.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// ዝኾነ ሊንክ ምስ ተጠወቐ ሜኑ ባዕሉ ንክዕጾ
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});
