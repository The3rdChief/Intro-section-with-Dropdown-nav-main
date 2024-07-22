const openNavBtn = document.querySelector("#open-nav-btn");
const closeNavBtn = document.querySelector("#close-nav-btn");

const nav = document.querySelector("header nav");
const cover = document.querySelector("#cover");

cover.style.visibility = "hidden";

openNavBtn.addEventListener("click", ()=> {
    cover.style.visibility = "visible";
    nav.style.right = "0";
    nav.dataset.state = "opened";
    document.body.style.overflowY = "hidden";
});

closeNavBtn.addEventListener("click", ()=> {
    cover.style.visibility = "hidden";
    nav.dataset.state = "closed";
    nav.style.right = "";
    document.body.style.overflowY = "auto";
});

const openAcc = document.querySelectorAll(".open-accordion");
const accordion = document.querySelectorAll(".accordion");


for (let i = 0; i < openAcc.length; i++) {
    openAcc[i].addEventListener("click", () => {
        let clicked = i;
        accordion[clicked].classList.toggle("open");

        const icon = openAcc[i].querySelector("ion-icon");
        if (icon.getAttribute("name") == "chevron-down-outline") {
            icon.setAttribute("name", "chevron-up-outline");
            openAcc[i].style.color = "hsl(0, 0%, 8%)";
        } else {
             icon.setAttribute("name", "chevron-down-outline");
             openAcc[i].style.color = "hsl(0, 0%, 41%)";
        };
        
    });
};

function myFunction(x) {
    const header = document.querySelector("header");
    const icons = header.querySelectorAll("ion-icon");

    icons.forEach(function(ionicon) {
        if (x.matches) { // If media query matches
            ionicon.setAttribute("name", "chevron-down-outline");
        }
    });
    };
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 768px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  }); 