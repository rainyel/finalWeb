import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('sec1')
let sec2 = document.getElementById('sec2')

let obj1 = {
    title   : "Hi there!",
    par     : "My Name is Raniel Olaco, a second Year college student from Gingoog city Colleges (GCC) taking up Bachelor of Information Technology, I am the Second eldest son in our family, was born and raised in Medina Misamis Oriental. My goal one day is to become successful so that I can support my family financially and I'd be able to travel them around the world",
    button  : "Contact me",
    img     : "./images/anels.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "./images/pic.png",
    desc    : "This is the Obstacle Avoiding Car, one of our recent  project in IICT for our final output.",
    button1 : "learn more",
    title2  : "Project Complete"
}

const { image, desc, button1, title2 } = obj2

let obj3 = {
    image2   : "./images/pic1.png",
    desc2    : "This is also our project in IICT, which we were tasked to make a Miniature buildings of our School, Gingoog City Colleges.",
    button2 : "learn more",
}

const { image2, desc2, button2, } = obj3

let obj4 = {
    image3   : "./images/pic2.png",
    desc3    : "This is our Exhibit in our Subject History which happened last week, and our chosen topic was all about the KKK.",
    button3 : "learn more",
}

const { image3, desc3, button3, } = obj4

sec1.append(infofunc(title, par, button))
sec1.append(imgfun(img))
sec3.append(infofunc2(title2))
sec2.append(cardfunc(image, desc, button1))
sec2.append(cardfunc(image2, desc2, button2))
sec2.append(cardfunc(image3, desc3, button3))
