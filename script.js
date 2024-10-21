document.getElementById("write").addEventListener("click", function(event){
    event.preventDefault();
let num= document.getElementById("num").value;
let sent= document.getElementById("sentence").value;



/* list.appendChild(li); */

for(let i = 1; i <= num; i++){
    let list= document.createElement("p");
    list.textContent= i+". " + sent;
    
    document.getElementById("end").appendChild(list);
}


});