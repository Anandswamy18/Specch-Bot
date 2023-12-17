let form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
      e.preventDefault()
    let txt1=document.getElementById("txt1").value
    let txt2=document.getElementById("txt2").value
    // let txt3=document.getElementById("txt3").value

    let td11=document.getElementById("td11")
    td11.innerHTML=`${txt1}`
    let td12=document.getElementById("td12")
    td12.innerHTML=`${txt2}`
    // let td13=document.getElementById("td13")
    // td13.innerHTML=`${txt3}`
})



txt14.addEventListener('click',()=>{
max(txt1.value)
max2(txt2.value)

})



function max(nan){
    let specch=new SpeechSynthesisUtterance(nan)
    speechSynthesis.speak(specch)
}

function max2(nan1){
    let specch2=new SpeechSynthesisUtterance(nan1)
    speechSynthesis.speak(specch2)
}

