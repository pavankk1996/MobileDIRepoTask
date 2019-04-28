var obj, dbParam, xmlhttp, myObj,dataDetails, data = "";
//obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   myObj = JSON.parse(this.responseText);
   data += "<table border='1'>"
   for(var x=0;x<10;x++) {
     data += "<ul><li>" +myObj.data[x].date + "</li>"+ "<li>" +myObj.data[x].name + "</li>"+"<li><button onclick='View(myObj)'><span>View Details</span></button></li></ul> ";
   }
   data += "</table>"    
   document.getElementById("card").innerHTML = data;
  }
};
xmlhttp.open("GET", "https://cricapi.com/api/matchCalendar?apikey=1Kd985ENa9MPBi9XhuYjcOUJMZL2",true);
xmlhttp.send();

function View(myObj) {
    dataDetails;
    var index;
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', function(i) {
           console.log('You clicked element #' + i);
           if(index < 0){
               return
           }
           else{
            index = i;
            dateDetails="<p>"+"Date : "+myObj.data[index].date+"</p>";
            document.getElementById("dateDetails").innerHTML = dateDetails;
            opponent="<p>"+"Match : "+ myObj.data[index].name+"</p>";
            document.getElementById("opponent").innerHTML = opponent;
           }
        }.bind(null, i)); 
     }  
}
var nodes = document.getElementsByTagName('button');


