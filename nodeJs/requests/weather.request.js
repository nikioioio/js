const rp = require('request-promise');



module.exports = async function  (city = '') {
    if (!city){
        throw new Error('Название города не может быть пустым')
    }

    //'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

    const KEY = 'daf053aa08ceb0317f3f5ce95b53647f'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'


    const options = {
        uri: uri,
        qs: {
            q: city,
            appid: KEY,
            units: 'imperial'
        },
        json: true
    }


    try{
        const response = await rp(options);
        const celsius = (response.main.temp - 32) * 5/9;


        return {
            weather: response.name+', '+ celsius.toFixed(0),
            error: null
        }
    }catch (error){
        return {
            weather: null,
            error: error.error.message
        }
    }


}