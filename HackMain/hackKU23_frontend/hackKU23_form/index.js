let ItemArray = [];

window.onload = () => {
    console.log("On Load");
    if(localStorage.getItem("Items") != null){
        ItemArray = localStorage.getItem("Items").split(",");
    console.log(ItemArray.length);
    }
    populateTodo();
};

function populateTodo() { 
    let UlElm = document.getElementById("post");
    UlElm.innerHTML = " ";

    for (let i=0; i< ItemArray.length; i++){
    
        let liElm = document.createElement("li");
        let liTextNode = document.createTextNode(ItemArray[i]);
        liElm.appendChild(liTextNode);
        UlElm.appendChild(liElm);
    }

};

function addItem(){
    let UlElm = document.getElementById("post");

    let liElm = document.createElement("li"); 

    let firstValue = document.getElementById("first_name").value;

    let textNode = document.createTextNode(firstValue);
    liElm.appendChild(textNode);
    UlElm.appendChild(liElm);

    document.getElementById("post").value = null;

    ItemArray.push(firstValue);
    localStorage.setItem("Items", ItemArray);


}
