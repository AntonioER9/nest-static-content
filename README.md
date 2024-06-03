<!-- Improved compatibility of back to top link -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="docs/img/nestjs.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Help Center Static Content</h3>

  <p align="center">
    An awesome backend API to get static content.
    <br />
    <br />
    <a href="https://cda-static-content.ecomm-stg.cencosud.com/api">View Demo</a>
    ·
    <a href="https://gitlab.com/cencosud-ds/cencommerce/post-purchase-experience/self-service/apis/static-content/-/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/cencosud-ds/cencommerce/post-purchase-experience/self-service/apis/static-content/-/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#local-start">Local Start</a></li>
        <li><a href="#docker-start">Docker Start</a></li>
        <li><a href="#openapi">OpenAPI</a></li>
        <li><a href="#jest-testing">Jest Testing</a></li>
        <li><a href="#logger">Logger</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#section">Section</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][project-screenshot]


Help Center backend to get static content.

<!-- ARCHITECTURE -->
## Architecture 
![Architecture][architecture]


### Built With

[![NestJS][NestJS]][NestJS-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![Node.js][Node.js]][Node.js-url]
[![NPM][NPM]][NPM-url]
[![Docker][Docker]][Docker-url]
[![Jest][Jest]][Jest-url]




<!-- GETTING STARTED -->
## Getting Started

The first thing to do is to clone this project.


### Prerequisites

We need to create some ENV variables for the project

1. Request the variables from the updated .env file

2. You need to have the following software/tools:
    - Visual Studio Code (Not mandatory but recommended, the project includes some configs for this IDE)
    - Node.js 18.13.0 (Check [Nodeenv](https://github.com/nodenv/nodenv) for multiple node versions)
    - NPM 8.19.3
    - Docker


### Installation

1. Clone the repo
   ```sh
   $ git clone git@gitlab.com:cencosud-ds/cencommerce/post-purchase-experience/self-service/apis/static-content.git
   ```
2. Check current Node version
   ```sh
   $ node -v
   v18.13.0
   ```
3. Check CDA_FLAGS_TOKEN configuration [README](https://gitlab.com/cencosud-ds/cencommerce/post-purchase-experience/self-service/apis/static-content/-/blob/master/README.md)
   ```sh
   $ echo $CDA_FLAGS_TOKEN
   [SHOULD PRINT LIB TOKEN]
   ```
4. Create a new `.env` file then modify values accordingly (check file comments)
   ```sh
   cp .env.example .env
   ```

5. Install NPM packages
   ```sh
   $ npm install

   added 1052 packages, and audited 1053 packages in 26s
   
   found 0 vulnerabilities
   ```


<!-- USAGE EXAMPLES -->
## Usage

This space to show useful examples of how the project can be used. Additional screenshots, code examples and demos.

General Team Guidelines:
 * You need a module for every `"functionality"` inside of `modules` folder
    * Inside goes dtos, entities, test, etc..
    * _To better create modules/resources check [NestJS CLI](https://docs.nestjs.com/cli/overview)_
 * External integrations goes on the `services` folder
 * Use the `HelpCenterLogger` methods to log with the standard format
 * Everything you add needs testing!
 * Always use `types` instead of `interfaces` _For more info, please refer to the [Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)_
 * Please check the `OpenAPI` decorators for controllers, dtos, etc. 
 * Keep packages updated and check for critical vulnerabilities
 * Check Gitlab CI MR's reports for code quality, dast, sast, etc issues
    * Example of a bad MR:
    * ![Gitlab Report][usage-report]

This project also uses `pre-commit` and `pre-push` hooks to verify the code we write. The steps are:

```json
"pre-commit": [
    "format", // Checks if code matches prettier's configured style
    "lint", // Checks eslint configured rules
    "compile" // Runs typescript compiler
  ],
  "pre-push": [
    "build", // Runs nestjs build
    "test:cov", // Runs jest test coverage
    "audit" // Checks for critical packages vulnerabilities
  ]
```

_Note: All pre commit steps can be run with `$ npm run validate` and also every individual step can be run separately (Check [package.json](package.json) for details)_

### Local Start

This is the standard way to use the app with the debugger 

```sh
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Mikro-orm Start

This is the standard way to use the mikro-orm 

```sh
# Drop and recreate the database
$ npx mikro-orm schema:fresh --run

# Insert registers on database
$ npx mikro-orm seeder:run

```

```sh
$ npm run start:dev
[Nest] 19046  - 02/22/2023, 11:50:51 AM     LOG [NestFactory] Starting Nest application...
...
[Nest] 19046  - 02/22/2023, 11:50:51 AM     LOG [NestApplication] Nest application successfully started
```

### Docker Start

Using this type of start allows you to create an entire app stack (api + database) so you can develop directly without depending on a staging database or installing a database on your local machine.

_Note: The database include the use of a data volume so in case you delete de db container the database data will persist_

For this to work we use [`docker compose`](https://docs.docker.com/compose/compose-file/) check the following file [`docker-compose.yml`](docker-compose.yml) this file uses [`Dockerfile_local`](Dockerfile_local)

_Note: In this boiler we use an postgres database, but you can choose any database docker image you want._

Commands:
```sh
# Start/Create app stack
$ npm run docker:start

# Stops all app stack
$ npm run docker:stop

# Delete app stack
$ npm run docker:down

# Delete app stack with volumes
$ npm run docker:down:complete
```

```sh
$ npm run docker:start

[+] Running 1/1
 ⠿ Container static-content-app  Started

$ docker logs static-content-app

[Nest] 29  - 02/22/2023, 5:53:13 PM     LOG [NestFactory] Starting Nest application...
...
[Nest] 29  - 02/22/2023, 5:53:13 PM     LOG [NestApplication] Nest application successfully started

```

Some of the features:
  - The docker watches for files changes so it restart the app like when you use `npm run start:dev`
  - To connect the debugger you need to use `lunch: Docker: Attach to Node`



### Database

As explained this boilerplate when used with `docker compose` or manually configured uses a database.

Commands:
```sh
# !WARNING! Drops the database schema and recreates it
$ npm run db:create

# updates schema based on entities
$ npm run db:update

# !WARNING! Drops all tables
$ npm run db:drop

# seed the database with the default database seeder
$ npm run db:seed
```

### Endpoints Examples

* Health
  
  _Note: jq is a CLI JSON processor. [More info ./jq](https://stedolan.github.io/jq/)_
  
  ```sh
  curl -s --request GET \
    'https://cda-static-content.ecomm-stg.cencosud.com/health/check' | jq
  {
    "status": "ok",
    "info": {
        "database": {
        "status": "up"
        }
    },
    "error": {},
    "details": {
        "database": {
        "status": "up"
        }
    }
  }
  ```
* Footers

  This is an endpoint to get all footers by flag.


  ```sh
  xh -b localhost:5000/footers api-key:special-key flag:paris country:cl
  [
      {
          "id": 4,
          "title": "Copyright © 2023 - Paris",
          "label": "Términos y Condiciones",
          "link": "https://www.paris.cl/informaciones-legales/terminos-y-condiciones.html"
      },
      {
          "id": 5,
          "title": "Copyright © 2023 - Paris",
          "label": "Términos y Condiciones Marketplace",
          "link": "https://www.paris.cl/informaciones-legales/terminos-y-condiciones.html"
      },
      {
          "id": 14,
          "title": "Copyright © 2023 - Paris",
          "label": "Código de ética",
          "link": "https://www.paris.cl/on/demandware.static/-/Library-Sites-ParisSharedLibrary/es_CL/dwa2a8c54c/marketing/home/codigo-de-etica-chile-2018.pdf"
      },
      {
          "id": 15,
          "title": "Copyright © 2023 - Paris",
          "label": "Bases legales de concursos",
          "link": "https://www.paris.cl/bases-legales/"
      }
  ]
  ```

### OpenAPI
The project has a Swagger UI for complete test of the endpoints. [Swagger UI](https://cda-static-content.ecomm-stg.cencosud.com/api)




### Jest Testing

  ```sh
  # unit tests
  $ npm run test

    > static-content@1.0.0 test
    > jest


    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    PASS  src/modules/content/prefooters/tests/prefooters.service.spec.ts (18.974 s)

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    [Nest] 24768  - 03/23/2023, 11:43:55 AM    WARN [PrefooterService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    PASS  src/modules/content/most-populars/tests/most-populars.service.spec.ts (19.212 s)

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    [Nest] 24766  - 03/23/2023, 11:43:55 AM    WARN [MostPopularsService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    PASS  src/modules/content/footers/tests/footers.service.spec.ts (19.29 s)

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    [Nest] 24769  - 03/23/2023, 11:43:55 AM    WARN [FooterService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    PASS  src/modules/content/info-messages/tests/info-messages.service.spec.ts (19.605 s)

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    PASS  src/modules/content/payment-methods/tests/payment-methods.service.spec.ts (19.711 s)

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    [Nest] 24764  - 03/23/2023, 11:43:55 AM    WARN [PaymentMethodService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 24767  - 03/23/2023, 11:43:55 AM    WARN [InfoMessagesService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    PASS  src/modules/content/help-category/tests/help-category.service.spec.ts (20.022 s)

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts
    [Nest] 24763  - 03/23/2023, 11:43:56 AM    WARN [HelpCategoryService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 24763  - 03/23/2023, 11:43:56 AM    WARN [HelpCategoryService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 24763  - 03/23/2023, 11:43:56 AM    WARN [HelpCategoryService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/help-category/tests/help-category.service.spec.ts

    RUNS  src/modules/content/payment-methods/tests/payment-methods.controller.spec.ts

    RUNS  src/modules/content/payment-methods/tests/payment-methods.controller.spec.ts
    PASS  src/modules/content/faqs/tests/faqs.controller.spec.ts (20.337 s)

    RUNS  src/modules/content/payment-methods/tests/payment-methods.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/services/tests/services.service.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    [Nest] 24766  - 03/23/2023, 11:43:57 AM    WARN [ServiceService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/faqs/tests/faqs.service.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    [Nest] 24764  - 03/23/2023, 11:43:58 AM    WARN [FaqService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/payment-methods/tests/payment-methods.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/banners/tests/banners.service.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    [Nest] 24768  - 03/23/2023, 11:43:58 AM    WARN [BannerService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/rrss/tests/rrss.service.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    [Nest] 24769  - 03/23/2023, 11:43:58 AM    WARN [RrssService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/help-category/tests/help-category.controller.spec.ts

    RUNS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts

    RUNS  src/modules/health/tests/health.controller.spec.ts

    RUNS  src/modules/health/tests/health.controller.spec.ts
    PASS  src/modules/content/services/tests/services.controller.spec.ts

    RUNS  src/modules/health/tests/health.controller.spec.ts
    PASS  src/modules/content/prefooters/tests/prefooters.controller.spec.ts

    RUNS  src/modules/health/tests/health.controller.spec.ts
    PASS  src/modules/content/info-messages/tests/info-messages.controller.spec.ts
    PASS  src/modules/health/tests/health.controller.spec.ts
    PASS  src/modules/content/footers/tests/footers.controller.spec.ts
    PASS  src/modules/content/banners/tests/banners.controller.spec.ts
    PASS  src/modules/content/rrss/tests/rrss.controller.spec.ts

    Test Suites: 21 passed, 21 total
    Tests:       67 passed, 67 total
    Snapshots:   0 total
    Time:        25.653 s
    Ran all test suites.
  ```

```sh
# coverage tests
$ npm run test:cov

    > static-content@1.0.0 test:cov
    > jest --collectCoverage

    PASS  src/modules/content/prefooters/tests/prefooters.service.spec.ts (15.735 s)
    [Nest] 25144  - 03/23/2023, 11:46:00 AM    WARN [PrefooterService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/info-messages/tests/info-messages.service.spec.ts (16.728 s)
    [Nest] 25141  - 03/23/2023, 11:46:01 AM    WARN [InfoMessagesService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/payment-methods/tests/payment-methods.service.spec.ts (16.934 s)
    PASS  src/modules/content/footers/tests/footers.service.spec.ts (16.895 s)
    [Nest] 25140  - 03/23/2023, 11:46:02 AM    WARN [PaymentMethodService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 25142  - 03/23/2023, 11:46:02 AM    WARN [FooterService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/most-populars/tests/most-populars.service.spec.ts (17.048 s)
    [Nest] 25143  - 03/23/2023, 11:46:02 AM    WARN [MostPopularsService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 25139  - 03/23/2023, 11:46:02 AM    WARN [HelpCategoryService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 25139  - 03/23/2023, 11:46:02 AM    WARN [HelpCategoryService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    [Nest] 25139  - 03/23/2023, 11:46:02 AM    WARN [HelpCategoryService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/help-category/tests/help-category.service.spec.ts (17.581 s)
    PASS  src/modules/content/faqs/tests/faqs.controller.spec.ts (17.788 s)
    PASS  src/modules/content/banners/tests/banners.service.spec.ts
    [Nest] 25144  - 03/23/2023, 11:46:03 AM    WARN [BannerService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/faqs/tests/faqs.service.spec.ts
    [Nest] 25143  - 03/23/2023, 11:46:04 AM    WARN [FaqService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/most-populars/tests/most-populars.controller.spec.ts
    PASS  src/modules/content/payment-methods/tests/payment-methods.controller.spec.ts
    PASS  src/modules/content/help-category/tests/help-category.controller.spec.ts
    PASS  src/modules/content/rrss/tests/rrss.service.spec.ts
    [Nest] 25140  - 03/23/2023, 11:46:05 AM    WARN [RrssService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/info-messages/tests/info-messages.controller.spec.ts
    PASS  src/modules/content/services/tests/services.service.spec.ts
    [Nest] 25144  - 03/23/2023, 11:46:06 AM    WARN [ServiceService] [findByFlag] [3cbd0525-72d7-4668-8349-5cc621108251] not found [{"headers":{"flagId":1,"flagLabel":"jumbo"}}]
    PASS  src/modules/content/footers/tests/footers.controller.spec.ts
    PASS  src/modules/content/prefooters/tests/prefooters.controller.spec.ts
    PASS  src/modules/content/services/tests/services.controller.spec.ts
    PASS  src/modules/health/tests/health.controller.spec.ts
    PASS  src/modules/content/banners/tests/banners.controller.spec.ts
    PASS  src/modules/content/rrss/tests/rrss.controller.spec.ts
    --------------------------------|---------|----------|---------|---------|-------------------
    File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    --------------------------------|---------|----------|---------|---------|-------------------
    All files                       |   98.27 |    89.47 |      92 |      99 |                   
    banners                         |     100 |      100 |     100 |     100 |                   
    banners.controller.ts           |     100 |      100 |     100 |     100 |                   
    banners.service.ts              |     100 |      100 |     100 |     100 |                   
    faqs                            |     100 |      100 |     100 |     100 |                   
    faqs.controller.ts              |     100 |      100 |     100 |     100 |                   
    faqs.service.ts                 |     100 |      100 |     100 |     100 |                   
    footers                         |     100 |      100 |     100 |     100 |                   
    footers.controller.ts           |     100 |      100 |     100 |     100 |                   
    footers.service.ts              |     100 |      100 |     100 |     100 |                   
    help-category                   |   98.18 |       80 |     100 |      98 |                   
    help-category.controller.ts     |     100 |      100 |     100 |     100 |                   
    help-category.service.ts        |   97.61 |       80 |     100 |   97.43 | 52                
    help-category/entities          |   77.27 |      100 |       0 |   88.23 |                   
    help-content.ts                 |   77.27 |      100 |       0 |   88.23 | 37,41             
    info-messages                   |     100 |      100 |     100 |     100 |                   
    info-messages.controller.ts     |     100 |      100 |     100 |     100 |                   
    info-messages.service.ts        |     100 |      100 |     100 |     100 |                   
    most-populars                   |     100 |      100 |     100 |     100 |                   
    most-populars.controller.ts     |     100 |      100 |     100 |     100 |                   
    most-populars.service.ts        |     100 |      100 |     100 |     100 |                   
    payment-methods                 |     100 |      100 |     100 |     100 |                   
    payment-methods.controller.ts   |     100 |      100 |     100 |     100 |                   
    payment-methods.service.ts      |     100 |      100 |     100 |     100 |                   
    prefooters                      |     100 |      100 |     100 |     100 |                   
    prefooters.controller.ts        |     100 |      100 |     100 |     100 |                   
    prefooters.service.ts           |     100 |      100 |     100 |     100 |                   
    rrss                            |     100 |      100 |     100 |     100 |                   
    rrss.controller.ts              |     100 |      100 |     100 |     100 |                   
    rrss.service.ts                 |     100 |      100 |     100 |     100 |                   
    services                        |     100 |      100 |     100 |     100 |                   
    services.controller.ts          |     100 |      100 |     100 |     100 |                   
    services.service.ts             |     100 |      100 |     100 |     100 |                   
    --------------------------------|---------|----------|---------|---------|-------------------

    =============================== Coverage summary ===============================
    Statements   : 98.27% ( 342/348 )
    Branches     : 89.47% ( 17/19 )
    Functions    : 92% ( 46/50 )
    Lines        : 99% ( 298/301 )
    ================================================================================

    Test Suites: 21 passed, 21 total
    Tests:       67 passed, 67 total
    Snapshots:   0 total
    Time:        24.08 s, estimated 25 s
    Ran all test suites.
```


### Logger

This project contains logger called `CDALogger` that extends its functionality from the standard `ConsoleLogger`.

With this we have all the functionality of the normal logger plus a couple of methods that logs with some of the required template to show more data on New Relic

How to use it? ([_Check file `cda.logger.ts` for more info_](src/common/loggers/cda.logger.ts))

* Just as the normal logger you need to add it to the top of your service class.
  ```typescript
  export class FootersService {
    private readonly logger: CDALogger = new CDALogger(FootersService.name);
    ...
    this.logger.log('This is a log') // Normal log
    this.logger.hcInfo('TRACE-ID', 'This is a log') // New method
    ...
  }
  ```
* Then you need to call one of the available methods (by log level)
  ```typescript
  this.logger.hcDebug(headers.traceId, 'trying to get all footers', 'findAll', { headers, params: { limit, offset } });
  ```

* The following logs are available
  ```typescript
  cdaDebug(traceId: string, functionName: string, message: string,parameters?: object)
  cdaWarn(traceId: string, functionName: string, message: string,parameters?: object)
  cdaError(traceId: string, functionName: string, message: string,parameters?: object)
  // hcAlert the same as hcError but prints [ALERT] on the message so it may trigger an New Relic alert if configured
  cdaAlert(traceId: string, functionName: string, message: string,parameters?: object)
  ```

### New Envs

In case your project needs to add or modify env variables please modify [`.env.example`](.env.example) file:

```bash
NEW_VARIABLE=${NEW_VARIABLE}
```

Then check [`app.config.ts`](src/config/app.config.ts) and add your new variable.


```typescript
export default (): AppConfig => ({
  name: process.env.APP_NAME ?? 'static-content',
  port: process.env.APP_PORT ? Number.parseInt(process.env.APP_PORT, 10) : 5000,
  version: process.env.APP_VERSION ?? '1.0.0',
  description: process.env.APP_DESC ?? 'Static Content API',
  log: process.env.APP_DEBUG ? ['log', 'debug', 'error', 'warn'] : ['log', 'error', 'warn'],

  auth: {
    jwtSecret: process.env.JWT_SECRET ?? '',
    jwtExp: process.env.JWT_EXP ?? '3600s',
  },

  paris: {
    urlMisCompras: process.env.URL_MIS_COMPRAS ?? '',
    urlHelpForm: process.env.URL_HELP_FORM ?? '',
  },
});
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[project-screenshot]: docs/img/project-screenshot.jpeg
[architecture]: docs/img/architecture.png
[demo-fork]: docs/img/demo-fork.gif
[envs-override]: docs/img/envs-override.png
[install-env]: docs/img/install-env.png
[usage-report]: docs/img/usage-report.png
[usage-swagger]: docs/img/usage-swagger.jpeg
[usage-docker-debug]: docs/img/usage-docker-debug.png

[NestJS]: https://img.shields.io/badge/nestjs-000000?style=for-the-badge&logo=nestjs&logoColor=E0234E
[NestJS-url]: https://nestjs.com/
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=FFF
[TypeScript-url]: https://www.typescriptlang.org/
[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=FFF
[Node.js-url]: https://nodejs.org/
[NPM]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=FFF
[NPM-url]: https://www.npmjs.com/
[Docker]: https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=FFF
[Docker-url]: https://www.docker.com/
[Jest]: https://img.shields.io/badge/jest-FFF?style=for-the-badge&logo=jest&logoColor=C21325
[Jest-url]: https://jestjs.io/