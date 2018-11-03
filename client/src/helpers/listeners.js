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
