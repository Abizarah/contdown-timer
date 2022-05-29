const countDate = new Date('May 29 2022 00:00:00').getTime();

function newYear(){
    const now = new Date().getTime();
    eve = countDate - now;

    const detik = 1000;
    const menit = detik * 60;
    const jam = menit * 60;
    const hari = jam * 24;

    const h = Math.floor(eve / (hari));
    const j = Math.floor( (eve % (hari)) / (jam)); 
    const m = Math.floor( (eve % (jam)) / (menit)); 
    const d = Math.floor( (eve % (menit)) / (detik)); 
    
    document.getElementById('hari').innerText = h;
    document.getElementById('jam').innerText = j;
    document.getElementById('menit').innerText = m;
    document.getElementById('detik').innerText = d;
}

setInterval(function() {
    newYear();
}, 1000);