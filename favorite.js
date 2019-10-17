var answer = prompt('do you like dogs or cats?');

var message;

if (answer === 'cats'){
    message = 'cats are sweete!';
}
 else if(answer === 'dogs'){
    message = 'i love dogs too!';
}
 else if(answer === 'nan'){
    message = 'have a good day';
}

document.write('<h3>' + message + '</h3>');