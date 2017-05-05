function addItem() {

    let inputText = document.getElementById('newInputText').value;
    let ul = document.getElementById('items');

    let li = document.createElement("li");
    let textnode = document.createTextNode(inputText);
    li.appendChild(textnode);
    ul.appendChild(li);

    let anchor = document.createElement("a");
    let textnode2 = document.createTextNode("delete");
    anchor.appendChild(textnode2);
    anchor.style.color = "red";
    anchor.addEventListener('click',active);
    ul.appendChild(anchor);

    document.getElementById('newInputText').value = "";

    function active() {
        this.style.display = "none";
        li.style.display = "none";
    }
}


