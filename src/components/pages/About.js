import React from 'react';

export default function About() {
  return (
    <div >
      <div className="row">
        <aside className=" pl-5 col-md-3 col-sm-12">
          <img className="ml-5 mt-5 rounded-circle img-thumbnail shadow-lg" alt="100x100" src="https://i.imgur.com/UZTkY7O.jpg?1"
          />
          <p className=" pt-3">Hi my name is Danny!</p>
          <p >
            I am a junior Full Stack Developer from Austin, TX.
          </p>
          <p>
            I worked in the restaurant industry for over 14 years, from my first job delivering pizzas when i was 16, to my latest job as an assistant general manager at a destination spot in downtown Austin.
          </p>
          <p >
            I loved working in restaurants but ultimately I was not able to grow much more in that idustry. So I  decided to change careers into the tech industry and enrolled and graduated from UT-Austin's Coding Bootcamp.
          </p>
          <p >
            I grew up around computers and consider myself advanced as far as computer literacy. But the bootcamp was my first exposure to coding and I loved it. Now in my free time I find myself watching Youtube videos explaining new coding concepts or going over ones we learned during class (<a href="https://www.youtube.com/c/TraversyMedia">Traversy Media is awesome btw</a>).
          </p>
          <p >
            I'm excited for what's in store for my future. Change can be daunting but I've never been one to shy way from a challenge. I look forward to diving into this fast paced industry and developing further as a coder.
          </p>
        </aside>

        <div className="pt-5 pl-5 col-md-7 col-sm-12">
          <a href="https://www.youtube.com/watch?v=ibP9U3oGP_w"><img className="mr-4 img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/ndGnqvL.gif"
          /></a>
          <a href="https://www.youtube.com/watch?v=iCClj4koRD8"><img className=" img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/S4PWZUe.gif"
          /></a>
          <h5 className="text-center pb-3 pt-3 pr-5">I like to fly drones and make Youtube videos from the footage.</h5>
          <h5 className="pt-3 pb-3 text-center pr-5">And I also build and race my own drones.</h5>
          <a href="https://youtu.be/4jdyrTbCnbk"><img className="mr-4 img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/qF8679h.gif"
          /></a>
          <a href="https://youtu.be/xrvNDJRO-ls"><img className="mr-4 img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/H2Zy04i.gif"
          /></a>

          <h5 className="pt-5 pb-2 pr-5 text-center">I've been into gaming my whole life. This picture is from 2006 when I was in high school. Boy do I feel old.</h5>
          <img className="mx-auto mb-3 d-block w-100 img-thumbnail rounded shadow-lg" alt="100x100" src="https://i.imgur.com/eXJA9Kx.jpg"
          ></img>
        </div>

      </div>
    </div>


  );
}
