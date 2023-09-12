function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var projects = document.querySelectorAll('.project');

function showProjects() {
    for (var i = 0; i < projects.length; i++) {
        if (isElementInViewport(projects[i])) {
            projects[i].classList.add('show');
        }
    }
}

window.addEventListener('scroll', showProjects);

//Dropdown menu
// var dropdown = document.querySelector('.dropdown-menu');
// function toggleDropdown() {
//     if (dropdown.style.display == 'none') {
//         dropdown.style.display = 'block';
//     } else {
//         dropdown.style.display = 'none';
//     }
// }

var dropdown = document.querySelector('.dropdown-menu');

function toggleDropdown() {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }
}

const moreButton = document.querySelector('.more-button');
const hiddenProjects = document.querySelectorAll('.project.hidden');

moreButton.addEventListener('click', () => {
  event.preventDefault();
  hiddenProjects.forEach(project => {
    project.classList.remove('hidden');
  });
  moreButton.style.display = 'none';
});

//Typewriter animation
const typewriter = document.querySelector('#typewriter');
const text = typewriter.textContent;
const words = text.split(' ');
let index = 0;

typewriter.textContent = '';

function type() {
  if (index < words.length) {
    const word = words[index];
    const span = document.createElement('span');
    span.textContent = word;
    if (word === 'full' || word === 'stack') {
      span.classList.add('highlight');
    }
    typewriter.appendChild(span);
    typewriter.appendChild(document.createTextNode(' '));
    index++;
    setTimeout(type, 200);
  } else {
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    typewriter.appendChild(cursor);
  }
}

type();



