// let text = document.getElementById('text')
// let letter = document.getElementById('letter')
// console.log(text)




// letter.addEventListener('click', function(){
//     text.innerHTML= 7+3
// })

let open_icon = document.getElementById('open');
let close_icon = document.getElementById('close')

let menuOpen = document.getElementById('list');

open_icon.addEventListener('click', function(){
    open_icon.style.display='none';
    close_icon.style.display='block';
    
    menuOpen.style.display='block';
})

close_icon.addEventListener('click', function(){
    close_icon.style.display='none';
    open_icon.style.display='block';

    menuOpen.style.display='none';
})
