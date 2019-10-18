

function age(){
    var year = prompt ("how old are you!");
    
    var message;
    
    if (year < '18'){
        prompt('sorry you very young to be here');
        // message = 'sorry you very young to be here';
    }
    else if(year > '18'){
        
        message = 'welcome';
    }
    return '<h2>' + message + '<h2>';
}

function soccer(){

var answer = prompt('Do you like soccer?');

var message;

if (answer == 'yes'){
  message = 'that is a great sport!';
} else if (answer != 'yes'){
  prompt('that is alright');
}

return '<h3>' + message + '</h3>';
}



function askName(){
    var answer = prompt  ('what is your name ?');
    

    return document.write('<h3>' + answer + '</h3>');

}

function greeting(){
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
    return '<h3>' + message + '</h3>';
} 


age();
askName();
greeting();
soccer();