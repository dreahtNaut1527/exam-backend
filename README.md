# Backend Node JS (Exam 2)
Create Node Restful APIs with MySQL Database

Install Node JS and MySQL Software, create a database and import SQL file. 

Go to terminal or command line.

Execute following commands to run this application.

## Start Project
```

$ cd [your folder]

$ npm install

$ nodemon
```

**Open your browser**
```
http://localhost:8000
```

**Add a new user**

```
http://localhost:8000/create
```

**Edit a user**

api: http://localhost:88/update/{id}/{user}/{pass}
```
example: http://localhost:8000/update/2/newuser/userpass
```

**Delete a user**

api: http://localhost:88/delete/{id}
```
example: http://localhost:8000/delete{2}
```

**View list of all users in the system**

```
http://localhost:8000/users
```