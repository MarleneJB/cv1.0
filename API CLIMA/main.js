$(document).ready(function() {
    const apiKey = "875a98efb56a2c503eba08b125b64670"; // Reemplaza "TU_API_KEY_DE_OPENWEATHERMAP_AQUI" con tu propia API key de OpenWeatherMap

    // Escuchar el evento 'click' en el botón de obtener clima
    $("#get-weather-btn").on("click", function() {
      // Obtener el valor del input de la ciudad
        let cityValue = $("#city").val();

      // Hacer una solicitud a la API del clima
        $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        method: "GET",
        dataType: "json",
        data: {
            q: cityValue,
            lang: "es",
            units: "metric",
            appid: apiKey
        },
        success: function(data) {
          // Actualizar la información del clima en la página
            $("#city-name").text(data.name);
            $("#city-name-small").text(data.name);
            $("#temperature").text(data.main.temp);
            $("#description").text(data.weather[0].description);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // Mostrar un mensaje de error si la solicitud falla
            alert("Hubo un error al obtener la información del clima.");
        }
        });
    });

    // Obtener elementos del DOM
        let cityInput = $("#city");
        let cityName = $("#city-name");
        let cityNameSmall = $("#city-name-small");
        let temperature = $("#temperature");
        let description = $("#description");

        // Inicializar la API de Google Places Autocomplete en el input de la ciudad
        let autocomplete = new google.maps.places.Autocomplete(cityInput[0], {
        types: ["(cities)"],
        language: "es",
        componentRestrictions: { country: "mx" } // Solo sugerencias de ciudades en México
        });

        // Escuchar el evento 'place_changed' en el input de la ciudad
        autocomplete.addListener("place_changed", function() {
            // Obtener los detalles del lugar seleccionado
            let place = autocomplete.getPlace();
            // Verificar que el lugar seleccionado es una ciudad
            if (place && place.types.includes("locality")) {
              // Obtener el nombre de la ciudad
            let selectedCity = place.name;
              // Hacer una solicitud a la API del clima
                $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather",
                method: "GET",
                dataType: "json",
                data: {
                    q: selectedCity,
                    lang: "es",
                    units: "metric",
                    appid: apiKey
                },
                success: function(data) {
                  // Actualizar la información del clima en la página
                    cityName.text(data.name);
                    cityNameSmall.text(data.name);
                    temperature.text(data.main.temp);
                    description.text(data.weather[0].description);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  // Mostrar un mensaje de error si la solicitud falla
                    alert("Hubo un error al obtener la información del clima.");
                }
                });
            } else {
              // Si el lugar seleccionado no es una ciudad, mostrar un mensaje de error
                alert("Por favor selecciona una ciudad válida.");
            }
            });

});
