const APILink='https://imdb-api.com/en/API/Top250Movies/k_2xdhmd0f'
let reData 
// GET ALL DATA
getData=()=>{
fetch(APILink)
.then((res)=>res.json())
.then((data)=> {
  reData= refactorData( data.items);
  // console.log(reData);
   movieCard(reData);
  // const rawData = data.items;
  // console.log(rawData);
});
};
// getData();

// REFACTOR DATA
refactorData =(movies)=>{
  let movieDAta=[]
  
  movies.map((m) => {
    movieDAta.push(
      {
        id: m.id,
        title: m.title,
        year: m.year,
        rank: m.rank,
        image: m.image,
        imDbRating: m.imDbRating,
        likes: 0,
        comments:'',
      });
  });
  return movieDAta;
  // console.log('newMovies', movieDAta);
};
// getData();

// CREATE REUSABLE MOVIE CARD
movieCard=(reFacMovies)=>{
  let movieCard = '';

  reFacMovies.map((m)=>{
    movieCard +=`<div class="movieCard">
<img src="${m.image}" alt="${m.title}" />
<div class="movieCardDetails">
  <h2>${m.title}</h2>
  <p>"${m.year}</p>
  <p>IMDB Rating: <span>"${m.imDbRating}</span></p>
  
  <div class="movieCardSocial">
    <a href="#" onClick= "addLike ('${m.id}')"><i class="fas fa-heart ${
      m.likes ? 'likeIcon' : '' } "></i></a>
    <a href="https://imdb.com/title/${m.id}" target='blank'><i class="fas fa-share-alt"></i></a>
    <a href="#"><i class="fas fa-comment"></i></a>
  </div>
</div>
</div>`;

  });
  // console.log('movieCard', movieCard);
document.querySelector('body').innerHTML= movieCard;
};

// ADD LIKES

addLike=(movieId)=>{
  console.log(movieId);
reData.map((m)=>{
  if(m.id===movieId){
// m.likes =100
m.likes ++
  }
return m;
})
movieCard(reData);

reData.sort((a,b)=> parseFloat(b.likes)-parseFloat(a.likes));
// console.log(reData);
};


getData();