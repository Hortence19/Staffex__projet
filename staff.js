// const percent = document.querySelector('.percent')
// const progress = document.querySelector('.progress')
// let count = 0
// const per =20
// const totalInteration =5
// const loading = setInterval(animate, 1000)
// function animate(){
//      if(count<totalInteration){
//         count++;
//         const CurrentPercent = count*per;
//         progress.style.width = CurrentPercent + 'px';
//         progress.style.backgroundColor = "white";  
//         percent.textContent= CurrentPercent+'%'
//     }else{
//         clearInterval(loading);
//         }
//         setTimeout(()=>{
//             window.location.href="http://127.0.0.1:5500/%20index1.html"
//     },5000)
//  }
//     animate();
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
video1.addEventListener('ended',function(){
    video1.style.display='none';
    video2.style.display='block';
    video2.play();
})
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
video3.addEventListener('ended',function(){
    video3.style.display='none';
    video4.style.display='block';
    video4.play();
})
const video5 = document.getElementById('video5');
const video6 = document.getElementById('video6');
video5.addEventListener('ended',function(){
    video5.style.display='none';
    video6.style.display='block';
    video6.play();
})

    

