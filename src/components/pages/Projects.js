import React from 'react';

export default function Projects() {
  return (

    <div className="container">

      <div className="row">
        <div className="col-12">
          <h4 className="text-center mt-5 font-weight-bold">Project Karmatic:</h4>
          <br></br>
          <h5 className="text-left">My favorite project by far. We had 1 week to conceptualize, build and deploy this; and it was the most complex task I had undertaken up to this point. We used React and styled components to structure and build a single page app, while using hooks to display any updates in real time without page refreshes. I started the project working on the front end with one other teammate. We had to plan, communicate and work cohesively so that there wasn't any retroactive changes. I couldn't be more proud of how well we accomplished this task.</h5>
          <br></br>
          <h5 className="text-left">After a couple of days the front end was developed enough that I could move on to working on queries and mutations to the database. We used GraphQL and while we did go over it in class, there was a TON of learning on the fly. Hooks and state were another big hurdle we discovered after we got the front and back end talking to eachother. One I wish we had known about before we got as far as we did. But myself and two of the backend devs tackled it as a team. Our dispersment of tasks and communication day to day is something I can truely say was the reason for our success on this project.</h5>
          <h5 className="text-left">I can proudly claim this as my capstone project.</h5>
        </div>
        <div className="col-12">
          <a target="_blank" href="https://serene-tor-70368.herokuapp.com/">
            <img src="https://i.imgur.com/OBPLIgn.png" class="mt-5 d-block w-100 mx-auto" alt="..." />
          </a>
          <br></br>
        </div>
        <div className="col-12 col-sm">
          <h4 className="text-center mt-5 font-weight-bold">Project Quacker:</h4>
          <br></br>
          <h5 className="text-left">In this project we had 4 days to come up with the idea, wireframe it, design the database, develop, bug test, and deploy. We used MySQL and restful API routes, Nodejs and Express to run the server, Session to handle the cookies, Handlebars to populate the front end content and Materialize to style it. </h5>
          <br></br>
          <h5 className="text-left">This was my second group project and, while we got a working product by the end, I learned a LOT about cohesively working as a team. I learned a lot on the subject of Git merge issues to say the least.</h5>
        </div>
        <div className="col-sm-6 col-12">
          <a target="_blank" href="https://glacial-shelf-75917.herokuapp.com/">
            <img src="https://i.imgur.com/V6Dupry.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
          </a>
          <br></br>
        </div>
        <div className="col-12 col-sm">
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm">
          <h4 className="text-center mt-5 font-weight-bold">Sunday Funday:</h4>
          <br></br>
          <h5 className="text-left">This was my first experience in a group project setting. The objective was to create a website that utilized 2 different API databases and deploy it in 5 days.</h5>
          <br></br>
          <h5 className="text-left">Since this was developed earlier in my curriculum, the design was much simpler. We used HTML/CSS/JS for everything, and utilized user input filters for fetch calls to the database</h5>
        </div>
        <div className="col-sm-6 col-12 mt-5">
          <a target="_blank" href="https://cycoconutz.github.io/Project-1/">
            <img src="https://i.imgur.com/Nrgf6i5.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
          </a>
        </div>
        <div className="col-12 col-sm">
        </div>
        <br></br>
      </div>
      <div className="row">
        <div className="col-12 col-sm">
          <h4 className="text-center mt-5 font-weight-bold">Tech Blog:</h4>
          <br></br>
          <h5 className="text-left">For this project I used MySQL as the database and deployed with Heroku. That was a lot harder than I just made it sound but with a lot of Google-Fu I managed to get it deployed and working. The front end was more of a second thought for this project so I just used some really basic Bootstrap cards. My primary focus was on database functionality and getting the front and backend working harmoniously.</h5>
          <br></br>
          <h5 className="text-left">I'm incredibly proud of this one, there were hours poured into deploying over and over and chasing bugs. Success feels the best when you feel like you really worked for it.</h5>
        </div>
        <div className="col-sm-6 col-12 mt-5">
          <a target="_blank" href="https://obscure-brook-04302.herokuapp.com/">
            <img src="https://i.imgur.com/jlaSNiS.png" class="mt-5 d-block img-thumbnail h-75 mx-auto" alt="..." />
          </a>
        </div>
        <div className="col-12 col-sm">
        </div>
        <br></br>
      </div>
      <div className="row">
        <div className="col-12 col-sm">
          <h4 className="text-center mt-5 font-weight-bold">Note Taker:</h4>
          <br></br>
          <h5 className="text-left">One of my earlier projects but still something I'm proud of. For this I learned to accomplish using local storage for saving any data put into the forms. One of the projects I worked on not long after that taught me to use manifest.json to download apps. I that will be a good next step for further development on this project.</h5>
          <br></br>
        </div>
        <div className="col-sm-6 col-12 mt-5">
          <a target="_blank" href="https://dannys-note-taker.herokuapp.com/notes">
            <img src="https://i.imgur.com/CG5Ylre.png" class="mt-5 d-block img-thumbnail h-75 mx-auto" alt="..." />
          </a>
        </div>
        <div className="col-12 col-sm">
        </div>
        <br></br>
      </div>
    </div>

  );
}
