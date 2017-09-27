console.log('hello, im me');

$(document).ready(function(){
  console.log('ready');
  //eventually, this should be triggered by search button click
  requestWeatherData('Austin');
});


function requestWeatherData(myCity){


    data.preventDefault();


console.log('requesting data');

};

$function(){

  $('.btn-primary').click(function(data){

  $('.btn-primary').on('click', function(){
    var userInput = $('.gif-input').val();
    searches(userInput);
    
});

$.ajax({

  method: "GET",
  url: 'http://api.openweathermap.org/data/2.5/weather',
  data: 'q=Austin&APPID=65e71a9cea57e9e06596c00077b76c8d',
  dataType: 'json',
  success: onSuccess,
  error: onError


});


function onSuccess(data){
  data.main.forEach(function data(element))

  });

  console.log('request successful');
  console.log(data.main);
}
function onError(){
  console.log('oops, broke');
}
