//alert("Hello World JS");

// console.log("Hello World");

// var table="Normal Table";
// let chair="One chair";
// console.log(table);
// console.log(chair);

// let testBoolean=true;
// console.log(testBoolean);

// let testString='text';
// console.log(testString);

// let testNumber=20;
// console.log(testNumber);

// let testBooleanObject=new Boolean(true);
// console.log(testBooleanObject);

// let testNumberObject=new Number(10);
// console.log(testNumberObject);

// let testStringObject=new String('text');
// console.log(testStringObject);

// let name="John";
// let surname="Doe";
// let question="How are you "+name+" "+surname+"?";
// console.log(question);

// let age=23;
// let question2=`How old is ${name} ${surname}?`;
// let answer="He is "+age+" years old";
// console.log(question2);
// console.log(answer);

// let a=2;
// let b=5;
// let division=a/b;
// console.log(division);
// let expo= a**b;
// let incr=++a;
// let decr=--b;
// console.log(expo);
// console.log(incr);
// console.log(decr);

// let x=5;
// let y=6;
// console.log(x+=5);
// console.log(x-=5);
// console.log(x*=3);
// console.log(y/=2);

// let testBoolean=true;
// let testNumber=20;
// let testString="Hello";
// let testBooleanObject=new Boolean(true);
// console.log(typeof(testNumber));
//  console.log(typeof(testBooleanObject));

// let testNull=null;
// console.log(typeof(testNull));

// let testUndefined;
// console.log(testUndefined);
// 'use strict'
// let text="Hello";
// let text="Hello";
// init();
// function init(){
    
//     if(true){
//         let text="Hello";
        
//     }
//     console.log(text);
// }

//Regular expressions

// var DNI_REGEX = /^(\d{8})([A-Z])$/;
// let dni ="12345678J";
// if(dni.match(DNI_REGEX)){
//     console.log("Correct DNI");
// } else{
//     console.log("Incorrect DNI");
// }

//Comparison Operators

// console.log(5>8);
// console.log(5<8);
// console.log(5>=8);
// console.log(5<=8);

// console.log(8!=8);
// console.log(8!="8");
// console.log(8!==8);
// console.log(8!=="8");

//loop while

// var i=1;
// while (i<10){
//     console.log("The number is "+ i);
//     i++;
// }

//Switch /case

// switch(new Date().getDay()){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Wendnesday");
//         break;
// }

//Date Object

// let today=new Date();
// let first_october=new Date(2019,10,1);
// console.log(today);
// console.log(first_october);
// console.log(today.getDay());

// if(today>first_october){
//     console.log("After");
// } else{
//     console.log("before");
//}

// function myFirstFunction(){
//     console.log("Thank you for your click");
// }
// function mySecondFunction(){
//     console.log("Thank you for your interest");
// }


// var div=document.getElementById("my_div");
// div.classList.add("my_class");
// console.log(div);
// var div=document.getElementsByTagName("div");
// console.log(div);

// var second_div=document.querySelector("#my_second_div");
// console.log(second_div);

// function $(selector){
//     return document.querySelectorAll(selector);
// }

// console.log($("#my_third_div"));

//Create DOM Nodes
$("#btn").addEventListener("click", function(){
    var input=document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]");
    $("#form").appendChild(input);
});

function $(selector){
    return document.querySelector(selector);
}