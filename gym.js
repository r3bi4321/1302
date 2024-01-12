function workout(){

    ("load", function() {

        if (document.getElementById("button")) {
         document.getElementById("button").addEventListener("click", test);
        }
       });

}


function reaction() {
    let dateoutput;
    let timeoutput;
    let sportoutput;
    let dates = prompt("Datum:");
    let time= prompt("Dauer des Workouts:");
    let sport= prompt("Welche Sportart haben sie getätigt?");
   
      dateoutput = dates 
      timeoutput= time  
      sportoutput= sport
    
    document.getElementById("dateoutput").innerHTML = dateoutput+": " + timeoutput+ ", " + sportoutput;
    
  }
