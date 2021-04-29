function searchBar(){
    const bars=document.querySelector('.search-bar')
    const icon=document.querySelector('.search')
    const closebtn=document.querySelector('.closebtn')
    icon.addEventListener('click',function(){
        bars.classList.remove('search-bar')
        closebtn.addEventListener('click',function(){
            bars.classList.add('search-bar')
        })
    })
}
function leftMenu(){
    const menu=document.querySelector('.menu')
    const icon=document.querySelector('.nav-left button')
    const menuClose=document.querySelector('.menu-close')
    icon.addEventListener('click',function(){
        menu.style.display="block"
        menuClose.addEventListener('click',function(){
            menu.style.display='none'
        })
    })
}
leftMenu()
searchBar()