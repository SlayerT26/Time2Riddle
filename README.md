# Time2Riddle

# Overview

Welcome to Time2Riddle. An app that allows users to answer riddles. Dependent on a 5 star rating. The higher the star rating, the harder the riddle. Now answering the riddle can be challenging itself, however are you willing to accept another challenge? Creating the riddles. Yes, as you create an account. You, yourselv can create your own riddle's and see if others can solve your them. So "Riddle me this", what is a game with a winner and a loser?

# MVP

(Back-end)
• Use Ruby and Rails to create a backend
• Intallation of all necessary gems
• Build a database with minimum 3 tables 
• Have correct associations of 1 to many or many to many
• Utilize Rails to define models for interacting with the database
• Authentication for users to log in

(Front-end)
• Use React to build front-end
• Minimum of 8 seperate components
• Installation of all packages
• Props, State, Params, and Usehistory
• Connection with back-end to show data on front-end
• Full CRUD use on front-end for signed in users

(Styling)
• Full css styling
• @media query for 3 screen sizes
• Grid and Flexbox styling

(Deployment)
• Deployment front-end on netlify
• Deployment back-end on heroku

# Goals

• Complete a full-stack app within a 1 week timeframe
• User profile. Showing general information, created riddles, and saved riddles
• Connection with back-end and front-end
• Finding and using other gems or npm i packages

# Post MVP

• User profile showing created riddles by that user
• Showing favorited riddles
• Set timer on riddles
• Search bar and sort button
• High detail CSS

# Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Render components, props, state, use ruby back end for data |
|   React Router   | Navigate through website |
| Ruby on Rails | Back-end server building |
|     Rails     | Define models for back-end database |
|  Netlify  | Fully functional front-end deployment |
|  Heroku  | Fully functional back-end deployment |


# Wireframe

https://whimsical.com/project-4-2aoGuSpPkCgQXKrNzPdC23

<a href="https://imgur.com/DNcUuxL"><img src="https://i.imgur.com/DNcUuxL.png" title="source: imgur.com" /></a>

• Welcome Page
<a href="https://imgur.com/ABxU7Xd"><img src="https://i.imgur.com/ABxU7Xd.png" title="source: imgur.com" /></a>

• Create Account
<a href="https://imgur.com/5D2EGq4"><img src="https://i.imgur.com/5D2EGq4.png" title="source: imgur.com" /></a>

• Login
<a href="https://imgur.com/kgYaghh"><img src="https://i.imgur.com/kgYaghh.png" title="source: imgur.com" /></a>

• Riddles
<a href="https://imgur.com/T314COt"><img src="https://i.imgur.com/T314COt.png" title="source: imgur.com" /></a>

• Riddle Challenge
<a href="https://imgur.com/KaqU0tv"><img src="https://i.imgur.com/KaqU0tv.png" title="source: imgur.com" /></a>

• Riddle Create
<a href="https://imgur.com/3ttNzwB"><img src="https://i.imgur.com/3ttNzwB.png" title="source: imgur.com" /></a>

• Riddle Edit/Delete
<a href="https://imgur.com/mMvzdHF"><img src="https://i.imgur.com/mMvzdHF.png" title="source: imgur.com" /></a>

• Profile Created Riddles
<a href="https://imgur.com/xzZ44BB"><img src="https://i.imgur.com/xzZ44BB.png" title="source: imgur.com" /></a>

• Profile Favorite Riddles
<a href="https://imgur.com/CqM93dp"><img src="https://i.imgur.com/CqM93dp.png" title="source: imgur.com" /></a>

• Email Riddle
<a href="https://imgur.com/INxozG9"><img src="https://i.imgur.com/INxozG9.png" title="source: imgur.com" /></a>

# Component Tree

https://whimsical.com/SL31p8GNDp8J1TvaamnXPx

<a href="https://imgur.com/6EkPt5u"><img src="https://i.imgur.com/6EkPt5u.png" title="source: imgur.com" /></a>

# Component Hierarchy

<a href="https://imgur.com/zOcWtCs"><img src="https://i.imgur.com/zOcWtCs.png" title="source: imgur.com" /></a>

# Component Architecture

```structure

src
|__ components/
      |__ Home.jsx
      |__ CreateAccount.jsx
      |__ Login.jsx
      |__ ProfileCreated.jsx
      |__ ProfileFavorite.jsx
      |__ Riddle.jsx
      |__ DirectRiddle.jsx
      |__ CreateRiddle.jsx
      |__ Nav.jsx
      |__ EditDelete.jsx
|__ services/
      |__ Home.jsx
      |__ CreateAccount.jsx
      |__ Login.jsx
      |__ ProfileCreated.jsx
      |__ ProfileFavorite.jsx
      |__ Riddle.jsx
      |__ DirectRiddle.jsx
      |__ CreateRiddle.jsx
      |__ Nav.jsx
      |__ EditDelete.jsx
|__ services/
      |__ authorization.js
      |__ config.js
      |__ riddles.js

```

# Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| ReadMe   |    H     |     8 hrs      |     11 hrs     |    10 hrs    |
| Create Back-end CRUD Actions |    H     |     8 hrs      |      TBD     |     TBD     |
| Ruby Schema |    H     |     3 hrs      |      TBD     |     TBD     |
| Ruby Seed |    H     |     3 hrs      |      TBD     |     TBD     |
| Ruby Routes |    H     |     3 hrs      |      TBD     |     TBD     |
| Ruby Controllers |    H     |     3 hrs      |      TBD     |     TBD     |
| Ruby Models |    H     |     1 hrs      |      TBD     |     TBD     |
| Authentication |    H     |     2 hrs      |      TBD     |     TBD     |
| Create Ruby and React App |    H     |     1 hrs      |      TBD     |     TBD     |
| Homepage components/screen |    H     |     4 hrs      |      TBD     |     TBD     |
| Signup component/screen |    H     |     4 hrs      |      TBD     |     TBD     |
| Login component/screen |    H     |     3 hrs      |      TBD     |     TBD     |
| Riddles components/screen |    H     |     4 hrs      |      TBD     |     TBD     |
| RiddleChallenge components/screen |    H     |     3 hrs      |      TBD     |     TBD     |
| Edit/Delete component/screen |    H     |     5 hrs      |      TBD     |     TBD     |
| Create Riddle component/screen |    H     |     3 hrs      |      TBD     |     TBD     |
| Profile Page component/screen|    H     |     5 hrs      |      TBD     |     TBD     |
| Deployment |    H     |     4 hrs      |      TBD     |     TBD     |
| PostMVP |    L     |     10 hrs      |      TBD     |     TBD     |
| TOTAL               |          |     82 hrs      |    TBD     |     TBD     |

# ERD Model

<a href="https://imgur.com/NJeDcH9"><img src="https://i.imgur.com/NJeDcH9.png" title="source: imgur.com" /></a>

# Code Showcase

# Code Issues & Resolutions

