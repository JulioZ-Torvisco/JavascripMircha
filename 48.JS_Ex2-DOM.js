import hamburgerMenu from "./48.JS_Ex2-DOM_Menu-Hamburgesa.js";
import { digitalClock, digitalAlarm } from "./48.JS_Ex2-DOM_Reloj.js";
import { eventoTeclado, atajosTeclado } from "./48.JS_Ex2-DOM_Evento-Teclado.js";
import countDown from "./48.JS_Ex2-DOM_Cuenta-Regresiva.js";
import topButton from "./48.JS_Ex2-DOM-TopButton.js";
import darkLight from "./48.JS_Ex2-DOM_Dark-Light-Button.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.sidebar', '.menu a');
    digitalClock('#reloj', '#start-clock', '#stop-clock');
    digitalAlarm('assets/alarma_2.mp3', '#start-alarm', '#stop-alarm');
    countDown('countdown', 'June 23,2021 20:27:00','Feliz ANO Nuevo 🤓');
    topButton('#up-btn');
    //darkLight('#dark-btn','#light-btn'); Mi forma Dark Mode
});

d.addEventListener('keydown', (e) => {
    atajosTeclado(e);
    eventoTeclado(e,'.circulo','.escenario');
});

darkLight('.dark-btn', 'dark-mode');
