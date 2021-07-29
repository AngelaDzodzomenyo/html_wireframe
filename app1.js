console.log('Hello World!')

let username = prompt('What is your Name?')
console.log (username)

document.write('<h2>Welcome ' + username + ',</h2>')

if(username.toLowerCase() == 'angela'){
    document.write('<h2>Welcome ' + username + 'we share a name!</h2>')
} else {
    document.write('<h2>Welcome' + 'Friend ' + '</h2>')    
}