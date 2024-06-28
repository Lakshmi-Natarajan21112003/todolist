function AddTodo(){
    var input=document.getElementById("inputbox");
    var text=input.value.trim();

    if (text!=="") {
        var listitem=document.createElement("listitem");
        listitem.textContent=text;

var deletebutton=document.createElement("button");
deletebutton.textContent="Delete";
deletebutton.classList.add("delete_button");
deletebutton.onclick=function(){
    listitem.remove();
};


listitem.appendChild(deletebutton);
document.getElementById("list").appendChild(listitem);

text.value="";
    }
    else{
        alert("Please enter your todo!!");
    }
}