const boxes = document.querySelectorAll(".box");
img = document.querySelector(".img");


boxes.forEach((box)=>{

    box.addEventListener("dragover",(e)=>{
      e.preventDefault();  
        box.classList.add("hover")
        
});

box.addEventListener("dragleave",()=>{
        
    box.classList.remove("hover")
        
});

box.addEventListener("drop",()=>{
    box.classList.remove("hover")
    box.appendChild(img);
});
});