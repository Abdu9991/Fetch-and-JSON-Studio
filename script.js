// TODO: add code here
window.addEventListener('load', function(){
 const container = document.getElementById("container");
async function fetchAndDisplayAstronauts(){
    
    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        let data = await response.json();    //console.log(json);  
        //bonus mission 1
        data.sort(function (a,b){
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
        });
      // bonus mission 3 
      const count = document.getElementById('count');
      count.innerHTML = ` these ${data.length} extraordinary people are a few of the handful of humankind who 
      have had the privilege of looking down on our beautful planet from the quiet darkness of outer space`
        for(let i =0; i < data.length; i++){
            let astronaut = data[i];
            // bonus mission 2
            let activeClass = astronaut.active ? "active" : "";

            container.innerHTML += `<div class="astronaut">
            <div class="bio">
               <h3> ${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li class="${activeClass}">Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills.join(", ")}</li>
               </ul>
            </div>
            <img class="avatar" src=${astronaut.picture}>
         </div>`
        }
    
        
}
fetchAndDisplayAstronauts();
});