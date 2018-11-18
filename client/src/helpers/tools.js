
export const stickyNav = (navbar, sticky) => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

export const scrollTo = elmt => {
    const pos = document.getElementsByClassName(elmt)[0].offsetTop;
    console.log(pos)
    window.scrollTo(0, pos );
};

export const scrollTop = yOff => {
    function scroll(n){
        console.log('hit')
        if ( n > 5 ) {
            setTimeout(function(){
                const newLocation = n / 1.03;
                window.scrollTo(0, newLocation);
                scroll(newLocation);
            }, 0);
        }
    }
    
    scroll(yOff);
};