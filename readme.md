
#Edurio test project

Task requires you to create separate front-end and back-end instances.

##Front-end:

● Use VUE.js for routing and managing all views.

○ Must use vue.js components architecture.

● Use vue for requesting information from backend endpoints

● Tests written using http://nightwatchjs.org/ (Optional)

##Back-end:

● Built on laravel 5.2 and dingo api package [OK]

● Create public pages and pages that are secured with JWT (Json web token)

● Application should be as API.

● API tests written in php unit

##Task, what you need to build.

1. Homepage with simple login form

2. Control panel, you can get there only if you are authenticated by backend api.

a. In control panel you can need to make CRUD (Create, Read, Update, Delete)

model for Users.

b. And excel data import (Structure is up to you), important, that there should be

more that 3 columns and 10 rows of data.

##Story

I will build platform , where Recruiter imports or add I'ts Vacancies . And platform , where it will get Candidates that are valid for this vacancy.

Import will consist of 4 columns : Title , Country , Keywords (seperated by ',')

#####Sample
`` PHP Developer | Latvia | php , mysql , laravel , git``
`` Front-End developer | Belarus | sass , css , javascript , angularJs``

[] This information will be sent out to API Service.
[] API Service reference will be inserted in DB
[] On recieve of data client will be notified with Browser notifications
