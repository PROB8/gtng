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
export const activateTabOnClick = () => {
    document.addEventListener('click', function(e) {
        const className = e.path[0].className.split(' ');
        if (!className.includes('link')) return;

        const links = document.getElementsByClassName('active');
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
    });
};

export const activateTabOnScroll = links => {
    window.addEventListener('scroll', function(){
        const activeLinks = document.getElementsByClassName('active');
        const navBarBottom = document.getElementById('navbar').getBoundingClientRect().bottom;
        links.forEach(link => {
            const correspondingLink = document.getElementById(link['link-id'])
            const elementsBottom = document.getElementById(link['container-id']).getBoundingClientRect().bottom;
            const elementsTop = document.getElementById(link['container-id']).getBoundingClientRect().top;
            if(correspondingLink.classList.contains('active') && elementsBottom <= navBarBottom) {
                correspondingLink.classList.remove('active');
            }
            if(!correspondingLink.classList.contains('active') && elementsTop - navBarBottom < 150 && elementsTop - navBarBottom > 50) {
                
                console.log(activeLinks)
                for(let activeLink of activeLinks) {
                    activeLink.classList.remove('active')
                }
                correspondingLink.classList.add('active')
            }

            if(!document.getElementById('navbar').classList.contains('sticky')) {
                for(let activeLink of activeLinks) {
                    activeLink.classList.remove('active')
                }
                document.getElementById('first-link').classList.add('active')
            }
        });
    });
}