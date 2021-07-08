const d = document;
// Mi Forma Dark Mode
/*export default function darkLight(darkBtn, lightBtn) {

    let yellowColor = getComputedStyle(d.documentElement).getPropertyValue('--main-color');
    let darkColor = getComputedStyle(d.documentElement).getPropertyValue('--second-color');

    d.addEventListener('click', (e) => {
        if (e.target.matches(darkBtn) || e.target.matches(`${darkBtn} *`)) {
            d.querySelector(darkBtn).classList = 'ocultar';
            d.querySelector(lightBtn).classList = 'mostrar';
            d.body.style.backgroundColor = darkColor;
            d.querySelectorAll('.section h2').forEach(v => v.style.color = yellowColor);
            d.querySelector('.escenario').style.backgroundColor = yellowColor;
            d.querySelector('.circulo').style.backgroundColor = darkColor;
            d.querySelector('#countdown').style.color = yellowColor;
        }
    })
    d.addEventListener('click', (e) => {
        if (e.target.matches(lightBtn) || e.target.matches(`${lightBtn} *`)) {
            d.querySelector(darkBtn).classList = 'mostrar';
            d.querySelector(lightBtn).classList = 'ocultar';
            d.body.style.backgroundColor = 'initial';
            d.querySelectorAll('.section h2').forEach(v => v.style.color = 'initial');
            d.querySelector('.escenario').style.backgroundColor = darkColor;
            d.querySelector('.circulo').style.backgroundColor = yellowColor;
            d.querySelector('#countdown').style.color = darkColor;
        }
    })
}*/

//FORMA MIRCHA USANDO DATA ATTRIBUTES
export default function darkLight(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll('[data-dark]');
    //console.log($selectors);

    let moon = '🌙',
        sun = '☀️';

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem('dark-light', 'light');
    }
    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localStorage.setItem('dark-light', 'dark');
    }

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            //console.log($themeBtn.textContent);
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    })

    d.addEventListener('DOMContentLoaded', (e) => {
        if (localStorage.getItem('dark-light') === null) {
            localStorage.setItem('dark-light','light');
        }
        if (localStorage.getItem('dark-light') === 'light') {
            lightMode();
        }
        if (localStorage.getItem('dark-light') === 'dark') {
            darkMode();
        }
    })
}