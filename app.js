const Api = 'https://restcountries.com/v3.1/all';

fetch(Api)
.then((data)=>{
   return data.json()
})
.then((dataJson)=>{
   console.log(dataJson)
})
.catch((err) =>{
    console.log(err)
});


const getData = async (resurse) =>{
    const request = await fetch(resurse)
    const data = await request.json()

    console.log(data)
}

getData(Api)