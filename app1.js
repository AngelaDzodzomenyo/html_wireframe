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

function picturesonpage(){
    let numberofpictures = prompt('Wanna see some cool cars?!')
    for(let i = 0); i < numberofpictures; i++){
        document.write('<img src="https://images.unsplash.com/photo-1550615162-30dcc978d172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80, https://images.unsplash.com/photo-1507722661946-ec4abdfe6a1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80 ">')
    }
}