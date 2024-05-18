const inputs = document.getElementById("inputs");
const tasks = document.getElementById("tasks");
const rate = document.getElementById("rate");

function add(){

   if(inputs.value === '' && rate.value === ''){
    alert("enter expenses");
   }else{
    let li1=document.createElement("li");
    li1.innerHTML = inputs.value;
    tasks.appendChild(li1);

    let li2=document.createElement("li");
    li2.innerHTML = rate.value;
    tasks.appendChild(li2);

    let span = document.createElement("span");
    span.innerHTML="delete";
    li1.appendChild(span)
    li2.appendChild(span);  
    }
    inputs.value='';
    rate.value='';
}
add();









