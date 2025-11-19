const String = ()=>{
   const moviename = "Minal murali"
  const year = 2021
  const aboutmovie = "Minnal Murali (transl. Lightning Murali) is a 2021 Indian Malayalam-language superhero film directed by Basil Joseph and produced by Sophia Paul, under the banner of Weekend Blockbusters. The screenplay is written by Arun Anirudhan and Justin Mathew. The film stars Tovino Thomas and Guru Somasundaram. The story follows the life of Jaison, a young tailor who gains superpowers after being struck by lightning, and transforms into a superhero."
   const movieabout = "The film was formally announced in January 2019, but due to the extensive pre-production works, the film's principal photography took place during December 2019. Though shooting got disrupted twice following the two waves of the COVID-19 pandemic the makers managed to complete the shoot within July 2021. The film was predominantly shot in Kerala, with few sequences being shot at Hassan in Karnataka. The film score was composed by Sushin Shyam while the songs featured in the film were composed by Shaan Rahman and Sushin Shyam. The cinematography was by Sameer Thahir and Livingston Mathew served as the editor."
  return(
    <>
    <div className="movie">
        <div className="aboutmovie">
         <h1>{moviename} {year}</h1>
         <p>{aboutmovie}</p>
        </div>
    </div>

    <div className="movie"> 
        <div className="aboutmovie">
            <h1>{moviename} {year}</h1>
            <p>{movieabout}</p>

        </div>
    </div>
    </>
  )
}

export default String