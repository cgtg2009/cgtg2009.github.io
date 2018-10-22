
var avatartimeline = anime.timeline();
avatartimeline.add({
    targets: '.avatar .ve circle',
    strokeDashoffset : [anime.setDashoffset,0],
    duration:2000,   
    easing: 'easeOutSine',
    opacity:[0,1]
})

avatartimeline.add({
    targets: '.avatar img.anh',  
    opacity:[0,1],    
    duration:1500,   
    easing: 'linear',
   
})

avatartimeline.add({
    targets: '.avatar .ve circle',  
    opacity:[1,0],    
    duration:500,   
    easing: 'linear',   
})



