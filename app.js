// var inp=document.getElementById('inp')
// console.log(inp)
// function btnClicked(ab){
//     if(ab==1){
//         inp.value+=ab;
//     }
//     else if(ab==2){
//         inp.value+=ab;
//     }
//     else if(ab==3){
//         inp.value+=ab;
//     }
//     else if(ab=='+'){
//         console.log('It is plus')
//         inp.value += '+' ;
//     }
//     else if(ab==4){
//         inp.value+=ab;
//     }
//     else if(ab==5){
//         inp.value+=ab;
//     }
//     else if(ab==6){
//         inp.value+=ab;
//     }

//     else if(ab='-'){
//         inp.value+= '-';
//     }
//     else if(ab==7){
//         inp.value+=ab;
//     }
//     else if(ab==8){
//         inp.value+=ab;
//     }

//     else if(ab==9){
//         inp.value+=ab;
//     }
//     else if(ab=='*'){
//         inp.value+='*';
//     }
//     else if(ab==0){
//         inp.value+=ab;
//     }
//     else if(ab=='.'){
//         inp.value+='.';
//     }
//     // else if(ab=='='){
//     //     inp.value+='=';
//     // }
//     else if(ab=='/'){
//         inp.value+='/';
//     }

// }


// var a=+(document.getElementById('inp').value);
// function compute(){
//     var result=eval(a);
//     inp.value=result;
// }

// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });

  // calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      // check if the display is not empty then only do the calculation
      if (display.value !== '') {
        // calculate and show the answer to display
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on display
      display.value = '';
    } else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }