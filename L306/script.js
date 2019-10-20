let question = prompt('რამდენი სტუდენტის შეყვანა გსურთ?');
let i = 0;
let myArray = [];
while (i < question) {
    let words = prompt('შეიყვანეთ სტუდენტის სახელი: ');
    myArray.push(words);
    i++;
    
}
let newWord = '';
console.log(myArray)
if (question == i) {
    newWord =  prompt('რომელ სტუდენტის ეძებთ?');
}

let lastArray = []
for (var j = 0; j < myArray.length; j++) {
    if (myArray[j].indexOf(newWord) != -1){
        lastArray.push(myArray[j])
    }
}
