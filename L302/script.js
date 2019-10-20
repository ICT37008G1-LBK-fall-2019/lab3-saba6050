let p = document.querySelector('.A');
let p2 = document.querySelector('.B');
let str = 'ერთხელ, სახლში რომ ვბრუნდებოდი, გაჩერებაზე დავინახე ვიგაც უცნაური ნათურა თავიანი კაცი. უცნაური მასში მომეჩვენა ის რომ ვეშაპს არველოდი ერქვა.';
p.textContent = str;

if (str.length > 15) {
    p2.textContent = str.substr(0,15) + ' ...'
}