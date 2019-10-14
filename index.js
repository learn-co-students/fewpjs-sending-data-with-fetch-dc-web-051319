// Add your code here
function submitData(string1, string2){
  let obj = {
  name: string1,
  email: string2
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(obj)
};
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    postBody(object.id);
  })
  .catch(function(error) {
  alert("Bad things! Ragnarők!");
  postError(error.message);
});
}

function postBody(arg){
  let p = document.createElement("p")
  p.innerHTML = arg
  let z = p
  document.body.appendChild(z)
}

function postError(error){
  let p = document.createElement("p")
  p.innerHTML = error
  let z = p
  document.body.appendChild(z)
}
