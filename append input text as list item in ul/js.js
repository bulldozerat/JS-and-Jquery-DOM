function addItem() {

    let inputText = document.getElementById('newInputText').value;
    let ul = document.getElementById('items');

    let li = document.createElement("li");
    let textnode = document.createTextNode(inputText);
    li.appendChild(textnode);
    ul.appendChild(li);

    document.getElementById('newInputText').value = "";
}