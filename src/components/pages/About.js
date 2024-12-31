import React from 'react';

export default function About() {
  return (
    <div >
      <div className="row justify-content-center">
        <aside className="col-sm-12 col-lg-10 d-flex flex-column align-items-center">
          <img className="rounded-circle img-thumbnail shadow-lg mt-5 mb-3" width="250px" alt="100x100" src="https://i.imgur.com/UZTkY7O.jpg?1"
          />
          <p className="col-sm-12 col-lg-8 text-left">
            My name is Danny and I am a junior Frontend Web Developer from Austin, TX.
          </p>
          <p className="col-sm-12 col-lg-8 text-left" >
            I enjoy technical challenges, puzzles, and people. In my free time I play video games that highlight these features (Chess, Factorio, World of Warcraft Classic) or learn new technical skills such as video editing, working on code, or practicing music.
          </p>
          <p className="col-sm-12 col-lg-8 text-left">
            During my early work career I was in the restaurant industry for 15 years. With almost every job I worked up into a management position. I really enjoy working with people and building and deploying systems. I loved working in restaurants but ultimately I was not able to grow much more in that idustry. So I  decided to change careers into the tech industry and enrolled and graduated from UT-Austin's Coding Bootcamp.
          </p>
          <p className="col-sm-12 col-lg-8 text-left">
            Since then I've been working as a Web developer at <a href="https://www.kukui.com">KUKUI</a> since 2022. I've learned a lot from this job and am always looking for new ways to grow not only as a developer but as a person.
          </p>
          <p className="col-sm-12 col-lg-8 text-left">
            I'm excited for what's in store for my future. Change can be daunting but I've never been one to shy way from a challenge.
          </p>
        </aside>

        <div className="col-lg-8 d-flex flex-row flex-wrap justify-content-center">
          <a href="https://www.youtube.com/watch?v=ibP9U3oGP_w"><img className="img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/ndGnqvL.gif"
          /></a>
          <a href="https://www.youtube.com/watch?v=iCClj4koRD8"><img className="img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/S4PWZUe.gif"
          /></a>
          <h5 className="text-center pb-3 pt-3 pr-5">I like to fly drones and make Youtube videos from the footage.</h5>
          <h5 className="pt-3 pb-3 text-center pr-5">And I also build and race my own drones.</h5>
          <a href="https://youtu.be/4jdyrTbCnbk"><img className="img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/qF8679h.gif"
          /></a>
          <a href="https://youtu.be/xrvNDJRO-ls"><img className="img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/H2Zy04i.gif"
          /></a>

          <h5 className="mt-5 mb-2 text-center">I've been into gaming my whole life. This picture is from 2006 when I was in high school. Boy do I feel old.</h5>
          <img className="mb-3 d-block w-50 img-thumbnail shadow-lg" width="1200px" alt="100x100" src="https://i.imgur.com/eXJA9Kx.jpg"
          ></img>
        </div>

      </div>
    </div>


  );
}
