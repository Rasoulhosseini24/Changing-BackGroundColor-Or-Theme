let themes=document.querySelector('.theme');
Array.from(themes.children).forEach(theme =>{
theme.addEventListener('click',e=>{
let color=e.target.dataset.color;
document.body.className=color
})


})