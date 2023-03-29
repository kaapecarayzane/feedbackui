const ratingel=document.querySelectorAll('.rating')
const btn=document.getElementById('btn')
const container=document.getElementById('container')
let selectedRating=''
ratingel.forEach((ratingel)=>{
    ratingel.addEventListener('click',(event)=>{
        removeactive()
        selectedRating=event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add('active')
        event.target.parentNode.classList.add('active')
    })
    btn.addEventListener('click',()=>{
        if(selectedRating !==''){
            container.innerHTML=`<strong>thank you</strong> <br> <br><strong> feed back:${selectedRating} </strong>`

        }
    })
        
    
})
function removeactive(){
    ratingel.forEach((ratingel)=>{
        ratingel.classList.remove('active')
    })
}