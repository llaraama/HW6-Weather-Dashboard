var date=moment().format('L');
 
$(document).ready(function(){

    $("button").on('click', function(){
        console.log("Clicked");
    })

var cities=[];

var weatherDays=["1","2","3","4","5"];



function searchCity(city){

    var APIKey="3341ac9d2dd138ac14d34cba050bc29f";
    // var cityName=prompt("choose a city");

    // 

    // var cityName="Atlanta";

    var queryURL="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+APIKey


    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(queryURL);
        // console.log(response);
        console.log(response);

        $('h4').text("5-Day Forecast");


        $(".city").html("<h3>"+response.city.name+"  "+date+"  ");

        var IconMain=response.list[0].weather[0].main;

        $(".date").text(
        response.list[0].dt_txt);

        var tempF=(response.list[0].main.temp -273.15)*1.80+32;

        $(".tempreature").text("Tempreature: "+tempF.toFixed(2)+"°F");

        $(".humidity").text("Humidity: "+response.list[0].main.humidity+"%");

        $(".wind").text("Wind Speed: "+response.list[0].wind.speed+" MPH")

        $(".uv").text("UV Index: "  )

        // $("weather").html("<img>"+response.list[0].weather[0].icon);

        $(".1").html("<div class='float-child1'>"+ response.list[2].dt_txt+"<br>"+"<h7>"+ response.list[2].weather[0].main+"<br>"+"<div>"+"temp: "+tempF.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[2].main.humidity+"%" );

        var iconone=response.list[2].weather[0].main;
        
       

        $(".2").html("<div class='float-child2'>"+ response.list[10].dt_txt+"<br>"+"<h7>"+ response.list[10].weather[0].main+"<br>"+"<div>"+"temp: "+tempF.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[10].main.humidity+"%" );

        var icontwo=response.list[10].weather[0].main;



        $(".3").html("<div class='float-child3'>"+ response.list[18].dt_txt+"<br>"+"<h7>"+ response.list[18].weather[0].main+"<br>"+"<div>"+"temp: "+tempF.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[18].main.humidity+"%" );

        var iconthree=response.list[18].weather[0].main;

        $(".4").html("<div class='float-child4'>"+ response.list[26].dt_txt+"<br>"+"<h7>"+ response.list[26].weather[0].main+"<br>"+"<div>"+"temp: "+tempF.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[26].main.humidity+"%" );

        var iconfour=response.list[26].weather[0].main;


        $(".5").html("<div class='float-child5'>"+ response.list[34].dt_txt+"<br>"+"<h7>"+ response.list[34].weather[0].main+"<br>"+"<div>"+"temp: "+tempF.toFixed(2)+"°F"+"<br>"+"Humidity: "+response.list[34].main.humidity+"%" );

        var iconfive=response.list[34].weather[0].main;


        if (IconMain==="Rain"){
            $("h3").append($("<img>",{id:"rain",src:"Assets/rain.jpg", width:"50",height:"50"}))
            
        }else if (IconMain==="Clear"){
            $("h3").append($("<img>",{id:"rain",src:"Assets/sunny.png", width:"50",height:"50"}))
        }else if (IconMain==="Clouds"){
            $("h3").append($("<img>",{id:"rain",src:"Assets/cloud.jpg", width:"50",height:"50"}))
        }


        if (iconone==="Rain"){
            $(".float-child1").append($("<img>",{id:"rain",src:"Assets/rain.jpg", width:"50",height:"50"}))
            
        }else if (iconone==="Clear"){
            $(".float-child1").append($("<img>",{id:"rain",src:"Assets/sunny.png", width:"50",height:"50"}))
        }else if (iconone==="Clouds"){
            $(".float-child1").append($("<img>",{id:"rain",src:"Assets/cloud.jpg", width:"50",height:"50"}))
        }




        
        if (icontwo==="Rain"){
            $(".float-child2").append($("<img>",{id:"rain",src:"Assets/rain.jpg", width:"50",height:"50"}))
            
        }else if (icontwo==="Clear"){
            $(".float-child2").append($("<img>",{id:"rain",src:"Assets/sunny.png", width:"50",height:"50"}))
        }else if (icontwo==="Clouds"){
            $(".float-child2").append($("<img>",{id:"rain",src:"Assets/cloud.jpg", width:"50",height:"50"}))
        }




        if (iconthree==="Rain"){
            $(".float-child3").append($("<img>",{id:"rain",src:"Assets/rain.jpg", width:"50",height:"50"}))
            
        }else if (iconthree==="Clear"){
            $(".float-child3").append($("<img>",{id:"rain",src:"Assets/sunny.png", width:"50",height:"50"}))
        }else if (iconthree==="Clouds"){
            $(".float-child3").append($("<img>",{id:"rain",src:"Assets/cloud.jpg", width:"50",height:"50"}))
        }




        if (iconfour==="Rain"){
            $(".float-child4").append($("<img>",{id:"rain",src:"Assets/rain.jpg", width:"50",height:"50"}))
            
        }else if (iconfour==="Clear"){
            $(".float-child4").append($("<img>",{id:"rain",src:"Assets/sunny.png", width:"50",height:"50"}))
        }else if (iconfour==="Clouds"){
            $(".float-child4").append($("<img>",{id:"rain",src:"Assets/cloud.jpg", width:"50",height:"50"}))
        }




        if (iconfive==="Rain"){
            $(".float-child5").append($("<img>",{id:"rain",src:"Assets/rain.jpg", width:"50",height:"50"}))
            
        }else if (iconfive==="Clear"){
            $(".float-child5").append($("<img>",{id:"rain",src:"Assets/sunny.png", width:"50",height:"50"}))
        }else if (iconfive==="Clouds"){
            $(".float-child5").append($("<img>",{id:"rain",src:"Assets/cloud.jpg", width:"50",height:"50"}))
        }
 







    });
}
// creates the button after the city was searched
function fiveDay(){
    $("#weather").empty();
    for(var i=0;i<weatherDays.length; i++){
        var b=$("<div>");
        b.addClass(weatherDays[i]);
        b.attr("data-names",weatherDays[i]);
        $("#weather").append(b);
    }
}





function renderButtons(){
    $("#cityList").empty();
    for(var i=0;i<cities.length;i++){
        var a =$("<button>");
        a.addClass("city-btn");
        a.attr("data-name",cities[i]);
        a.text(cities[i]);
        $("#cityList").append(a);
       
    }
}

// try to add an event listener to the button created 
// $(".city-btn").on("click", function(event){
//     event.preventDefault();
//     var inputCityButton=$(".city-btn").val().trim();
//     searchCity(inputCityButton);
//     cities.push(inputCityButton);
//     renderButtons();
    

// })

// search city prompts info to pop up on the screen 
$("#select-city").on("click",function(event){
    event.preventDefault();
    var inputCity= $("#city-input").val().trim();
    searchCity(inputCity);
    cities.push(inputCity);
    renderButtons();
    fiveDay();
});




$("#cityList").on("click",'button',function(event){ 
    console.log(event.target)
    console.log("clicky working")
    let searchCityName=$(this).text();
    console.log(searchCity);
    searchCity(searchCityName);

    // searchCity(newButton);


});

// $(document).on("click",".city-btn",searchCity);


renderButtons();
fiveDay();
})