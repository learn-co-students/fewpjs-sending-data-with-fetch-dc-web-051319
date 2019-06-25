// Add your code here
function submitData(name, email) {
    let formData = {
        name: name, 
        email: email
    }

    let configObj = {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
    
    return fetch('http://localhost:3000/users', configObj)
      .then(function(resp){
          return resp.json()
      })
      .then(function(obj){
          let div = document.createElement('div')
          div.id = obj.id
          div.innerText = obj.id
          document.body.appendChild(div)
      })
      .catch(function(error) {
          console.log(error.message)
          let div = document.createElement('div')
          div.className = error.message
          div.innerText = error.message
          document.body.appendChild(div)
      })
      
}