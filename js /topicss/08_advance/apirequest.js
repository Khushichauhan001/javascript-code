const requestUrl = 'https://api.github.com/users/Khushichauhan001'

const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)  // abhi sirf call hua h .. send ni hui api request
xhr.onreadystatechange = function(){   // for continuously changing the state and to track
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)   // jb bhi url s response aata h toh most of the time wo string m hi aata h 
        console.log(typeof data)                     // parse convert datatype into json    
        console.log(data.following);
    }
}
//23 minute
xhr.send();
