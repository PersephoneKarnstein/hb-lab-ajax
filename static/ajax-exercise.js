"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  $.get("/fortune", (results) => {
    const fortune = results;

    $("#fortune-text").html(fortune);

  })
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (response) => { 
      const forecastStr = response.forecast;
      console.dir(response)
      $("#zipcode-field").val(forecastStr);
    });
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let url = "/order-melons.json";

    const formInputs = {
      'melon_type': $('#melon-type-field').val(),
      'qty': $('#qty-field').val()
    };

    $.post(url, formInputs, (response) => {
      const melonCode = response.code;
      const melonMsg = response.msg;

      $("#order-status").text(melonMsg);
      if (melonCode === "ERROR"){
        $("#order-status").addClass("order-error")
      }
      else{
        $("#order-status").removeAttr("style");
      }
    })

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


