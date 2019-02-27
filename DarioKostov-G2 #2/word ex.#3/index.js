function convertFahrenheit( c ){
    var f = c * 9/5 + 32;
    console.log(f);
}
convertFahrenheit( 37 );
convertFahrenheit( 100 );


function convertCelsius(f){
    var c = (f - 32) * (5 / 9);
    console.log(c);
}
convertCelsius(140);
convertCelsius(98);