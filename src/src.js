import './styles/style.css'
import 'modern-normalize/modern-normalize.css'
import './img/logo.png'
import './img/main-food.png'
import './img/sushi.png'
import './img/noodle.png'
import './img/biryani.png'
const menu2=document.querySelector(".about-btn2")
const about=document.querySelector(".about");
const menu=document.querySelector(".Menu");
const contact=document.querySelector(".Contact");
const buttons=[menu,contact,about,menu2];
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
       
        document.querySelectorAll('section').forEach
        ((section)=>section.classList.remove("active"))
        const target=event.target.getAttribute("data");
        document.getElementById(target).classList.add("active")
    })
})