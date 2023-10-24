document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
const body = document.getElementById("body");
        let hue = 0;
        function animateBackground() {
            hue = (hue + 1) % 360; 
            body.style.background = `linear-gradient(${hue}deg, rgb(2, 188, 250), blue`;
            requestAnimationFrame(animateBackground); 
        }
animateBackground();