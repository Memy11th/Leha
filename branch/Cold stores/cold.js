
//Variables
let hero = document.getElementsByClassName("herolanding")[0];
let main = document.getElementsByTagName("main")[0];
var audio = new Audio("./sound/fantasy.mp3"); // Create the Audio object outside the event handler
let scrollbtn = document.getElementById("Top");



// functions





// callback functions
window.addEventListener("load",()=>{
    intro();
    decreaseOpacity('intro', 5000);
    // window scroll 
    window.onscroll = function(){
        if(window.scrollY >=350){
            audio.play();
        }else {
            audio.pause();
        }
    }
    
});


window.onscroll =  function () {
    if (scrollY >= 270) {
      scrollbtn.style.display = "block";
    }else {
       scrollbtn.style.display = "none";
    }
   };
   scrollbtn.onclick = function () {
   scroll ({
       top :0,
       behavior : "smooth"
       
   });
   
   }



   function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // The target element is now in view
        console.log('Target div is in view!');
        // Perform your desired action here
        // For example, add a class to the div
        entry.target.classList.add('grid-itemAni');
        
      }
    });
  }
  
  // Options for the intersection observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.3 // Trigger when at least 50% of the target is visible
  };
  
  // Create a new IntersectionObserver and pass in the callback function and options
  const observer = new IntersectionObserver(handleIntersection, options);
  
  // Target the div you want to observe
  let target = document.getElementById("animatee");

  
  // Start observing the target element
  observer.observe(target);


  window.onload = function() {

    var textElement = document.getElementById('colorfulText');
    var words = textElement.textContent.split(' ');
    
    textElement.innerHTML = ''; // Clear original text
    
    words.forEach(function(word, index) {
      var span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('color-animation');
      span.style.animationDelay = (index * 0.5) + 's'; // Adjust delay as needed
      textElement.appendChild(span);
    });

  };
