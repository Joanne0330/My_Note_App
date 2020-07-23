"use strict";


class NoteModel {
  constructor() {
    this.text = "";
  }

  getText() {
    return this._text;
  }

  set(text) {
    this.text = text.id
    this.text = document.getElementById("user_input").value;
    document.getElementById("myText").innerHTML = this.texttext;
    // this._text = text;
  };

  // print_list() {
  //   var text1 = document.getElementById("app").value;
  //   document.getElementById("list").innerHTML = text1;

  // }

}
note = new NoteModel();