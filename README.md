# Ironhack-Project3-Rent your tools-
<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
 <!-- <a href="https://github.com/DomKal11/Project2-cardspedia/">
    <img src="main/Assets/Images/Others/our_host.png" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">Rent your tools</h3>

  <p align="center">
    A platform for individuals to rent and lease tools.
    <br />
    <a href="https://github.com/DomKal11/rent-your-tool-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rentyourtools.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/DomKal11/rent-your-tool-client/issues">Report Bug</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
### Description 
 A platform designed for renting tools to users and for the possibility of lending to private individuals.

Anyone can lend their tools to another user and advertise it on the map.

Anyone can borrow the advertised tools.


<!-- WIREFRAMES -->
### Wirefrmaes 

[Landing page](https://i.ibb.co/Jm1b0t0/wireframe1.png "Landing Page")
<img src="https://i.ibb.co/Jm1b0t0/wireframe1.png">

[Tools map](https://i.ibb.co/mJTnmLt/wireframe2.png "Tools map")
<img src="https://i.ibb.co/mJTnmLt/wireframe2.png">

<!--USER STORIES-->
### User Stories

Personas:<br />
<b>Dominik:</b> Dominik owns a large number of tools. His tools often only lie in the garage and are used more on weekends. Dominik wants to borrow tools from time to time and earn something extra.<br />
Dominik is an authenticated <b>contributor</b>.
<b>Daniel:</b> Daniel wants to borrow tools, he doesn't have much. He wants to see the tools that are offered in his area.<br />
Daniel is an authenticated <b>contributor</b>. He have to be authenticated to be able to borrow the tools.<br />
<b>Tom: </b> In the attic of his grandparents' house, he found a collection of old card games that he would like to share with others. He is not a frequent player, but he would like to share the finding.
Tom is also a contributor. He will need to register to add games.<br />
<b>Jennifer:</b> Jennifer is not registered. Therefore, it can only see previews of available tools on the map.<br />
Jennifer is a <b>viewer</b>, can only see the map and tools overviews.<br />

Stories:<br />
As a viewer, I can only see the main page and tools map with tools overviews.<br />
As a contributor, I can create and rent my own tools.<br />
As a contributor, I can borrow others tools.<br />
As a contributor, I can comment and rate each advertised tool.<br />

<!--TECHNOLOGIES USED-->
### Technologies used

* [ReactJS](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/")
* [HTML 5](http://www.html5.com/)
* [CSS](https://www.w3schools.com/w3css/defaulT.asp)


<!--MODELS-->
### Models

* User - a user has a name, email, phone number. 
* Tool - a tool has a name, status, GPS location, city, price, imageURL, details, owner and rentedby (who actually renting it).
* Comment - a comment has content and an author.

All models have timsetamps to enable createdAt and updatedAt properties.


<!--SERVER ROUTES-->
### Server routes

| HTTP verb | URL                                      | Request body | Action                                 |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| POST      | `/api/comment/:id`                       | JSON         | Posting comment                        |
| DELETE    | `/api/comment/:toolId/:commentId/delete` | (empty)      | Deleting comment                       |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| GET       | `/api/user/:iserId`                      | (empty)      | Returns user data                      |
| PATCH     | `/api/user/:iserId/edit`                 | JSON         | Updating user profile                  |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| GET       | `/api/tools`                             | (empty)      | Returns all the tools                  |
| POST      | `/api/tools`                             | JSON         | Adds a new tool                        |
| GET       | `/api/tool/:toolId`                      | (empty)      | Returns the specified tool             |
| PATCH     | `/api/tool/:toolId/:status`              | JSON         | Changing status (available/rented      |
| PATCH     | `/api/:toolId/:userId/rent`              | JSON         | Changing "rentedby" to user who rented |
| PATCH     | `/api/:toolId/edit`                      | JSON         | Changing tool parameters (edit)        |
| DELETE    | `/api/:toolId/delete`                    | (empty)      | Deleting tool by id                    |

<!--Project Link-->
### Link to project
<a href="https://rentyourtools.netlify.app/">Rent your tools</a>


<!--Future Work-->

### Future Work
* Implementation of the list - not only the map
* Messenger - users will be able to message each other


<!--RESOURCES-->
### Resources
* <a href="https://www.npmjs.com/">npm</a>
* <a href="https://stackoverflow.com/">Stack Overflow</a>


<!--TEAM MEMBERS-->
### Team members
* Dominik Kaloc

<!-- ACKNOWLEDGMENTS -->
### Acknowledgments

* [Ironhack](https://www.ironhack.com/en)

<p align="right">(<a href="#top">back to top</a>)</p>

