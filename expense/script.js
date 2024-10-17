const input= document.querySelector('#input')
console.log(input.value);
const input1= document.querySelector('#input1')
const parent = document.querySelector(".parent_container")
const add_btn= document.querySelector('button')
const select = document.querySelector("select")
const child3= document.querySelector('.child3')
const display = document.querySelector('.display')
console.log(add_btn)
let sum =0;

let div8 = document.createElement('div');
function suming() {
    sum = sum - parseInt(input1.value)
    div8.innerText= `your total is : ${sum} rs`
 }
 function removing() {
    sum = sum + parseInt(input1.value)
    div8.innerText= `your total is : ${sum} rs`
 }
add_btn.addEventListener("click",() =>{
 let body = document.querySelector('body')
 //select statement

 if(input1.value ==""){
      window.alert("please enter some ammount")
 }
 else{

    if(select.value==="expense"){
        let gross = input1.value;
let div =  document.createElement('div') 
let div1= document.createElement('div')
let div2= document.createElement('div')
let div4= document.createElement('div')
//msadm




//div 1
div1.innerText=input.value;
div1.style.paddingLeft="10px"
div1.style.fontSize="30px"
//div1.style.fontFamily="algerian"
div.appendChild(div1)
//btn  
let btn = document.createElement('button')
btn.innerHTML="remove"
btn.style.backgroundColor="blue"
btn.style.color="#fff"
//remove btn;
btn.addEventListener("click",()=>{
  
    body.removeChild(div)
    sum = sum+parseInt(gross)
    div8.innerText= `your total is : ${sum} rs`


})
suming();
//div2
div2.style.fontSize="30px"
div2.style.color="red"
//div2.style.fontFamily="algerian"
div2.innerText="- "+input1.value;
div2.style.paddingRight="10px"
div2.appendChild(btn)
div2.style.display="flex";
div2.style.justifyContent="space-between";
div2.style.alignItems="center";
div2.style.width="200px"
div.appendChild(div2)
div.style.display="flex";
div.style.justifyContent="space-between";
div.style.alignItems="center";

//parent div
div.style.height="50px"
div.style.width="80%";
div.style.marginLeft="8%"
div.style.marginTop="5px";
div.style.backgroundColor="yellow"

div.style.borderRadius="1px"
div.style.borderStyle="solid"
div.style.borderColor="black"

body.appendChild(div)
input.value="";
 input1.value=""

 const media = () =>{
    let q = matchMedia("(max-width:500px)");
    if(q.matches){
        div1.style.fontSize="14px"
        div1.style.textTransform="capitalize"
        div.style.height="60px"
        div.style.width="96%";
        div.style.marginLeft="2%"
        div.style.marginTop="20px";
        div2.style.width="150px"
        //div1.style.width="200px"
        div1.style.textWrap="balance"
        div2.style.fontSize="14px"
        div.style.display="flex";
        div.style.justifyContent="space-between";
        div.style.alignItems="center";
        
    }
    else{
        document.body.style.backgroundColor="blue";
    }
}
onload=media;
onresize=media;
//div4



 }
//income 
 //else statement
 else{
    let gross = input1.value;
    let div =  document.createElement('div') 
    let div1= document.createElement('div')
    let div2= document.createElement('div')
    
    //div 1
    div1.innerText=input.value;
    div1.style.paddingLeft="10px"
    div1.style.fontSize="30px"
    div1.style.fontFamily="algerian"
    div.appendChild(div1)
    //btn
    let btn = document.createElement('button')
    btn.innerHTML="remove"
    btn.style.backgroundColor="blue"
    btn.style.color="#fff"
    //div2
    div2.style.fontSize="30px"
    div2.style.color="rgb(11, 231, 11)"
    div2.style.fontFamily="algerian"
    div2.innerText="+ "+input1.value;
    div2.style.paddingRight="10px"
    div2.appendChild(btn)
    div2.style.display="flex";
    div2.style.justifyContent="space-between";
    div2.style.alignItems="center";
    div2.style.width="200px"
    div.appendChild(div2)
    div.style.display="flex";
    div.style.justifyContent="space-between";
    div.style.alignItems="center";
    
    //parent div
    div.style.height="50px"
    div.style.width="80%";
    div.style.marginLeft="8%"
    div.style.marginTop="5px";
    div.style.backgroundColor="yellow"
    
    div.style.borderRadius="1px"
    div.style.borderStyle="solid"
    div.style.borderColor="black"
  
    btn.addEventListener("click",()=>{
  
        body.removeChild(div)
        sum = sum-parseInt(gross)
        div8.innerText= `your total is : ${sum} rs`
    
    
    })
      //div8
    sum = sum + parseInt(input1.value)
div8.innerText= `your total is : ${sum} rs`



    body.appendChild(div)
    input.value="";
    
input1.value="";

    
}
} 
 if(sum>=0){
    div8.style.padding="0.9%"
    div8.style.color="#00D427"
}
else{
     div8.style.padding="0.9%"
      div8.style.color="red"
}
})



const media = () =>{
    let q = matchMedia("(max-width:450px)");
    if(q.matches){
        document.body.style.backgroundColor="green";
        
    }
    else{
        document.body.style.backgroundColor="blue";
    }
}
onload=media;
onresize=media;

//display.innerText = div8.innerText;
child3.appendChild(div8)
// select
