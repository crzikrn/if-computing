# IF-computing

##Basic Information
Using MEAN Stack for "If Scenario". A game-like app that creates rounds of questions that affects a set of stats or tokens. The user will answer questions accordingly to their judgment, the final outcome of the stat data will be rendered in 3D. The rendered outcome will be a personalized data *"character"*.

##Structure
- App
  - Scenario
    - Users
      - Tokens*
      - Render
    - Rounds
      - Questions
      - Tokens**
    -  Archive

>User Tokens* are called from Rounds Tokens 

| Linguistic Structure 	| Description                                                                                                           	| Format                       	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------	|------------------------------	|
| Scenario             	| Contains the *Scenario* theme with *Users* and *Rounds*                                                               	| Users + Rounds               	|
| Users                	| Contains the player data; *Tokens* and final results of its tokens after the rounds called *Render*                   	| Tokens + Render              	|
| Rounds               	| Contains sets of *Questions* and knows the *Tokens* to be used in the set                                             	| Questions + Tokens           	|
| Questions            	| Contains the questions in text format, the Tokens to be affected, and *Answer* in Boolean                             	| Answer + Tokens + StringText 	|
| Answers              	| Boolean                                                                                                               	| Boolean                      	|
| Tokens               	| Basic block, the stats for the *Scenario* with a count value. It will be affected by the *Answers* of the *Questions* 	| StringText + Value          	|
