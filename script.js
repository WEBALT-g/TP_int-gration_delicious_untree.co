const tabs = document.querySelectorAll('.tabs');
const content = document.querySelectorAll('.content');
let index = 0;

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        if(tab.classList.contains('active')){
            return;
        } else {
            tab.classList.add('active');
        }

        index = tab.getAttribute('data-anim');

        for(i = 0; i < tabs.length; i++) {

            if(tabs[i].getAttribute('data-anim') != index) {
                tabs[i].classList.remove('active');
            }
        }

        for(j = 0; j < content.length; j++) {
            if(content[j].getAttribute('data-anim') == index) {
                content[j].classList.add('active-content');
            } else {
                content[j].classList.remove('active-content');
            }
        }

    })

})