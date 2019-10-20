let firstPrompt = prompt('რამდენი სტუდენტი გყავდათ პირველ ლექციაზე? ');

let i = 0;
let firstArr = []
let secAr = [];
let names;

while (i < firstPrompt) {
    names = prompt('შეიყვანეთ სახელები');
   firstArr.push(names);
    i++;
}
    if (i == firstPrompt) {
    let secPrompt = prompt('რამდენი სტუდენტი გყავდათ მეორე ლექციაზე? ');
     let j = 0;   
        while (j < secPrompt) {
          var secNames = prompt('შეიყვანეთ სახელები');
            secAr.push(secNames);
            j++;
            
        }
}
let mainArr = [...firstArr,...secAr];
let listingArr = []

    document.write('პირველი ლექცია: ' + firstArr);
document.write('<br>');
    document.write('მეორე ლექცია: ' + secAr);
document.write('<br>');
for (let k = 0; k < mainArr.length; k++) {
    
    if (listingArr.indexOf(mainArr[k]) === -1) {
        listingArr.push(mainArr[k]);
    } 
}
  document.write('ორივე ლექცია: '+ listingArr )