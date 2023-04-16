let todoItemArray = [];

window.onload = () => {
    console.log("On Load");
    if(localStorage.getItem("postItems") != null){
        todoItemArray = localStorage.getItem("postItems").split(",");
    console.log(todoItemArray.length);
    }
    populateTodo();
};

function populateTodo() { //after page reload, accessing items from localstorage
    let postUlElm = document.getElementById("postUl");
    postUlElm.innerHTML = " ";

    for (let i=0; i< todoItemArray.length; i++){
    
        let liElm = document.createElement("li");
        let liTextNode = document.createTextNode(todoItemArray[i]);
        liElm.appendChild(liTextNode);
        postUlElm.appendChild(liElm);

        let deleteBtn = document.createElement("span");

        let deleteText = document.createTextNode("X");

        deleteBtn.className = "deleteBtn";
        deleteBtn.appendChild(deleteText);
        liElm.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", deleteTodo);

        liElm.addEventListener("click", function(){
            liElm.classList.toggle("checked");
        })
    }

};

function addItem(){ //before page reload, adding items to todo
    let postUlElm = document.getElementById("postUl");

    let liElm = document.createElement("li");  //<li></li>

    let todoValue = document.getElementById("postInput").value; //user todo input //todoValue is string here in this case

    let textNode = document.createTextNode(todoValue);
    liElm.appendChild(textNode);
    postUlElm.appendChild(liElm);

    let deleteBtn = document.createElement("span");

    let deleteText = document.createTextNode("X");

    deleteBtn.className = "deleteBtn";
    deleteBtn.appendChild(deleteText);
    liElm.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteTodo);

    liElm.addEventListener("click", function(){
        liElm.classList.toggle("checked");
    })

   // console.log(liElm);

    document.getElementById("postInput").value = null;

    todoItemArray.push(todoValue);
    localStorage.setItem("postItems", todoItemArray);


}

function deleteTodo(e){

    const itemToDelete = e.srcElement.parentElement.innerText.split("\n");
    
    todoItemArray = todoItemArray.filter((item) => {
        return item != itemToDelete[0];
    })
    console.log(todoItemArray)

    if (todoItemArray.length === 0){
        localStorage.removeItem("postItems")
    }else{
        localStorage.setItem("postItems", todoItemArray)
    }
    populateTodo()
}
