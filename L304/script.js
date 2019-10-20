let number = prompt('რამდენი სტუდენტის შეყვანა გსურთ?');
let arr = [];
let i = 0;
let name;
while(i < number) {
    name = prompt('შეიყვანეთ სტუდენტის სახელი: ')
    arr.push(name);
    i++;
}

document.write(arr)