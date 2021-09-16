// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// declare a variable to hold API key
const apiKey = '7e64cd4d64ef806b95e717426af1a409';
// declare a variable representing button with the id '#generate
const generate  = document.getElementById('generate');
// add an event listener to the generate button 
generate.addEventListener('click',async () => {
 // define  a variable representing the input element with id #zip
 const zip = document.getElementById('zip').value;
 // define the full API URL endpoint
 const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=metric`;
 // define a variable representing the feeling
 const feelings = document.getElementById('feelings').value;
 //call the getData function
 getData(apiURL)
 .then(data => {
    return postData('/', {'date' : d,'temp' : data.main.temp,feelings : feelings});
 })
 .then(() => {
     return updateUI('/getData');
 })
 .then(data => {
     return data.json();
 })
 .then(data => {
     document.getElementById('date').innerHTML = `Date:${data.date}`;
     document.getElementById('temp').innerHTML = `Temperature:${data.temp}`;
     document.getElementById('content').innerHTML = `I feel:${data.feelings}`;
 })
.catch(error => console.log(error));
}
)
//define getData function 
const getData = async(url = '') => {
    const response = await fetch(url)
    try{
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}
//define postData function 
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    try{
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}
// define updateUI function 
const updateUI = async(url = '') => {
  const response = await fetch(url);
  try {
      return response;
  }
  catch(error) {
      console.log(error);
  }
}