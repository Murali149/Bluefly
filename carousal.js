var image = document.getElementById("imgSlider");
 
    var address = [
        "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Valentino_1400x.jpg?v=1630420054",
        "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/saint_laurent_3_2160x.jpg?v=1630508580",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwpM4b9i48Cp1Te-91jM0Op2QsizDDLOOZA&usqp=CAU",
        "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://media.istockphoto.com/photos/welldressed-man-wearing-jacket-and-tie-isolated-on-dark-red-picture-id1265268135?b=1&k=20&m=1265268135&s=170667a&w=0&h=tl_4TlggCVdIL1iq0LR8uAlWHvGuiXhr42twttGEv4o=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXbjSxReJlZ-CN2j1YbAtGNLj3F-urE9-xA&usqp=CAU",
        "https://media.istockphoto.com/photos/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-picture-id1320786676?b=1&k=20&m=1320786676&s=170667a&w=0&h=qKmwIvi7qq8RBNpFzZzifpfPcZl82xlq2whbMm4W-jE=",
        
        
    ];
    var count = 0;
     setInterval(function () {
        if (count == 7) {
        count = 0;
    }
    image.src = address[count];
    count++;
  }, 2000);