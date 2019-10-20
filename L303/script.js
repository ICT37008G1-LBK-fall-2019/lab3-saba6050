let lari = prompt('შეიყვანეთ D ან L + ციფრი');
let h2 = document.querySelector('h2');
let newlari;


if (lari.indexOf('L') === 0) {
    console.log(lari);
     newlari = lari.substr(1,3);
    h2.textContent = newlari / 2.9 + ' dolari';
} else if (lari.indexOf('D') === 0){
        newlari = lari.substr(1,3);
      h2.textContent = newlari * 2.9 + ' lari';
    
} else {
    alert('მიუთითეთ D ან L')
}




