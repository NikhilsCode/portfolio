import { skillsData } from "./constant.js";
let data =  skillsData;
const boxes = document.querySelectorAll('.skillpara');
const mainContent = document.getElementById('mainContent');

      boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
          const content = box.getAttribute('data-content');
          mainContent.innerHTML = data[content];

          // Trigger reveal animation
          mainContent.classList.add('active');
        });

        box.addEventListener('mouseout', () => {
          // Hide content smoothly
          mainContent.classList.remove('active');
        });
      });