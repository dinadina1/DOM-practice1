let div = document.createElement("div");
div.innerHTML = "It will change red color when hover the content.";
div.addEventListener("mouseover",foo);

let prompt_button =document.createElement("button");
prompt_button.setAttribute("type","button")
prompt_button.innerHTML="Click Here";
prompt_button.addEventListener("click",promp)

function foo(){
    div.style="color:red";
}
function promp(){
    let input = prompt("Enter your Name:");
    let div_prompt = document.createElement("div");
    div_prompt.innerHTML=`Your prompt input : ${input}`;
    document.body.appendChild(div_prompt);

}

document.body.append(div,prompt_button);