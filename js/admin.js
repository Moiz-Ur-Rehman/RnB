function adminMenu(){
    const menu=document.querySelector('.menu-wrap')
    const menuCont=document.querySelector('.menu-container')
    const icon=document.querySelector('.menu-container button')
    const menuClose=document.querySelector('.menu-close')
    icon.addEventListener('click',function(){
        menu.classList.toggle("menujs")
        menuCont.classList.toggle("contjs")
    })
}
adminMenu()