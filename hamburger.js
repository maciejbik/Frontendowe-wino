var button = document.querySelector(".web-header__image--js")


button.addEventListener('click',()=>
{
    var link = document.querySelector(".web-navigation");
    link.classList.toggle('web-navigation--js')
})