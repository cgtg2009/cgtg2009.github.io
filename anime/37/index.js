var imactimeline = anime.timeline();
var trangthai = "chuachay";

var myElement = document.getElementById("itemToWatch"); // phần tử cần theo dõi

var elementWatcher = scrollMonitor.create( myElement );

// đã cuộn chuột đến rồi
elementWatcher.enterViewport(function() {
    console.log( 'I have entered the viewport' );
    if(trangthai=="chuachay"){
        trangthai = "dachay";
        imactimeline.add({
            targets: '#itemToWatch .ve path',
            strokeDashoffset : [anime.setDashoffset,0],
            duration:1500,   
            easing: 'easeOutSine',
            opacity:[0,1]
        })
        
        imactimeline.add({
            targets: '#itemToWatch .img-thumb img',  
            opacity:[0,1],    
            duration:500,   
            easing: 'linear',
        
        })
        
        imactimeline.add({
            targets: '#itemToWatch .ve path',  
            opacity:[1,0],    
            duration:500,   
            easing: 'linear',
            
        })
    }
});

// đã cuộn chuột qua rồi
elementWatcher.exitViewport(function() {
    console.log( 'I have left the viewport' );
});


