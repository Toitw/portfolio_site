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





