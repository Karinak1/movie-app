const APILink='https://imdb-api.com/en/API/Top250Movies/k_2xdhmd0f'
getData=()=>{
fetch(APILink)
.then((res)=>res.json())
.then((data)=> {
  const rawData = data.items;
  console.log(rawData);
});
};
getData();
