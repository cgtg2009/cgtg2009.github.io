
var cdve = anime({
    targets: '.ve path',
    strokeDashoffset : [anime.setDashoffset,0],
    duration:3000,
    delay:1000,
    easing: 'easeOutSine',
    direction: 'alternate',
    loop:true
});

console.log(cdve);