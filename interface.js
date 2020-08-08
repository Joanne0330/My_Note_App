'use strict'
var notebook = new Notebook();

function whenClicked() {
  var note = new Note();
  
  var text = document.getElementById("user_input").value;
//   note.create(text)
//   notebook.add(note)
  //call the next function to list the notes
//   addToPage(notebook)
  //clear the input in the text area
  var display = document.getElementById('display').innerText = text;
  var p = document.createElement("p")
  display.appendChild(p);
}
document.getElementById('addBtn').addEventListener('click', whenClicked);


// function addToPage(notebook) {
//     var display = document.getElementById('display');
//     var p = document.createElement("p")
//     display.appendChild(p);
//   }  
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;