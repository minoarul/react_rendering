import image from '../assets/images/hero.jpg';
import naniimage from '../assets/images/heroine.jpeg';
import murnalimage from '../assets/images/Minnal_Murali.jpg';

const Boolean = () => {

  const on = true;
  const off = false;

  const value = null;

  const movieTicketDetails = [
    { moviename: "Minnal Murali", time: "2pm to 5pm", location: "Rohini Silver Screen" },
    { moviename: "Minnal Murali", time: "1pm to 4pm", location: "PVR, Chennai" },
    { moviename: "Minnal Murali", time: "9pm to 11pm", location: "Kasi Theatre" }
  ];

  const datas = {
    moviename: "Minnal Murali",
    heroname: "Tovino Thomas",
    heroinename: "Femina George",
    year: "2021"
  };

  const para = `Hi Minna Murali was released on 29 February 2021, where it received highly positive reviews...`;

  return (
    <>
      {on ? (
        <section>
          <div className="ternary">
            <img src={image} />
          </div>
        </section>
      ) : (
        <p>The image is not available</p>
      )}

      {value ?? (
        <section>
          <div className="nullish">
            <p>{para}</p>
          </div>
        </section>
      )}

      {on && (
        <section>
          <div className="optional">
            <img src={naniimage} />
            <img src={murnalimage} />
          </div>
        </section>
      )}

      {/* Removed Inline Style → Added className="movie_box_section" */}
      <section className="movie_box_section">
        <div className="box">
          <h1>{datas.moviename}</h1>
          <p>{datas.heroname}</p>
          <h3>{datas.heroinename}</h3>
          <h5>{datas.year}</h5>
        </div>
      </section>

      <div className="ticketmain">
        {movieTicketDetails.map((e, i) => (
          <div className='ticket_details' key={i}>
            <div className='ticket_booking'>
              <h1>Movie Name: {e.moviename}</h1>
              <p>Location: {e.location}</p>
              <p>Show Time: {e.time}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Boolean;
