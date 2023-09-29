# M3 - `README.md` Example

<br>

# IronSocial

<br>

## Description

IronSocial is a webapp for Ironhack students, that gathers information about coworking establishments, apps from where you can order food, see previous projects, see what to do around the campus and ask for help (tickets) from other students and cohorts.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can access to the hub and ask for help.
- **Login:** As a user I can login to the platform so that I can access my profile, access to the hub and ask for help
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see my favourites.
<!-- -  **Add Tournaments:** As a logged in user I can access the add tournament page so that I can create a new tournament.
- **Edit Tournaments:** As a logged in user I can access the edit tournament page so that I can edit the tournament I created. -->
- **View coworking establishments:** As a user I want to see a list of coworking establishments and their details.
- **View F&B apps:** As a user I can see a list of F&B apps and their details and get redirected.
- **View projects:** As a user I can see a list of projects from previous cohorts and get redirected to them.
- **View "What to do":** As a user I want to be redirected to a plataform where I can have tips of what to do around the campus.
- **Ask for help:** As a user I want to have access to page where I can share what I am doing for a project and ask for help.

## Backlog

- Add weather widget
- lottie interactions
- users can bet
- add geolocation to events when creating

<br>

# Client / Frontend

## React Router Routes (React App)

| Path     | Component | Permissions             | Behavior                                        |
| -------- | --------- | ----------------------- | ----------------------------------------------- |
| `/login` | LoginPage | anon only `<AnonRoute>` | Login form, navigates to home page after login. |

<br>
| `/signup` | SignupPage | anon only `<AnonRoute>` | Signup form, navigates to home page after signup. |
<br>
| `/` | HomePage | public `<Route>` | Home page. |
<br>
| `/user-profile` | ProfilePage | user only `<PrivateRoute>` | User and profile for the current user. |
<br>
| `/user-profile/edit` | EditProfilePage | user only `<PrivateRoute>` | Edit user profile form. |
<br>
| `/cowork` | CoWorkListPage | user only `<PrivateRoute>` | Coworks list and Details. |
<br>
| `/food/beverage` | Food&BeverageListPage | user only `<PrivateRoute>` | Food&Beverage list and Details. |
<br>
| `/whattodo` | WhatToDoListPage | user only `<PrivateRoute>` | What to do list and Details. |
<br>
| `/projects` | ProjectsListPage | user only `<PrivateRoute>` | Projects list and Details. |
<br>
| `/askforhelp` | AskForHelpPage | user only `<PrivateRoute>` | Ask for help form. |

<!-- | `/tournaments/:tournamentId` | TournamentDetailPage | user only `<PrivateRoute>` | Tournament details. Shows players list and other details. | -->

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- CoWorkListPage

- Food&BeverageListPage

- WhatToDoPage

- ProjectsListPage

- AskForHelpPage

Components:

- IsAnon
- IsPrivate
- Navbar

## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Help Ticket Service**

  - `AskForHelpService` :
  - `.addHelp(helpData)`
  - `.getHelp()`
  - `.deleteHelp(id)`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userProfile: { type: Schema.Types.ObjectId, ref:'students' },
  createdHelp: [ { type: Schema.Types.ObjectId, ref:'ticket' } ]
}
```

**Ticket model**

```javascript
 {
   project: { type: String },
   img: { type: String },
   userName: [ { type: Schema.Types.ObjectId, ref:'User' } ],
   description: { type: String },
   contact: { type: String}
 }
```

**Cowork model**

```javascript
{
  image: { type: String}
  name: { type: String},
  location: { type: String},
  price: { type: Number},
  link: { type: String}
}
```

**App model**

```javascript
{
  image: { type: Sting}
  name: { type: String},
  deliveryType: { type: String},
  link: { type: String}
}
```

**Projects model**

```javascript
{
  image: { type: String}
  name: { type: String},
  link: { type: String}
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                              | Request Body            | Success status | Error Status | Description                                                                                                                     |
| ----------- | -------------------------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile    `              | Saved session           | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`                   | {name, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                    | {username, password}    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`                   |                         | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/api/coworks`                   |                         |                | 400          | Show all coworks                                                                                                                |
| GET         | `/api/food/beverage`             |                         |                | 400          | Show all apps                                                                                                                   |
| GET         | `/api/projects`                  |                         |                | 400          | Show all projects                                                                                                               |
| POST        | `/api/helpticket`                |                         |                | 400          | Create a help ticket                                                                                                            |
| GET         | `/api/helpticket`                |                         |                | 400          | Show all help tickets                                                                                                           |
| PUT         | `/api/helptickets/:helpticketId` | { name, img }           | 201            | 400          | Update help ticket info                                                                                                         |
| DELETE      | `/api/helptickets/:helpticketId` |                         | 200            | 400          | delete help ticket                                                                                                              |

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/invite/ironsocial/ATTI96dd8456214011714027390fd0f4edef9FCE06CD)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides
