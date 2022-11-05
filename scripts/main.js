let image = document.querySelectorAll('img');

image.forEach(function(el) {
  el.onmouseenter = () => {
    if (el.classList.contains("blur") == true) {
      el.classList.add("img-bulge");
    }
  }
  el.onmouseleave = () => {
    if (el.classList.contains("blur") == true) {
      el.classList.remove("img-bulge");
    }
  }
  el.onmousedown = () => {
    if (el.classList.contains("blur") == true) {
      el.classList.add("img-shrink");
    }
  }
  el.onclick = () => {
    if (el.getAttribute('id') == 'couchImg' && el.classList.contains("pointer-no-blur") == true) {
      if (el.style.transform == 'rotate(270deg)') {
        el.style.transform = 'rotate(0deg)';
      } else if (el.style.transform == 'rotate(180deg)') {
        el.style.transform = 'rotate(270deg)';
      } else if (el.style.transform == 'rotate(90deg)') {
        el.style.transform = 'rotate(180deg)';
      } else {
        el.style.transform = 'rotate(90deg)';
      }
    }
    if (el.getAttribute('id') == 'couchImg' && el.classList.contains("blur") == true) {
      el.className = "pointer-no-blur";
    } else if (el.classList.contains("blur") == true) {
      el.className= "no-blur";
    }
  }
});
