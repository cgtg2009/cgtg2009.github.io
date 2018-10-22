var myElement = document.getElementById("itemToWatch"); // phần tử cần theo dõi

var elementWatcher = scrollMonitor.create( myElement );

// đã cuộn chuột đến rồi
elementWatcher.enterViewport(function() {
    console.log( 'I have entered the viewport' );
});

// đã cuộn chuột qua rồi
elementWatcher.exitViewport(function() {
    console.log( 'I have left the viewport' );
});


