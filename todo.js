let input =document.querySelector("input");
let td = document.querySelector("td");
let tbody = document.querySelector("table tbody");
let list =[];

function render(){
    tbody.innerHTML=""
    list.forEach((el, index) =>{
        tbody.innerHTML+=`
        <tr>
            <td>${el.taskVal}</td>
            <td><button class="btn btn-danger" onclick="deleteRow(${index})">del</button></td>
        </tr>
        `

    })
}

function fillTheList(){
    let val =input.value;
    list.push({taskVal: val});
    render();
    
}

function deleteRow(a){
    list.splice(a,1)
    render();
}