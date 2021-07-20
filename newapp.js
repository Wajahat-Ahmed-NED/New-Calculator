// var a=document.getElementsByTagName('P');//andar capital ma likho achi practice ha
// for(var i=0;i<a.length;i++){
//     console.log(i)
//     // var b=document.getElementsByClassName('me');
//     // if(a[i]==b){
//     //     console.log(a[i])
//     //     break;
//     // }
//     if(a[i].className=='me'){
//         a[i].style.backgroundColor='red';
//         console.log(a[i].innerHTML)
//         break;
//     }
// }


//DOM
// document is html ki file ko bolenge
// js se apni html ma kese kaam krskte ha


// var maindiv=document.getElementById('main')
// console.log(maindiv)
// var abc=function(){
//     var a=maindiv.getElementsByTagName('P')
//     console.log(a)
// }
//anonymous function

var a=document;
console.log(a)

console.log(a.childNodes)
{/* <doctype html > ye html ka tag nahi ha sirf version batayega html ka  or html ke tag ke andar nahi ha*/}
console.log(a.childNodes[1])
// object ma andar jana hoto . lagakr andar jaskty ha
console.log(a.childNodes[1].childNodes)
// text is junk artifacts    yani </html> or <body> ke bech ki indentation ko node banalega
// body ke andar comment ko bhi ek node mane ga
console.log(a.childNodes[1].childNodes[2].childNodes[0])
// object kis tarah se model banata ha html ke andar
// console.log(document.getElementsByTagName('P').parentNode)
// text(junk artifact) ke liye-->3 element ke liye-->1  NodeType
// nodeName
