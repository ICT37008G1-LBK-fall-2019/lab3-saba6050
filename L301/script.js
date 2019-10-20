let str = 'გადმოვწერე ვირუსი , რომელმაც წაშალა ჩემი სურათები';
document.querySelector('p').textContent = str;
let myArr = ['წაშალა','ვირუსი','სურათები']
let dontsay = [];
                for (var i = 0; i < myArr.length; i++) {
                    if(str.indexOf(myArr[i]) != -1) {
                        dontsay.push(myArr[i])
                    } 

                    else {
                        continue;
                }
            }
 if(dontsay.length > 0) {
     alert('აღმოჩენილია დაუშვებელი სიტყვები: ' + dontsay);
 } else {
     alert('ყველაფერი სწორადაა')
 }