const rightDiv = (img) => {
    let div = document.createElement("div")
    div.className = "classRight"
    div.innerHTML =  `
    <img src="${img}" alt="picture nako">
`

    return div




}

export{rightDiv}