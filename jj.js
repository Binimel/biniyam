const btn=document.getElementById('btn')
console.log(btn)
btn.addEventListener("click",
    function name1(name){
    const name2=prompt('what is your name')
    document.body.innerHTML=`welcome${name2}`
 }
)
