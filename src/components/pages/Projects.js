import React from 'react';

export default function Projects() {
  return (

    <div className="container">

      <div className="row">
        <div className="col-12">
          <h4 className="text-center mt-5 font-weight-bold">Project Karmatic:</h4>
          <br></br>
          <h5 className="text-left">My proudest project by far. We had one week to conceptualize, build, test, and deploy this; and it was the most complex task I had undertaken up to this point. My team and I decided to use React and learned how to implement styled components on the fly to structure an organized filse system and build a single page app with reusable components. This page uses hooks to display any DB updates in real time without page refreshes. My initial role in this project was focused on building out the front end with one other teammate. We had to plan, communicate and work cohesively so that there wasn't any retroactive changes, we pretty much had to share a brain. I couldn't be more proud of how well we accomplished this task.</h5>
          <br></br>
          <h5 className="text-left">After a couple of days the front end was developed enough so that I could change hats and move to to working on queries and mutations from the database to render on the page. We used GraphQL, a backend system that we had learned only the week before. Hooks and state were another big hurdle we discovered after we got the front and back end talking to eachother. One I wish we had known about before we got as far as we did. But myself and two of the backend devs put our heads together and tackled it as a team. Our dispersment of tasks and communication day to day is something I can truely say was the reason for our success on this project.</h5>
          <h5 className="text-left">I couldn't be more proud of the team I worked with and the finished product.</h5>
        </div>
        <div className="col-12">
          <a target="_blank" href="https://karmatic-66b6b5d33dca.herokuapp.com/">
            <img src="https://i.imgur.com/OBPLIgn.png" class="mt-5 d-block w-100 mx-auto" alt="..." />
          </a>
          <br></br>
        </div>
        <div className="col-12">
          <h4 className="text-center mt-5 font-weight-bold">Project Quacker:</h4>
          <br></br>
          <h5 className="text-left">In this project we had 4 days to come up with the idea, wireframe it, design the database, develop, bug test, and deploy. This was definitely a time crunched product. We used MySQL and restful API routes, Nodejs and Express to run the server, Session to handle the user login cookies, Handlebars to populate the front end content and Materialize to style it. </h5>
          <br></br>
          <h5 className="text-left">This was my second group project and, while we got a working product by the end, my main takeaway lesson was how to work within a team in a productive way. I learned a lot on the subject of Git merge issues to say the least, and proper communication habits for working with an agile methodolgy.</h5>
        </div>
        <div className="col-12">
          <a target="_blank" href="https://glacial-shelf-75917.herokuapp.com/">
            <img src="https://i.imgur.com/V6Dupry.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
          </a>
          <br></br>
        </div>
        <div className="col-12">
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="text-center mt-5 font-weight-bold">Sunday Funday:</h4>
          <br></br>
          <h5 className="text-left">This was my first experience in a group project setting. The objective was to create a website that utilized 2 different Web API's and deploy it in 5 days.</h5>
          <br></br>
          <h5 className="text-left">Since this was developed earlier in my curriculum, the design was much simpler. We used HTML/CSS/JS for everything, and utilized user input filters for fetch calls to the database and then dynamically render the payload onto the page.</h5>
        </div>
        <div className="col-12 mt-5">
          <a target="_blank" href="https://cycoconutz.github.io/Project-1/">
            <img src="https://i.imgur.com/Nrgf6i5.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
          </a>
        </div>
        <div className="col-12 col-sm">
        </div>
        <br></br>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="text-center mt-5 font-weight-bold">Tech Blog:</h4>
          <br></br>
          <h5 className="text-left">This was a personal project where I used MySQL as the database and deployed it with Heroku. That may sound easy, but as it turns out it was a lot harder than I just made it sound. Bbut with a lot of Google-Fu and trial and error I managed to get it deployed and working. The front end was more of a second thought for this project so I just used some really basic Bootstrap cards. My primary focus was on database functionality and getting the front and backend working harmoniously.</h5>
          <br></br>
          <h5 className="text-left">I'm incredibly proud of this one, there were hours poured into deploying over and over and chasing bugs. Success feels the best when you feel like you really worked for it.</h5>
        </div>
        <div className="col-12">
          <a target="_blank" href="https://obscure-brook-04302.herokuapp.com/">
            <img src="https://i.imgur.com/jlaSNiS.png" class="mt-5 d-block img-thumbnail h-75 mx-auto" alt="..." />
          </a>
        </div>
        <div className="col-12 col-sm">
        </div>
        <br></br>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="text-center mt-5 font-weight-bold">Note Taker:</h4>
          <br></br>
          <h5 className="text-left">For this project the goal was to make a web app that uses local storage. With that goal I successfully accomplished using local storage where it saves any data put into the forms and retreives it upon page load if there is any. One of the projects I worked on not long after that taught me to use manifest.json to download apps, which will be a good next step for further development on this project.</h5>
          <br></br>
        </div>
        <div className="col-12">
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
