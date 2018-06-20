This is the Backend for [Nomad](https://github.com/gEightyTwo/whereInTheWorld-Front)


## Setup

```shell
npm install
```

Create the development database:

```shell
createdb nomad_dev
```

and run migrations and seeds:

```shell
npm run knex migrate:latest
npm run knex seed:run
```

```shell
npm run dev
```

## This Project was developed by
* Daniel Shikoff [Github](https://github.com/dmshikoff)
  * Setup the Backend routes and authorization
  * Responsible for CSS design and Materialize framework
  * Controlled all Modals and user sign-in/sign-up operations
  * Changed content on the page as LocalStorage was created and updated
  * Task Manager
* Abe Queen [Github](https://github.com/abedababe8)
  * Implemented Redux
  * Rendered Components based on API data
  * Managed Redux store state and application state
  * Managed API integration
  * Data display and Line-Graph Setup
