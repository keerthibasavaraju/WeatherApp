let a= document.getElementById('a')
let b=document.getElementById('b')
let c= document.getElementById('c')
let d=document.getElementById('d')

let search =async ()=>
{
    // to fetch value from document
    // console.log(a.value);
    let city = a.value
    if(city=="")
    {
        alert("please enter a city name")
    }
    else
    {
        
         let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        
         let response =await fetch(url)
         console.log(response);
         let info= await response.json()
         d.textContent=info.main.temp + "°C" ;
         b.textContent=info.name
         c.textContent=info.sys.country
         
        
    }
    

}