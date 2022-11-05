const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  let btnDiv = document.getElementById("btnDiv");

  if (this.status === 200) {
    let obj = JSON.parse(this.responseText);

    var uniqueCount = [];

    for (key in obj) {
      //   console.log(`${obj[key].userId}`);
      uniqueCount.push(`${obj[key].userId}`);
    }

    var count = {};
    uniqueCount.forEach(function (i) {
      count[i] = (count[i] || 0) + 1;
    });

    let string = "";

    for (const [key, value] of Object.entries(count)) {
      string += `
        <button class="btn1" id="${key}">${key}</button>
            `;
    }
    btnDiv.innerHTML = string;

    let list = document.getElementById("list");
    str = "";
    for (key in obj) {
      str += `<div style="display: flex;flex-direction: column;align-items: center;border: 2px solid black;margin: 15px; >`;
      str += `<p>USER ID = ${obj[key].userId} </p>`;

      str += `<p>ID = ${obj[key].id} </p>`;
      str += `<p>TITLE = ${obj[key].title} </p>`;
      str += `<p>DESCRIPTION = ${obj[key].body} </p>`;
      str += `<br>`;
      str += `</div>`;
    }
    list.innerHTML = str;
  } else {
    console.log("Some error occured");
  }
};

var newBtn = document.getElementsByClassName("btn1");
for (let key in newBtn) {
  console.log(newBtn);
}
// console.log(newBtn);
xhr.send();
