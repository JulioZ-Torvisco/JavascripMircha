const d = document,
    w = window;

export default function topButton(botonArriba) {
    const $scrollBtn = d.querySelector(botonArriba);

    w.addEventListener('scroll', (e) => {
        let scrollTop = d.documentElement.scrollTop || d.body.scrollTop || w.pageYOffset;
        if(scrollTop > 600){
            $scrollBtn.classList = 'mostrar';
        }
        else{
            $scrollBtn.classList = 'ocultar';
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(botonArriba) || e.target.matches(`${botonArriba} *`)) {
            scrollTo(0,0);
            /*w.scrollTo({
                behavior: 'smooth',
                top: 0,
                left: 0
            })*/
        }
    })
}