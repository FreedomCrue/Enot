document.addEventListener("DOMContentLoaded", function () {
    let enots = [];
    let gridContainer = document.getElementById("gridContainer");
    let youLose = document.getElementById("youLose");
    let youWin = document.getElementById("youWin");
  
    function getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function checkEnot(i) {
      console.log(enots);
    }
  
    for (let i = 0; i < 9; i++) {
      enots.push(0);
    }
  
    enots[Math.round(Math.random() * 8)] = 1;
  
    for (let i = 0; i < 9; i++) {
      let div = document.createElement("div");
      div.setAttribute("data-id", i);
      div.innerText = i;
      div.style.background = getRandomColor();
  
      div.addEventListener("click", function () {
        if (enots[parseInt(div.getAttribute('data-id'))] == 0) {
          div.className = 'de';
          let dobr_enots = document.querySelectorAll('.de');
          if (dobr_enots.length == 8) {
            youWin.style.display = 'block';
          }
        } else {
          div.className = 'she';
          let dobr_enots = document.querySelectorAll('.de');
          for (let bz = 0, max = dobr_enots.length; bz < max; bz++) {
            dobr_enots[bz].className = 'not_de';
          }
          youLose.style.display = 'block';
        }
      });
  
      gridContainer.appendChild(div);
    }
  });
  