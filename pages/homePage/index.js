// let p = document.querySelector(".timer-p");
// let btn=document.querySelector('.start-btn')
// let a = setInterval(() => {
//  p.innerText--
//   if (p.innerText == 5) {
//     // alert("Xos gelmisiniz");
// p.innerText='Mehsul artiq bitib'
// clearInterval(a)
//   } 
 
// },1000);
// let c=setTimeout(()=>{
// alert('Xos gelmisiniz')

// },1000) 
// btn.addEventListener('click',startDate)
// function startDate(){
//     let d=setInterval(()=>{
//         p.innerText++
//         if(p.innerText==5){
//         p.innerText='Vaxtiniz Bitdi'
//         clearInterval(d)
//         }
        
//         },1000)
        
// }



// let b = setInterval(() => {
//   p.innerText--;
//   if (p.innerText == 0) {
//     p.innerText = "Vaxtiniz bitdi";
//     clearInterval(b);
//   }
// }, 1000);
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);
})
 