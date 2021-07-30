console.log('Hello World!')

let username = prompt('What is your Name?')
console.log (username)

function getusername(){
    if(username.toLowerCase() == 'angela'){
        document.write('<h2>Welcome ' + username + ', we share a name!</h2>')
    } else {
        document.write('<h2>Welcome ' + username + ',</h2>')
        document.write('<h3>Hi' + ' Friend! ' + '</h3>')
        
    }
}

getusername();

let askusercolor = prompt(username + '! Do you like the color blue? Yes or No.')
console.log (askusercolor)

function getusercolor(){
    if(askusercolor.toLowerCase() == 'yes'){
        alert("AWESOME!")   
    } else {
        alert("ew!")
    }
}
    
getusercolor();