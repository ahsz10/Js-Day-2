
// Task 1
function ageStatus(){
  while(true){
    let age=parseInt(window.prompt("Enter your age: "));
    if(age<=0){
      console.log(typeof(age));
      alert("Please enter your age with positive number only and greater than zero\n Re-enter Your age");
    }else if(age<=10){
      alert("Child");
    }else if(age<=18){
      alert("Teenager");
    }else if(age<=50){
      alert("Grownup");
    }else if(age > 50){
      alert("Old");
    }else{
      alert("Invalid Input");
      break;
    }
  }  
}


// Task 2 
const vowels = ["a", "e", "o", "u", "i"];
let input,lowerInput;
var count;

function countVowel(str) {
    let cnt = 0;
    for (let letter of str) {
      //console.log(letter);
      if(vowels.includes(letter)) {
        cnt++;
      }
    }
    count =  cnt;
    //console.log("The input string "+input+" contains "+cnt+" vowels");
    alert("The input string "+input+" contains "+cnt+" vowels");
}

function inputString(){
  input = window.prompt("Enter a string: ");
  lowerInput =input.toLowerCase();
  return(lowerInput);
}
//console.log("The input string "+input+" contains "+count+" vowels");
//alert("The input string "+input+" contains "+count+" vowels");


// Taks 3
function changeClockFormat(){
  while(true){
    let hour= parseInt(window.prompt("Enter the hour: \n From 0 till 23"));
    //console.log(hour);
    if(hour<0 || hour>24){
      alert("Please enter the hour within the specified range");
    }else if(hour == 0){
      hour+=12;
      alert("The time is "+hour+" AM");
    }else if(hour>0 && hour<12){
      alert("The time is "+hour+" AM");
    }else if(hour == 12){
      alert("The time is "+hour+" PM");
    }else if(hour>12 && hour<24){
      hour-=12;
      alert("The time is "+hour+" PM");
    }else{
      break;
    }
  }
}


////////// Calling Tasks Funtions //////////

// Task 1 
//ageStatus();

// Task 2 
//countVowel(inputString());


// Task 3 
changeClockFormat();