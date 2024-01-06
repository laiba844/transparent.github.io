

let para=document. querySelector(".para")
console.log(para)
 let btn1=document.querySelector(".btn1")
 console.log(btn1)
para.style.display= "none"
 btn1.addEventListener("click" , ()=>{
          if(para.style.display == "none")
          {
            para.style.display="block"
            btn1.innerHTML="Hide it!"
          }
          else
          {
            para.style.display="none"
            btn1.innerHTML="Read more"
          }
        })

let para1=document. querySelector(".para1")
 let btn11=document.querySelector(".btn11")
para1.style.display= "none"
 btn11.addEventListener("click" , ()=>{
          if(para1.style.display == "none")
          {
            para1.style.display="block"
            btn11.innerHTML="Hide it!"
          }
          else
          {
            para1.style.display="none"
            btn11.innerHTML="Read more"

          }
        })