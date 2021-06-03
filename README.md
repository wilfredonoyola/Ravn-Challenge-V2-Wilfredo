# RavnChallenge

A web app that allows you to browse the Star Wars GraphQL Api. The goal of this challenge is to demonstrate your ability to write clean software, communicate clearly usando Angular with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Tree Structure

```
  .
  └── src
      ├── app
      │   ├── core
      │   ├── features
      │   └── shared
      └── scss
```

## Functionality

- Use the Star Wars GraphQL API
- Direct endpoint: https://swapi-graphql.netlify.app/.netlify/functions/index
- Use the Apollo GraphQL client
- Show loading indicator when necessary.
- Indicate when a query has failed.
- Uses the allPeople field to load all people from the API. Should load 5 people at a time until all people are available on the client application.
- Shows details of a person.

## Libraries used for this project

- apollo/client
- apollo-angular
- graphql
- rxjs
- ngx-infinite-scroll
- angular-eslint/schematics

## To do and Improve

- Responsive design
- Add unit tests
- Deploy to a production server

## [Important] Some decisions

In the infinite scroll part, I enabled an always visible scroll so that the user has the option to load more articles when the first 5 results are shown.

In a real case:
Normally, you could load all the results in the available height space of the window or DIV and display the scroll only if the content no longer fits in the content. But for this case it was required to show 5 results each time. So for the first time with "overflow-y: auto" the scroll will not be shown and likewise there will be no way to scroll down.

Resume:
I have added a height greater than 100% for the first load of the elements to always show a scroll.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page or contact me to wilfredon163@gmail.com
