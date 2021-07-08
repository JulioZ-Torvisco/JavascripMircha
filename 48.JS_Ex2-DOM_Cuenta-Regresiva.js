const d = document;

export default function countDown(id,limitDate,finalMessage){
   const $countdown = d.getElementById(id),
        cd = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{ 
        let now = new Date().getTime(),
            limitTime = cd - now,
            days = Math.floor(limitTime/(1000*60*60*24)),
            hours = ('0'+ Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2),
            minutes = ('0'+ Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2),
            seconds = ('0'+ Math.floor((limitTime%(1000*60))/(1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`

        /*let fechaMenosHoy = fecha.getTime() - new Date().getTime();
        var milliseconds = parseInt((fechaMenosHoy % 1000) / 100),
            seconds = Math.floor((fechaMenosHoy / 1000) % 60),
            minutes = Math.floor((fechaMenosHoy / (1000 * 60)) % 60),
            hours = Math.floor((fechaMenosHoy / (1000 * 60 * 60)) % 24),
            days = Math.floor((fechaMenosHoy / (1000 * 60 * 60* 24)));
    
        days = (hours < 365) ? days : days;
        hours = (hours < 24) ? hours : hours;
        minutes = (minutes < 60) ? minutes : minutes;
        seconds = (seconds < 60) ? seconds : seconds;
    
        d.getElementById('countdown').innerHTML = `Faltan ${days} dias : ${hours} horas : ${minutes} minutos : ${seconds} segundos`;        
        */

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`  
        }
    },1000);
}
//countDown(new Date('2022,06,22'));