# IF-Computing, Making a Scenario.

##Content
1. Basic Information of Project
2. Basic Structure
3. Structure of Communication
4. Detail Information of Project
5. Dependencies and Requirements for Further Development
6. Extra

##Basic Information
IF-Computing is about actions/choices that affect our surroundings and environment (scenario).

Using MEAN Stack for "IF-Computing". A game-like app that creates rounds of questions that affects a set of stats or tokens. The user will answer questions accordingly to their judgment, the final outcome of the stat data will be rendered into a auto-biographical story. The rendered outcome will be a personalized data which we will call *"character"*.

##Basic Structure
- App
  - Scenario
    - Sets
      - Questions
      - Tokens**
  - Users
    - Tokens*
    - Render
    - Archive

>User Tokens* are called from Sets Tokens 

| Linguistic Structure 	| Description                                                                                                           	| Format                       	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------	|------------------------------	|
| Scenario             	| Contains the *Scenario* theme with *Users* and *Sets*                                                               	| Users + Sets               	|
| Users                	| Contains the player data; *Tokens* and final results of its tokens after the rounds called *Render*                   	| Tokens + Render              	|
| Set               	| Contains sets of *Questions* and knows the *Tokens* to be used in the set                                             	| Questions + Tokens           	|
| Questions            	| Contains the questions in text format, the Tokens to be affected, and *Answer* in Boolean                             	| Answer + Tokens + StringText 	|
| Answers              	| Boolean                                                                                                               	| Boolean                      	|
| Tokens               	| Basic block, the stats for the *Scenario* with a count value. It will be affected by the *Answers* of the *Questions* 	| StringText + Value          	|

##Structure of Communication
####Database (Administrative Interface) & Game Interface

Game interface will be separate from the administrative interface. The game will only call the *scenario model data* to communicate with its *user model data*. *User model data* will be only created in the *Game Interface*. Rendering and outcomes in the *user model* will stay separate from the *scenario model data*.

##Detail Information
IF-Computing is a scenario maker, to incentivize people that "choices make a difference and promotes change." Scenario-makers are designing questions as set pieces on a stage. They will also decide on tokens that will be affected by the answers of the questions. The character (user) will make choices of yes and no that affects the character's attitude towards the designed scenario. The results of the choices will be accumulated into an autobiography of the character (user). The autobiographical result will be a story carefully weaved by a computer alogrithm. The autobiographical writing will be a tool to incentivize and treat each player to have important impact on issues around the world be it small or large.

The autobiographical result will be text and image based. Where the text will be written either with pre-determined writing and computer alogrithms to sound authentic and sound. The images will be concept illustrations from artists. They will be tagged and curated appropiately to the theme of the scenario made by the scenario-makers.

The character autobiography will be available to be shared for awareness and to be a proud owner of a great character.

The scenarios will be open for editing, sharing and open for discussions to promote thoughts on ideas, issues, and etc.

##Dependencies and Requirements for Further Development
####Dependencies used
```
npm install node
npm install express
npm install mongoose
npm install body-parser
```

`node server.js`
Will start the server on your localhost.

####Heroku Server

The current version of **server.js** uses **MongoLab** for its database. **MongoLab** is an add-on for heroku servers. Install **MongoLab** on your heroku server and create a database named *ifscenario*. Installing information for MongoLab can be found [HERE: MONGOLAB](https://elements.heroku.com/addons/mongolab)

##Extra
####Sketches
<img src="https://github.com/crzikrn/if-computing/blob/gh-pages/images/sketch01.JPG" width="250px"/>
<img src="https://github.com/crzikrn/if-computing/blob/gh-pages/images/sketch02.JPG" width="250px"/>
<img src="https://github.com/crzikrn/if-computing/blob/gh-pages/images/sketch03.JPG" width="250px"/>

