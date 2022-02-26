let accordion = document.getElementsByClassName("accordion");
let desc = document.getElementsByClassName("desc");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
      accordion[i].classList.toggle('active')
      if(desc[i].style.height == 0){
        desc[i].style.height = desc[i].scrollHeight + 'px'
      }else {
        desc[i].style.height = null;
      }
  })
}

let thumbnail = document.querySelectorAll(".thumbnail img");
let preview = document.querySelector(".preview img");

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("click", function () {
    preview.src = thumbnail[i].src;
  });
}



