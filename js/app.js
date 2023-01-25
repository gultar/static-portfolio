const showSectionsOfScroll = () =>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            console.log(entry)
    
            if(entry.isIntersecting){
                entry.target.classList.add("show")
            }else{
                entry.target.classList.remove("show")
            }
        })
    })
    
    const hiddenElements = document.querySelectorAll(".hidden")
    
    hiddenElements.forEach(el => observer.observe(el))
}

const toggleBurgerMenu = ()=>{
    // Nav hamburgerburger selections
    const burger = document.querySelector("#burger-menu");
    const nav = document.querySelector("nav")
    const navLinks = document.querySelector(".nav-links");

    // Select nav links
    const navLink = document.querySelectorAll(".nav-link");

    // Hamburger menu function
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        nav.classList.toggle("open")
    });

    // Close hamburger menu when a link is clicked
    navLink.forEach((link) =>{
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            nav.classList.remove("open")
        })
    });
}

const scrollToSection = (section) =>{

}

const readyScrollBehaviour = () =>{
    $(".nav-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
}

showSectionsOfScroll()
toggleBurgerMenu()
