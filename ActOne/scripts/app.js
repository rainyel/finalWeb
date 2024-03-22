import{leftDiv} from "./info.js"
import{rightDiv} from "./img.js"


// e get ang container
let container = document.getElementById("container")

let MyObject  ={

    title1: "TITLE",
    title: "Golden Retriever",

    paragraph1: "The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark.",
  
    paragraph2:"The golden retriever is even-tempered, intelligent and affectionate. Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers..",
    img: "./img/dog.png",
    button1: "Contact Us",
    button2: "About Us",
    button3: "Details",
    button4: "More Info"
    

}

const { title1, title, paragraph1, paragraph2, img,  button1, button2,  button3, button4} = MyObject




container.append(leftDiv(title1,title, paragraph1,paragraph2,button1, button2, button3, button4 ))

container.append(rightDiv(img))