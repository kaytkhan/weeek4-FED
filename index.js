
let form = document.getElementById("form");
form.addEventListener("submit", function(evnt) {
    let tbody = document.getElementById("tbody");
    let no = document.getElementById("inputEmail3");
    let first = document.getElementById("inputPassword3");
    let last = document.getElementById("inputPassword31");
    let handler = document.getElementById("inputPassword2");

    evnt.preventDefault();
    let data = `                
    <tr>
    <th scope="row">${no.value}</th>
    <td>${first.value}</td>
    <td>${last.value}</td>
    <td>${handler.value}</td>
    </tr>
    `
    console.log(data);
    tbody.innerHTML += data;
})