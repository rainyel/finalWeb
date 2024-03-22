const leftDiv = (title1, title, paragraph1,paragraph2,button1,button2,button3,button4 ) =>{
    let div = document.createElement("div")
    div.className = " classLeft"
    div.innerHTML =  ` 
                     <h1> ${title1}</h1> <br>
                     <h1> ${title}</h1> <br>
                     
                     <p> ${paragraph1} </p> <br>
                     <p> ${paragraph2} </p> <br>
                     <button> Contact Us</button> 
                     <button> About Us</button> 
                     <button> Details</button>
                     <button> MOre Info</button> 
                     

                          </div>

                     `


    
    return div

}
export{leftDiv}