function getInputValue() {
  var inputVal = document.getElementById("myInput").value;
  if (inputVal >= 0 && inputVal <= 10) {
    let input = inputVal;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.onload = function () {
      if (this.status === 200) {
        let obj = JSON.parse(this.responseText);

        let list = document.getElementById("list");

        str = "";
        for (key in obj) {
          if (obj[key].userId == input) {
            str += `<div style="    display: flex;
            flex-direction: column;
            align-items: center;
            border: 2px solid black;
            margin: 15px;
            padding: 20px;
            justify-content: center;" >`;
            str += `<p>USER ID = ${obj[key].userId} </p>`;
            str += `<p>ID = ${obj[key].id} </p>`;
            str += `<p>TITLE = ${obj[key].title} </p>`;
            str += `<p>DESCRIPTION = ${obj[key].body} </p>`;
            str += `<br>`;
            str += `</div>`;
          } else {
            // console.log("error occured");
          }
        }
        list.innerHTML = str;
      } else {
        console.log("Some error occured");
      }
    };

    xhr.send();
  } else {
    let errorDiv = document.getElementById("error");
    let str2 = "";
    str2 += `<p><b>Please enter the value in range from 1 to 10</b><p/>`;
    errorDiv.innerHTML = str2;
  }
  // else {
  //   let errorDiv = document.getElementById("error");
  //   let str2 = "";
  //   str2 += `<p><b>Please enter the value in range from 1 to 10</b><p/>`;
  //   errorDiv.innerHTML = str2;

  // }

  document.getElementById("myInput").value = "";
  return false;
}
