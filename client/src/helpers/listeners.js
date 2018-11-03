export const centerSlideShow = () => {
    /**
     * 
     * wip to center slidshow on medium sized screens
     * 
     */
    return window.addEventListener('resize', function(e) {
        if (window.innerWidth === '648px') {
            document.getElementById('slide-show').style.left = '100px';
            console.log('resizing')
        }
    });
};

export const showHideArrow = () => {
    return window.addEventListener('click', function(e) {
        let arrow = document.getElementById('arrow');
        //this will hide your arrow if you are viewing the application form modal
        if (e.path[0].className === 'careers') {
            arrow.style.display = 'none';
        } else if (e.path[0].className === 'close') {
            arrow.style.display = 'initial';
        }
    });
};

/* 
    
        THE FUNCTION BELOW:
            helps us to add css class to the 
            appropriatel clicked nav link

    */
export const justCss = () => {
    document.addEventListener('click', function(e) {
        let className = e.path[0].className.split(' ');
        if (!className.includes('link')) return;

        let links = document.getElementsByClassName('active');
        for (let link of links) {
            link.classList.remove('active');
            e.path[0].classList.add('active');
        }
    });
};

export const showArrow = (arrowElement, windowScroll) => {
    if (windowScroll < 500) {
        arrowElement.style.display = 'none'
    }

    window.addEventListener('scroll',function() {
        if(window.pageYOffset > 500) {
            arrowElement.style.display = 'initial'
        }
        else {
            arrowElement.style.display = 'none'
        }
    })
};