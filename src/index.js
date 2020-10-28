

document.addEventListener("DOMContentLoaded", () => {
    function newItem () {
        event.preventDefault();
        let li = document.createElement("li");
        let inputValue = document.getElementById("new-task-description").nodeValue;
        let txtNode = document.createTextNode(inputValue);
        li.appendChild(txtNode);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("tasks").appendChild(li);
        }
        document.getElementById("new-task-description").value = "";
    
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
});


//create close button and append it t each list item
/* let myNodeList = document.getElementsByTagName("li");
console.log(myNodeList);

let i;

for (i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
} */


//close button
/* let closeButton = document.getElementsByClassName("close");
console.log(closeButton);

for (i = 0; i < close.length; i++) {
    closeButton[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
} */

// Create a new list item when clicking on the "Add" button

