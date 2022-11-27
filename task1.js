//Create a "check" and "close" button and append it to each list item
var myList = document.getElementsByTagName("LIST");
var i;
for(i=0;i<myList.length;i++){
    var button = document.createElement("BUTTON");
    
    var check = documnet.createTextNode("u00D7");
    button.className = "check";
    button.appendChild(check);
    myList[i].appendChild(button);
    
    var txt = documnet.createTextNode("u00D7");
    button.className = "close";
    button.appendChild(txt);
    myList[i].appendChild(button);    
}


//click on check button strike out the task
var check = document.getElementsByClassName("check");
var j;
for(j = 0; j < check.length; j++){
  check[j].onclick = function Done() {
    var chk = this.parentElement;
    chk.style.textDecoration = "line-through";
    }
}


//click on close button to remove the listitem
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentNode.removeChild(this);
  }
}


// Create a new list item when clicking on the "Add" button
function addTask() {
    var at = document.createElement("at");
    var input = document.getElementById("Input").value;
    var t = document.createTextNode(input);
    at.appendChild(t);
    if (input === '') {
      alert("PLEASE ENTER A TEXT!!!");
    } else {
        document.getElementById("myUL").appendChild(at);
    }
    document.getElementById("Input").value = "";

    
    var button = document.createElement("BUTTON");
     var chk = document.createTextNode("\u2713");
    button.className = "check";
    button.appendChild(chk);
    at.appendChild(button);
    

    
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    at.appendChild(button);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    for (j = 0; j < check.length; j++) {
      check[j].onclick = function Done() {
        var chk = this.parentElement;
        chk.style.textDecoration = "line-through";
        }
    }

  }