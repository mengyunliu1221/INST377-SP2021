/* Put your javascript in here */
const left = document.getElementById("left");
const right = document.getElementById("right");
const imgs = document.getElementsByTagName("img");
let arr = ["images/onigiri_1.png","images/onigiri_2.png","images/onigiri_3.png","images/onigiri_4.png","images/roll_1.png","images/roll_2.png","images/roll_3.png"]; 
left.onclick = function(){
    let a =  arr.pop()
    arr.unshift(a)
    for(let i = 0; i < imgs.length; i++){
        imgs[i].src = arr[i];
    }
    return true;
}
right.onclick = function(){
    let s = arr.shift()
    arr.push(s); 
    for(let i = 0; i < imgs.length; i++){
        imgs[i].src = arr[i];
    }
    return true;
}


