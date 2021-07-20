var a=document.getElementById('main')

console.log(a)
var b=a.childNodes;
console.log(b)
function trythis(){
    for (var i=0;i<b.length;i++){
        console.log(b[i])
        if(b[i].nodeType==1){
            b[i].className='man';
        }
    }
    
}
