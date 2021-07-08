export default function hamburgerMenu(panelBtn, sidebar, menuLink){
    const d = document;

    d.addEventListener('click', (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(sidebar).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.toggle('is-active');
        }
        if(e.target.matches(menuLink)){
            d.querySelector(sidebar).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    });
}