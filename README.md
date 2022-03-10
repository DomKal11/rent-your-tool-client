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

[Landing page](/public/images/wireframes/Wireframe_Landing.png?raw=true "Landing Page")

[Signup and Login](/public/images/wireframes/Wireframe_SignupLogin.png?raw=true "Signup and Login")

[Game Library](/public/images/wireframes/Wireframe_GameLibrary.png?raw=true "Game Library")

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
As a viewer, I want to understand what the site is for when I first land on it so I know what I can find there<br />
As a viewer, I want to see what games are on the site so I can look at their rules and play them myself offline <br />
As a viewer, I want to create an account so I can become a contributor and vote and comment on games etc<br />
As a contributor, I can create, read, update and delete games<br />
As a contributor, I can vote and comment on games<br />
As a contributor, I can manage my user profile including seeing the games I have created<br />
As an administrator, I can collaborate on the creation, modification, deployment general administration of the site<br />
As an administrator, I can delete user accounts so I can deal with spammers etc<br />
As a contributor, I can save games to my favourites so I can find them on my user profile page later<br />
As a contributor, I can only edit/delete my own games, but I can comment on others<br />
As a Viewer I can get a random game suggested to me so I can try it out offline<br />
As a Viewer I can see which games are ranked the highest by number of votes <br />


<!--TECHNOLOGIES USED-->
### Technologies used

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/")
* [HTML 5](http://www.html5.com/)
* [CSS](https://www.w3schools.com/w3css/defaulT.asp)


<!--MODELS-->
### Models

* User - a user has a name, encrypted password, birthdate, about/description, picture and a list of favourites and created games. A user also has an admin flag.
* Game - a game has a name, minimum number of players, number of card decks required, instructions on how to play, rules, user id of who created it and any comment ids for comments made about it
* Comment - a comment has content and an author

All models have timsetamps to enable createdAt and updatedAt properties


<!--SERVER ROUTES-->
### Server routes

| Method | Route                              | Description                                                                                   |
|--------|------------------------------------|-----------------------------------------------------------------------------------------------|
| GET    | /userProfile                       | renders the user profile page                                                                 |
| GET    | /changeUserPic                     | renders the user profile page after addition of a picture                                     |
| POST   | /changeUserPic/:Id                 | Posts a user picture to the user record in the DB                                             |
| GET    | /users/:page                       | Fetches the list of users for admins and paginates                                            |
| GET    | /user/:id/edit                     | renders the user edit page                                                                    |
| POST   | /user/:id/edit                     | posts the edit to the user record                                                             |
| POST   | /user/:id/delete                   | deletes a user from the DB                                                                    |
| POST   | /logout                            | Logs the user out and destroys the session                                                    |
| GET    | /signup                            | renders the create user page                                                                  |
| POST   | /signup                            | creates the user in the DB (password is encrypted)                                            |
| GET    | /login                             | renders the login page                                                                        |
| POST   | /login                             | checks the password and if correct logs user in                                               |
| GET    | /                                  | renders the index                                                                             |
| GET    | /create-game                       | renders the create-game page                                                                  |
| POST   | /create-game                       | creates the record for the game in the DB                                                     |
| GET    | /game-details/:gameId              | loads the game details page for a given game                                                  |
| GET    | /update-game/:gameId               | renders the edit game page                                                                    |
| POST   | /update-game/:gameId               | records the game edit in the DB                                                               |
| POST   | /delete-game/:gameId               | deletes the game from the DB                                                                  |
| GET    | /game-library                      | renders the game library page                                                                 |
| GET    | /game-library/:id/my-games         | renders the game library with just the users' created games                                   |
| GET    | /game/:gameId/vote                 | increments the vote count on a game by one                                                    |
| GET    | /game/:gameId/add-to-favourites    | Adds the game to the users favourites                                                         |
| GET    | /random-game                       | Selects a random game from the DB and renders its game details page                           |
| GET    | /ranked-by-votes                   | Gets the list of games sorted by number of votes descending and renders the game library page |
| POST   | /comment/:gameId/add               | Adds a comment to the game                                                                    |
| GET    | /comment/:gameId/:commentId/delete | Deletes a comment from a game                                                                 |


<!--Project Link-->
### Link to project
<a href="https://cardspedia.herokuapp.com/">Cardspedia</a>


<!--Future Work-->

### Future Work
* Search bar functionality to search for games


<!--RESOURCES-->
### Resources
* <a href="https://www.npmjs.com/">npm</a>
* <a href="https://stackoverflow.com/">Stack Overflow</a>


<!--TEAM MEMBERS-->
### Team members
* Dominik Kaloc
* Chris Fagg



<!-- ACKNOWLEDGMENTS -->
### Acknowledgments

* [Ironhack](https://www.ironhack.com/en)

<p align="right">(<a href="#top">back to top</a>)</p>

