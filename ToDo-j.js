const time_list_obj=document.getElementById("task_list");

function add_task_function(){
    const time_limit=document.forms["todo"].elements["time_limit"].value;
    const content=document.forms["todo"].elements["task"].value;

    if(time_limit !="" && content !=""){
        const list_element = document.createElement("li");


        const time_element=document.createElement("label");
        time_element.innerText="期限　"+time_limit+"　　";
        list_element.appendChild(time_element);

        const content_element=document.createElement("p");
        content_element.innerText="ToDo : "+content;
        list_element.appendChild(content_element);

    
        const delete_element=document.createElement("button");
        delete_element.innerText="完了";
        delete_element.addEventListener("click", delete_task_function);
        time_element.appendChild(delete_element);

        const kugiri_element=document.createElement("hr");
        list_element.appendChild(kugiri_element);

        time_list_obj.appendChild(list_element);
        

        document.forms["todo"].elements["time_limit"].value="";
        document.forms["todo"].elements["task"].value="";
    }else{
        alert("記入漏れがあります！");
    }
}

function delete_task_function(){
    const delete_task = this.closest('li');  
    time_list_obj.removeChild(delete_task);
}

