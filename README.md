![GNIT College Logo](https://github.com/Rishabhraghwendra18/GNITMarksPortal/blob/main/client/src/assets/GNITLogo.jpg?raw=true)


# 📌 Introduction
This project is a Student portal , I made it using PERN Stack (PostgreSQL,Express,Reactjs,Node.js), for my college because my college doesn't have any such portal for students so I thought of gifting one to my college. It has the following features:

- Students can login with their username & password to check their marks in last semester.
- Teachers can upload the marks of the students in their respective subject by logging into portal using their username & password.
- Admin has the all the rights to check students marks in each semester , check faculties with their subjects in each semester , make a new account for newly joined faculty or student.

**Portal Link:** https://gnit-portal.herokuapp.com/


## 📌 Approaches Used
- Functional Programming paradigm is used.
- TDD (Test Driven Development) is followed.


## 📌 Project Structure
Root folder is divided into three sub folders:

- client - It has all the client side code . It's made using Reactjs.
- server - It has all the backend logic needed for the portal to work . It's made using Express.
- .github - It contains all the files & workflows related to GitHub.

Complete folder structure is as follows:

```
.
├── client
│   ├── build
│   │   ├── asset-manifest.json
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── static
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── assets
│       ├── dist
│       ├── index.js
│       ├── pages
│       ├── reportWebVitals.js
│       ├── sass
│       ├── setupTests.js
│       └── tests
├── README.md
└── server
    ├── database-Migration
    │   └── database.sql
    ├── Dockerfile
    ├── package.json
    ├── package-lock.json
    ├── src
    │   ├── build
    │   ├── database
    │   ├── index.js
    │   ├── middlewares
    │   ├── routes
    │   └── server
    ├── tests
    │   └── CRUD-opperations.test.js
    └── yarn.lock

19 directories, 26 files
```


## 📌 Environment Setup
**1st step** Fork the repo first & run the following commands in terminal

**2nd Step:** Clone the repo

      $ git clone https://github.com/<your-github-username>/GNITMarksPortal.git

**3rd Step:** Navigate to client folder and install all dependencies

      $ npm install

_Do the same for the server folder too_

**4th Step:** Make sure you have installed the PostgreSQL in your local machine . If not install it. Then run these commands:

      $ sudo -u postgres psql
      postgres=# CREATE DATABASE gnitdb;

Then navigate to server folder in another terminal and run this command:

      $ psql gnitdb < ./databasee-Migration/database.sql

Now you have the database set-up with some dummy data in it.

To quit postgreSQL server run:

      postgres=# \q


## 📌 Some useful commands
To run development server or run test cases navigate to the respective folder - whether it's client or server folder where you have made changes and run these commands

To run development server, run:

      $ npm run start

To run tests cases, run:

      $ npm run test


## 📌 How to Update Your Github Forked Repository
**1st Step:** Add the remote respository link

      $ git remote add upstream https://github.com/Rishabhraghwendra18/GNITMarksPortal.git

**2nd Step:** Fetching The Upstream Repository

    $ git fetch upstream

**3rd Step:** Finally Merging with Upstream Repository

    $ git merge upstream/master

Make your commits

*Before making a Pull Request make sure you follow our [Code of Conduct](https://github.com/Rishabhraghwendra18/GNITMarksPortal/blob/main/CODE_OF_CONDUCT.md)*

Now you are ready to make Pull Request 😃


## 📜 License
This repository is distributed under the terms of [GNU GENERAL PUBLIC LICENSE v3.0](https://github.com/Rishabhraghwendra18/GNITMarksPortal/blob/main/LICENSE)
