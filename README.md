# Custormer Relationship Managment for Small and Medium Enterprises
CRM-for-SME is a web-based platform built to simplify client relationship management. It offers a centralized database for efficient client interaction management.<br>
<img src="https://github.com/Fabo90/CRM-for-SME/assets/139248863/7cfa19bc-fda0-4128-a19a-c0d4fa5dc292" alt="logo" width="200" height="200">
<img src="https://github.com/Fabo90/CRM-for-SME/assets/139248863/7c478a93-8f61-4dfb-9c23-6a90939d6267" width="800">


### Features:

- Clients: Create and manage a client roster for easy access.
- Tasks: Organize and track pending activities for each client.
- Notes: Capture important client-related information for personalized interactions.
- Billing: Generate invoices and track payments for services rendered.
- Stripe Integration: Secure payment links streamline billing and enhance payment collection.
- User Authentication: Validates input during signup, encrypts passwords, and protects user sessions.
- Database Reliability: Interacts with a PostgreSQL database through SQLAlchemy for data integrity.
- User Interaction: Visually appealing alerts and a polished graphical interface using SweetAlert, Bootstrap, and CSS3.

### Demo Video:

Watch a video walkthrough where I explain how CRM-for-SME works and demonstrates its key features.

[Demo Video](https://youtu.be/GFLDsmT95I0?si=BxYA5gWUWXI_v5_Z)


### Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start the webpack dev server `$ npm run start`

### Contributors

While the initial template for this project was graciously provided by [4Geeks Academy](https://4geeksacademy.com/us/coding-bootcamp), I want to emphasize that CRM-for-SME was developed independently. Although I began with a blank template, I took full responsibility for crafting and shaping every aspect of the project to meet its unique requirements and objectives.

I'd like to express my gratitude to the following contributors for their valuable input and efforts in enhancing the project:

- [Daniel Jaimes](https://github.com/ingdev8023)
- [Ricardo de Lima](https://github.com/ricardodelimaaa)
- [Daniel Abarca](https://github.com/Braiton57)
