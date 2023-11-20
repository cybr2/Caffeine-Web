const mobileNav = () => {
    // selector 
    const headerBtn = document.querySelector('.header-bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link')

    //state
    let isMobileNavOpen = false ;

    //handlers

    const handleHeaderBtnDisplay = () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    }

    // events 
    headerBtn.addEventListener('click', handleHeaderBtnDisplay);

}
export default  mobileNav;