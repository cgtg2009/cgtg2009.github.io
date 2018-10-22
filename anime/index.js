
var cdtimeline = anime.timeline();
cdtimeline.add({
    targets: '.ve path',
    strokeDashoffset : [anime.setDashoffset,0],
    duration:3000,
    delay:function(el, i){
        return 1000*i;
    },
    easing: 'easeOutSine',
    direction: 'alternate',
    loop:true
});

console.log(cdve);