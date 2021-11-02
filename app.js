/** add an event for keydown */
let inputNode = document.querySelector("input[name='itemName']");

inputNode.addEventListener("keydown", function (evt) {
  // need to check if the return key was depressed
  if (evt.code === "Enter") {
    // create a <span>value from input field</span>
    let itemName = document.createElement("span");
    let boxName = document.createElement("input");
    boxName.type = "checkBox";
    itemName.innerHTML = inputNode.value;

    // nest the <span> in <li>...</li>
    let newListItem = document.createElement("li");
    newListItem.appendChild(boxName);
    newListItem.appendChild(itemName);

    // append the <li> to the end of the list
    let ul = document.querySelector("#list");
    ul.appendChild(newListItem);

    // clear out the input field
    this.value = "";
  }
});

let check = document.querySelectorAll("li");
console.log(check);
check.addEventListener("click") 
  if (swap.code === "click") {
    
  }
  alert("pee")
  for (let a = 0; a < check.length; a++) {
    
    if (check[a].checked) {
      check[a].classlist.add("itemChecked");

    }

  }
 
  

