const url="https://geocoding-api.open-meteo.com/v1/search?name=Sia &count=5&language=en&format=json";
let loc=document.querySelector("#get-location");
let btn=document.querySelector("button");

async function get(){
  promise = await fetch(url);
  data = await promise.json();
  // arr=data.results;
  console.log(data);
  // for(let i of arr){
  //   console.log(i);
  //   console.log()
  // }
}

btn.addEventListener("click", () => {
  console.log(loc.value);
});

get();
loc.addEventListener("input",()=>{
  console.log(loc.value);

})









































































// function loc(a,b){
//     console.log(a,b);
// }
// function get(){
//       navigator.geolocation.getCurrentPosition((pos) => {
//     // getWeather(pos.coords.latitude, pos.coords.longitude);
//     console.log(pos);
  
//   loc(pos.coords.latitude, pos.coords.longitude);
//   });
    
// }

