# Dog Paws
Dog Paws is a social media platform that connects dog breeders and dog owners. Both breeder and owner can come to Dog Paws and create a profile, list their dogs, and take part in chats with topics created by users. Even if your not a user you can come to Dog Paws and see the dogs listed on our site, and the chat topics and conversations. To fully experience what Dog Paws has to offer become a user now. Our job is to make your life easy and your dog happy. 

# Dogheroku

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

# Featuers

 Dog Paws incorporates Authguards, and stores the token in the storage session. Through the role service the site features four different roles; no user, user, admin, banned. No user can only see the login sign up page, the dogs page, and the chat page. The user can signup/login than they have full CRUD ability on their profile and thier dog list. An Admin has the same features as an user, however; they are the only one with the ability to delete any topic within the chat forum. The banned feature is an ability that can only be utilized by the admin, but must be done through the backend in PgAdmin. 

# Styling

Custom CSS
Bootstrap
Material UI

# Collaborators

Aaron Lafrentz
Efren Medina
Michael Reardon

# Deployed Client Url

https://dogbreedproject.herokuapp.com/

# Deployed Server Url

https://dogbreedprojectapi.herokuapp.com

# Sample Admin Login info

Username: Admin
Password: Admin

# Cloning server

Create a folder where you want to clone the server repo. Than open that folder in you terminal and run `git clone https://github.com/efrenmedina1/dogProjectApi.git` .

# Cloning client

Open in your terminal the same folder you cloned the server repo, and run `git clone https://github.com/efrenmedina1/dogPaws.git` .

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).