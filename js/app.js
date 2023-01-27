

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

const runFileSystemCommand = (cmd, args=[]) =>{
    try{
        console.log('Okay')
      const commandResult = window.FileSystem[cmd](...args)
      return commandResult
    }catch(e){
      console.log(e)
      return { error:e.message }
    }
}

const exec = async (cmd, args=[], pointerId) =>{
    return runFileSystemCommand(cmd, [...args])
}


const makeTerminalWindow = async () =>{
    const domElement = `
    <div id="terminal-window-1" class="terminal-window" style="">
      <div id="container-1" class="container">
              <output id="output-1" class="output">
              </output>
              <div action="#" id="input-line-1" class="input-line">
                  <div id="prompt-1" class="prompt">
                  </div>
                  <div>
                    <input tabindex="0" id="cmdline-1" class="cmdline" autofocus />
                  </div>
              </div>
      </div>
    </div>
    `

    const termContainer = document.querySelector("#main-container")
    termContainer.innerHTML = domElement
    const win = new WinBox({ 
        mount:termContainer,
        x: "center",
        y: "center",
        width:"500",
        onclose:()=>{
            termContainer.innerHTML = ""
        } 
    })
    const terminal = new Terminal("1","1")
    terminal.init()
}


const toggleDarkMode = () =>{
    const body = document.body
    const ghostIcon = document.querySelector("#ghost-icon")
    body.classList.toggle("dark-mode")
    
    if(ghostIcon.src.includes("dark")){
        ghostIcon.src = ghostIcon.src.replace("dark","light")
    }else{
        ghostIcon.src = ghostIcon.src.replace("light","dark")
    }
}

window.toggleDarkMode = toggleDarkMode
window.exec = exec

showSectionsOfScroll()
toggleBurgerMenu()
