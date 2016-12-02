document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

        var currentTime = new Date();
        var secondDegrees = currentTime.getSeconds() * 6; //starts clock at zero in html
        var minuteDegrees = currentTime.getMinutes() * 6;
        var hourDegrees = currentTime.getHours() * 12;
        var htmlSeconds = document.getElementById('second');
        var htmlMinutes = document.getElementById('minute');
        var htmlHours = document.getElementById('hour');

        htmlSeconds.style.transform='rotate('+ secondDegrees +'deg)';
        htmlMinutes.style.transform='rotate('+ minuteDegrees +'deg)';
        htmlHours.style.transform='rotate('+ hourDegrees +'deg)';

        console.log(htmlSeconds);

        function secondHand(){
          secondDegrees += 6;
          console.log('second works', secondDegrees);
          htmlSeconds.style.transform='rotate('+secondDegrees+'deg)';
        }

        setInterval(secondHand, 1000); //sets interval for seconds

        function minuteHand(){
          minuteDegrees += 6;
          console.log('minute works', minuteDegrees);
          htmlMinutes.style.transform='rotate('+minuteDegrees+'deg)';
        }

        setInterval(minuteHand, 60000);

        function hourHand(){
          hourDegrees += 30;
          console.log('hour works', hourDegrees);
        }

        setInterval(hourHand, 3600000);

});
