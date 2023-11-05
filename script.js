document.addEventListener("DOMContentLoaded", function () {
  // Vent til DOM (dokumentobjektmodellen) er klar før koden kjører

  const filterList = document.querySelectorAll('.filter__list__p');
  const overlay = document.querySelector('.overlay');
  let isOverlayVisible = false; // En variabel for å spore om overlayet er synlig
  let overlayHeight = 0; // En variabel for å spore høyden på overlayet under animasjonen
  const animationDuration = 300; // Varighet for animasjonen i millisekunder (her satt til 0,3 sekund)

  filterList.forEach((item) => {
    item.addEventListener('mouseover', () => {
      // Legg til en hendelselytter for musepekerens inngang over "filter__list"
      if (!isOverlayVisible) {
          overlay.style.display = 'block'; // Vis overlayet
          overlay.style.height = '0'; // Sett høyden til 0 (startpunkt for animasjonen)
          isOverlayVisible = true; // Sett isOverlayVisible til sann siden overlayet er synlig
          animateOverlay(); // Start animasjonen
      }});

      item.addEventListener('mouseout', () => {
      // Legg til en hendelselytter for musepekerens utgang fra "filter__list"
      if (isOverlayVisible) {
          overlay.style.display = 'none'; // Skjul overlayet
          overlay.style.height = '0'; // Sett høyden til 0
          isOverlayVisible = false; // Sett isOverlayVisible til usann siden overlayet er skjult
      }});
    });



  function animateOverlay() {
      // Funksjon for å animere overlayet

      const startTime = performance.now(); // Registrer starttidspunktet for animasjonen

      function step(currentTime) {
          // En funksjon som kjører i hvert trinn av animasjonen
          const elapsedTime = currentTime - startTime; // Beregn hvor mye tid som har gått siden start

          overlayHeight = (elapsedTime / animationDuration) * 200; // Beregn høyden basert på tiden som har gått

          if (overlayHeight < 100) {
              overlay.style.height = overlayHeight; // Oppdater overlayets høyde
              requestAnimationFrame(step); // Planlegg neste trinn av animasjonen
          } else {
              overlay.style.height = '20vh'; // Når høyden når 20vh (full visningshøyde), avslutt animasjonen
          }
      }

      requestAnimationFrame(step); // Start animasjonen ved å be om det første trinnet
  }
});

