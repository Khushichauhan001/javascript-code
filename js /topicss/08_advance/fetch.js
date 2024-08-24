// syntax of fetch 
// fetch("https://exmle@gamil.com")
// .then((response) => {
//        // do something with response
// })
// .catch(function(err) {
//     console.log("unable to fetch ", err);
// });



// if want to send username bgera ya koi or detail to phle us detail ko object m likhie fir 
   //  fetch("https://exmle@gamil.com" , {header});
   // for more visit : https://fetch.spec.whatwg.org/#fetch-method



// interview ask
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).    
fetch('https://api.github.com/users/Khushichauhan001')            // it gives error but run it on console so it will gie output
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data);
    
})
.catch((error) => console.log('error'))