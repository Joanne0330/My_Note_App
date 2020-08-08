"use strict";


class Note {
  constructor() {
    this.message = "";
  }

  create(text) {
    this.message = text
  }
  // set(text) {
  //   this.text = text.id
  //   this.text = document.getElementById("user_input").value;
  //   document.getElementById("myText").innerHTML = this.texttext;
  //   this._text = text;
  // };

  // print_list() {
  //   var text1 = document.getElementById("app").value;
  //   document.getElementById("list").innerHTML = text1;

  // }
};

class Notebook {
  constructor() {
    this.listArray = [];
  }

  add(text) {
    this.listArray.push(text);
  }

}