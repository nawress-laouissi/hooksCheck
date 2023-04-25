import React from 'react'
import MovieCard from './MovieCard'
import { Button } from 'react-bootstrap'
import Filter from './Filter'


function MovieList() {
   
    const movies=[
        {
            title:"the menu",
             description:"A couple (Anya Taylor-Joy and Nicholas Hoult) travels to a coastal island to eat at an exclusive restaurant where the chef (Ralph Fiennes) has prepared a lavish menu, with some shocking surprises.",
             posterURL:"https://bigcomicpage.files.wordpress.com/2023/01/menu.jpg",
            rating: 4
        },
        {
            title:"the unforgivable",
             description:"Released from prison after serving a sentence for a violent crime, Ruth Slater (Bullock) re-enters a society that refuses to forgive her past. Facing severe judgment from the place she once called home, her only hope for redemption is finding the estranged younger sister she was forced to leave behind.",
             posterURL:"https://m.media-amazon.com/images/M/MV5BM2M5MTJmOTEtNWU1Yy00NDNmLWI3MjMtNzFkN2FiZjE5Njg3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
            rating: 4
        },
        {
            title:"the girl in the basement",
             description:"Girl in the Basement tells the horrifying true story of a young girl named Sara who gets imprisoned by her father, Don, in their family basement. Don invents a story for his wife Irene about Sara running away but, in reality, he has been holding her captive, torturing and raping her underground.",
             posterURL:"https://m.media-amazon.com/images/M/MV5BMTdkYWE4ZGQtOGZkMy00ZTg1LWE5ODEtZWRlMjQ3NWQ2N2I2XkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_.jpg",
            rating:4
        },
        {
            title:"the Joker", 
            description:"Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the prosperous in a decaying Gotham City. Robert De Niro, Zazie Beetz and Frances Conroy appear in supporting roles.",
             posterURL:"https://upload.wikimedia.org/wikipedia/fr/8/87/Joker_%28film%2C_2019%29_Logo.png",
            rating:5
        },
    ]
    
    
    
  return (
    <div style={{ textAlign:"center"}}>
         
        <h1> Movie Card</h1>
        <Filter moies={movies}/>
        {
     movies.map(movie=> 
        <MovieCard movie={movie}/>
     )}
     <br/>
     <Button variant ='primary' > add  new movies</Button>
    
    
     </div>
  )
}

export default MovieList