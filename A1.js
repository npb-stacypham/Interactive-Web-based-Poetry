/*letter*/
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.getElementById("section5-3"); // the clickable element
    const targetElement = document.getElementById("section5-2");  // the element that moves

    triggerElement.addEventListener("click", function () {
        if (targetElement.classList.contains("moved-up")) {
            targetElement.classList.remove("moved-up");
            targetElement.classList.add("moved-down");
        } else if (targetElement.classList.contains("moved-down")) {
            targetElement.classList.remove("moved-down");
            targetElement.classList.add("moved-up");
        } else {
            targetElement.classList.add("moved-up");
        }
    });
});
/*xe ngựa*/
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    // Move 'ngua' to the left
    const ngua = document.getElementById("ngua");
    ngua.style.transform = `translateX(-${scrollY * 0.5}px)`;

    // Move 'xe' to the left and rotate
    const xe = document.getElementById("xe");
    xe.style.transform = `
        translateX(-${scrollY * 0.5}px)
        rotate(${scrollY * 0.5}deg)`;
});
/*music play button*/
    document.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById("my-audio");
        const playBtn = document.getElementById("play-btn");

        playBtn.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = "||";
            } else {
                audio.pause();
                playBtn.textContent = "Music";
            }
        });
    });
    //hover
document.addEventListener("DOMContentLoaded", function () {
  const hoverSound = document.getElementById("hover-sound");

  // Unlock audio after first user click (browser policy)
  window.addEventListener("click", () => {
    hoverSound.play().then(() => {
      hoverSound.pause();
      hoverSound.currentTime = 0;
    });
  }, { once: true });

  // Add hover sound to elements with .section4-3
  document.querySelectorAll('.section4-3').forEach(el => {
    el.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(err => {
        console.warn("Hover audio blocked or failed:", err);
      });
    });
  });
});



