 //question1
 function  removeArray(arr) {
     const firstFour = arr.slice (0,4).map(item => item * item);
     console.log(firstFour)
     const lastTwo = arr.slice(-2).map(item => item + 10);
     console.log(lastTwo)
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
    }
    removeArray=([22,24,26,28,30,32]);
//quetion 3
let fruits = ["apple","plum","banana","strawberry","kiwi"]
for(let i=1;i<= 5; i++ ){
    if(i==3){
        continue;
    }
    console.log(fruits)
}
//question2
let arrNum = [1,2,3,4,5,6,7,8,9]
var i = 0
while (i<arrNum.length){
    if(arrNum[i]===arrNum[3]){
        break
    }
    console.log(arrNum[i]);i++;

}
//question4
function myString(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])

    }
}
let colors=["Blue","Maroon","Pink","Red","Yellow"]
myString(colors)

  //question5
  function  reverse(String){
    let reverse = ""
    var i = String.length -1;
    while (i>=0){
        reverse += String[i];
        i--;
    }
    return reverse;
  }
  let originalString ="AkiraChix"
  let x = reverse(originalString);
  console.log(x);



