// function getInputValue() {
//   var inputVal = document.getElementById("myInput").value;
//   // console.log(inputVal);
// }
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (this.status === 200) {
    let obj = JSON.parse(this.responseText);
    // console.log(obj);
    let list = document.getElementById("list");

    //   console.log(list);
    str = "";
    for (key in obj) {
      // if (obj[key].userId === 3) {
      str += `<div style="display: flex;flex-direction: column;align-items: center;border: 2px solid black;margin: 15px;    padding: 15px; >`;
      str += `<p>USER ID = ${obj[key].userId} </p>`;
      str += `<p>ID = ${obj[key].id} </p>`;
      str += `<p>TITLE = ${obj[key].title} </p>`;
      str += `<p>DESCRIPTION = ${obj[key].body} </p>`;
      str += `<br>`;
      str += `</div>`;
      // }
    }
    list.innerHTML = str;
    //   console.log(str);
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
// let input = 10;
