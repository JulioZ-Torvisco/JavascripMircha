const d = document;

export function digitalClock(clock, startClock, StopClock){
    let clockTime;

    d.addEventListener('click', (e) =>{
        if(e.target.matches(startClock)){
            clockTime = setInterval(() => {
               let clockHour = new Date().toLocaleTimeString();
               d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`; 
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(StopClock)){
            clearInterval(clockTime);
            d.querySelector(clock).innerHTML = null; 
            d.querySelector(startClock).disabled = false;
        }
        
    });
}

export function digitalAlarm(alarm, startAlarm, stopAlarm){
    let alarmTime;
    const $alarm = d.createElement('audio');
    $alarm.src = alarm;

    d.addEventListener('click',(e)=>{
        if(e.target.matches(startAlarm)){
            alarmTime = setTimeout(()=>{
                $alarm.play();
            },2000);
            e.target.disabled = true;
        }
        if(e.target.matches(stopAlarm)){
            clearTimeout($alarm.pause());
            d.querySelector(startAlarm).disabled = false;
        }
    });
}

