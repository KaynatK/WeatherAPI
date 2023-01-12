import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/bootstrap.min.css';
import './css/tyles.css';

$(document).ready(function() {             /* here the fuction is ready to search by named city means location */
$('#sreachbox').click(function(){
const city = $('#location').val();
$('#location').val("");

let request = new XMLHttpRequest();
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]`;   /* This a sending a request to the server */

request.onreadystatechange = function() {
if (this.readyState === 4 && this.status === 200) {           /* one ready stage preparaing status to get response */
const response = JSON.parse(this.reponseText);
getElements(response);
}
};

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {          /* this part will debug the  whole program */
    debugger;
   
  }
};

request.open("GET", url, true);              /* it will get the response from the elemments */
request.send();
getElements(response);

function getElements(response) {
    $('.showdate').text(`The Date in ${city} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);

}
});
});
/* in this code the douncment call the API while sending HTTps request using XML way */
