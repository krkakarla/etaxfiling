let topLi = document.querySelector("#navbarSupportedContent > ul > li:nth-child(4)");
let dropdownMenu = document.querySelector("#navbarSupportedContent > ul > li:nth-child(4) > ul");
let lis = dropdownMenu.querySelectorAll("li");
lis.forEach(e => {
    if(e.childElementCount == 2){
        e.addEventListener("click",()=>{
            e.querySelector("ul").classList.toggle("show");
        })
        let a = e.querySelector('a');
        a.href = "javascript:display()";
    }
});
function display(){
    setTimeout(() => {
        dropdownMenu.classList.add("show");
        topLi.querySelector("a").classList.add("show");
        topLi.querySelector("a").ariaExpanded = "true";
    }, 100);
}