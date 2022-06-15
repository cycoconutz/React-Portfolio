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
          <h5 className="text-left">In this project we had 4 days to come up with the idea, wireframe it, design the database, develop, bug test, and deploy.</h5>
          <br></br>
          <h5 className="text-left">We used MySQL and restful API routes, Nodejs and Express to run the server, Session to handle the cookies, Handlebars to populate the front end content and Materialize to style it. </h5>
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
        <div className="col-sm-6 col-12">
          <a target="_blank" href="https://cycoconutz.github.io/Project-1/">
            <img src="https://i.imgur.com/Nrgf6i5.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
          </a>
        </div>
        <div className="col-12 col-sm">
        </div>
        <br></br>
      </div>
    </div>

  );
}
