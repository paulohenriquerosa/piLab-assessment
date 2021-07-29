<h1 align="center">
	<img alt="Logo" src="https://github.com/paulohenriquerosa/piLab-assessment/blob/main/img/logo.png" width="200px" /> 
</h1>

<h3 align="center">
  Backend Assessment - Pi Lab
</h3>


<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/paulohenriquerosa/piLab-assessment">

  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Paulo%20Henrique-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/paulohenriquerosa/piLab-assessment">
  
  <a href="https://github.com/paulohenriquerosa/piLab-assessment/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/paulohenriquerosa/piLab-assessment">
  </a>
  
  <a href="https://github.com/paulohenriquerosa/piLab-assessment/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/paulohenriquerosa/piLab-assessment">
  </a>

</p>

<p align="center">
  <a href="#-challenge">Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-routes">Routes</a>&nbsp;&nbsp;&nbsp;
</p>

<p id="insomniaButton" align="center">
  <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
</p>

## 👨🏻‍💻 Challenge

This api provides almost everything needed to organize personal balance of deposit and withdraw.

Customers can choose to register between outcome or income money and can see all the registers made.



## 💻 Getting started

### Requirements

- [Yarn](https://yarnpkg.com/)
- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/engine/install/)



**Clone the project and access the folder**

```bash
$ git clone https://github.com/paulohenriquerosa/piLab-assessment.git && cd piLab-assessment
```

**Follow the steps below**

```bash
# Install all dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name piLab \
             -e POSTGRES_USER=docker \
             -e POSTGRES_PASSWORD=docker \
             -e POSTGRES_DB=piLab_database \
             -p 5432:5432 -d postgres

# To finish, run the api
$ yarn dev

# Well done, project is started!
```

To run the tests, run the following command:
```bash
$ yarn test
```
## 📝  Routes 

To request the available routes you can use the REST Client [Insominia](https://insomnia.rest/) and import the `Insomnia.json` file that is in the repository

**obs**: This api uses authentication Json Web Token (JWT) and the token most be sent in request header.

---