function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }
   let configurationObject = {
        method: "POST",
        headers: {
            //hey serve here's what im sending you please accept it
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData) 
        //giving data to the browser
    };
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then((object) =>{
        document.body.innerHTML = object["id"];
        console.log(object);
        })
     .catch(function(error) {
        document.body.innerHTML = error.message;
         console.log(error.message);
    });
}



// return (fetch("http://localhost:3000/users", configObject)
// .then(function(response) {
//     return response.json();
// })
// .then(function(object) {
//     document.body.innerHTML = object["id"];
//     console.log(object);
// })
// .catch(function(error) {
//     document.body.innerHTML = error.message;
//     console.log(error.message);
// })
// );