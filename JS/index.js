
const codeLines = [
    { id: "code-line-1", text: "const dev = {" },
    { id: "code-line-2", text: "name: 'Fernando Bira'," },
    { id: "code-line-3", text: "role: 'Frontend'," },
    { id: "code-line-4", text: "status: 'coding'" },
    { id: "code-line-5", text: "};" }
];

let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 60;

  function typeCode() {
    if (lineIndex < codeLines.length) {
    const currentLine = codeLines[lineIndex];
    const element = document.getElementById(currentLine.id);
                
      if (charIndex < currentLine.text.length) {
        element.classList.add('cursor');
        element.textContent += currentLine.text.charAt(charIndex);
        charIndex++;
           setTimeout(typeCode, typingSpeed);
        } else {
           element.classList.remove('cursor');
            lineIndex++;
            charIndex = 0;
            setTimeout(typeCode, 300);
        }
    }
  }

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeCode, 500);
});

const menuBtn = document.getElementById('menu-btn');
const navContainer = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    navContainer.classList.toggle('hidden');
    navContainer.classList.toggle('flex');
    navContainer.classList.toggle('flex-col');
    navContainer.classList.toggle('absolute');
    navContainer.classList.toggle('top-20');
    navContainer.classList.toggle('left-0');
    navContainer.classList.toggle('w-full');
    navContainer.classList.toggle('bg-slate-950');
    navContainer.classList.toggle('p-6');
    navContainer.classList.toggle('space-y-4');
});
