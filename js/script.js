
let bannerDesc = document.getElementById('bannerDesc');
let mobileNav = document.getElementById('mNavContent');
let mNavItems = document.getElementsByClassName('mNav');
mNavItems = Array.from(mNavItems);
let navbar = document.getElementById('navbar');
let menuButton = document.getElementById('menuButton');

mobileNav.style.display = 'none';

const display = {

    set(element, elemStyle){
        element.style.display = elemStyle;
    },

    get(element){
        return element.style.display;
    }
}


const events = {

    closeMenu(){
        //closes mobile nav menu when open and pressed outside of menu.
        document.addEventListener('click',()=>{

                if(mNavItems.includes(event.target)){
                    togNav();
                }

                else if(event.target == navbar){
                    return;
                }
            

        });
    },

    closeOnResize(){
        //closes menu if width is greater than 750px
        
    },

    initialize(){
        this.closeOnResize()
        this.closeMenu();
    }
}

function togNav(){
    if( display.get(mobileNav) === 'none'){
        display.set(mobileNav, 'block');
        display.set(bannerDesc, 'none');
    }
    else {
        display.set(mobileNav, 'none');
        display.set(bannerDesc, 'block');
    }
}

events.initialize();


