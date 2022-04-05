let count = 0 // initializes count
const saveEl = document.getElementById("save-el") // assigns the object from HTMl doc to the variable
const countEl = document.getElementById("counting") // does the same thing from line 2
const increment=()=>{
    count++ // increments count by 1
    countEl.textContent = count // assigns the value of count to the text in HTML document
}
const save = () => {
    let newCount = `${count}-` 
    saveEl.innerText += ` ${newCount}` 
    countEl.textContent = 0
    count = 0 // reinitializes count
}

