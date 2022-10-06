const toggleBtn=document.querySelector(".toggle");
let value=0;
toggleBtn.addEventListener("click",()=>{
    const sideNavbar=document.querySelector(".sidenavbar");
    console.log("clicked");
    if (value===0){
        sideNavbar.classList.remove("menu-close")
        sideNavbar.classList.add("menu-open");
        value=1;
    }
    else {
        sideNavbar.classList.remove("menu-open");
        sideNavbar.classList.add("menu-close");
        value=0;
    }
})
