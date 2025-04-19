// Callbacks

function llamar(callback, a) {
    callback(33 + a);
}

llamar(console.log, 200); // Print the message      
// 233