# news-scraper

This is a full stack application that scrapes article headlines and snippets from [Hypepotamus](https://hypepotamus.com/) and allows users to save and delete comments on the articles. 
---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)

## Organization of the Application

The application uses Bootstrap for the user interface. When a user submits a purchase quantity of an item, an AJAX request is made to the server API which updated the MySQL database uses Sequelize as an ORM. Node and express comprise the backend. 

## Getting Started

In order for this application to run on your local computer, you must have Node.js installed as well as the required node modules. 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Node.js, MYSQL database, and express and sequelize packages are required to run this application locally.  

### Clone

- Clone this repo to your local machine using `https://github.com/dayadam/bamazon`

---

## Installation

### MySQL Server Installation Guide (Windows)

* Head to <https://dev.mysql.com/downloads/windows/installer/8.0.html>

* Select Windows (x86, 32-bit), MSI Installer (16.3 M)

* Click “No thanks, just start my download.”

* Navigate to where the file was downloaded and double-click to run the installer. If you get prompted for an update, proceed with the upgrade.

* When you get to the License Agreement screen, Accept the license terms and click “Next”

* Click the “+” next to “MySQL Servers” to expand it, expand “MySQL Server”, expand “MySQL Server 8.0”, and finally select “MySQL Server 8.0.12 – X64” and click the right arrow to add it to the “Products/Features To Be Installed” section.

* Click “Execute”

* When the status says “Complete”, click “Next”.

* At the product configuration screen, click “Next” again.

* Select “Standalone MySQL Server / Classic MySQL Replication” and click “Next”

* For Type and Networking, don’t change anything and click “Next”

* **IMPORTANT**: Make sure to select “Use Legacy Authentication Method (Retain MySQL 5.x Compatibility) and click “Next”

* Create a root password. WARNING. Do not forget this password! After entering a password, click “Next”

* When you get to the Windows Service screen, don’t change anything and click “Next”

* Finally, click “Execute” to apply the changes.

* You can verify that the installation was correct by going to Git Bash and typing “mysql –V”. The path followed by the version should show up.

### MySQL Server Installation Guide (Mac)

* Head to <https://dev.mysql.com/downloads/mysql>

* Scroll down and find macOS 10.14 (x86, 64-bit), DMG Archive and click “Download”.

* Click “No thanks, just start my download.”

* Open the .DMG file and go through the installation process.

* Click “Continue” to get to the Software License Agreement Screen.

* Click “Continue” to agree with the Software License Agreement and click “Agree”.

* Click “Install” and input your password to allow the installer to continue.

* **IMPORTANT**: Make sure to select “Use Legacy Password Encryption” and click “Next”.

* Create a root password. WARNING. Do not forget this password! After entering a password, make sure to check the box to "Start server on installation"

* Click “Finish”.

* You can verify that the installation was correct by going to “System Preferences” and the MySQL icon should show up at the bottom.

* Click the MySQL Icon in "System Preferences". This will bring up a GUI in which you can Start or Stop your server. You can also set it to start server when you turn on your computer.

### Install Node and packages

- install Node.js from <https://nodejs.org/en/>

> install npm packages

```shell
$ npm install
```

## Usage

[Working Video](https://drive.google.com/file/d/1VRxdemi2_74LE0EvOPcz6I31zcqxG0VO/view?usp=sharing)

Users can enter the quantity they want to subtract from the database in each "Buy quantity:" input field. Clicking the "Place order" button will submit the order, subtract from the database, and update the new inventory quantity in the "Stock Quantity:" field. 

## Built With

* [Node.js](https://nodejs.org/en/) - Server runtime environment for JavaScript
* [Express.js](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool designed to work in an asynchronous environment
* [jQuery](https://jquery.com/) - Fast, small, and feature-rich JavaScript library
* [Bootstrap](https://getbootstrap.com/) - CSS framework directed at responsive, mobile-first front-end web development
* [MongoDB](https://www.mongodb.com/download-center/community) - General purpose, document-based, distributed database
* [Axios](https://www.npmjs.com/package/axios) - Package used for server side http requests to APIs
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - A Handlebars view engine for Express

## Authors

* **Adam Day** - [Adam Day](https://github.com/dayadam)

## Acknowledgments

* Thanks to all the open source contributors that helped with the building blocks of this project. 
 