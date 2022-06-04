import React from 'react';

export default function Projects() {
  return (

    <div className="container">
      <a target="_blank" href="https://glacial-shelf-75917.herokuapp.com/">
        <img src="https://i.imgur.com/V6Dupry.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
      </a>
      <h4 className="text-center mt-2">Project Quacker:</h4>
      <h5 className="text-center">In this project we had 4 days to come up with the idea, wireframe it, design the database, develop, bug test, and deploy.</h5>
      <h5 className="text-center">We used MySQL and restful API routes, Nodejs and Express to run the server, Session to handle the cookies, Handlebars to populate the front end content and Materialize to style it. </h5>
      <br></br>
      <a target="_blank" href="https://cycoconutz.github.io/Project-1/">
        <img src="https://i.imgur.com/rCoY46S.png" class="mt-5 d-block img-thumbnail mx-auto" alt="..." />
      </a>
      <h4 className="text-center mt-2">Sunday Funday:</h4>
      <h5 className="text-center">This was my first experience in a group project setting. The objective was to create a website that utilized 2 different API databases and deploy it in 5 days.</h5>
      <h5 className="text-center">Since this was developed earlier in my curriculum, the design was much simpler. We used HTML/CSS/JS for everything, and utilized user input filters for fetch calls to the database</h5>
      <br></br>
    </div>
  );
}
