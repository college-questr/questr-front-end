# qeustr-front-end

  Questr, an Open Source platform giving student a place they can ask questions related to their classes and professors. Which allow them to build communities that's good enough to support themselves and other individuals who don't have tutors or friends to study with.

# Rules for contributing 

1.) When creating new features, the person who created the feature needs to provide a corresponding test case. 

2.) All component styles should be written in styled-components and you can position them throughout the page using sass. can also use semantic ui if you want.

3.) Before creating a pull. All existing tests needs to pass When you do make a pull request add me @kiamco or @docoleman36 as a reviewer.

## keep in mind

  -we dont have a backend yet so anything that invloves and api call just leave it blank
  
## Design 

  https://www.figma.com/file/bWpM9FdMZwdeuAEgIrkRBu/answers?node-id=33%3A1

## Getting Started

fork the repo

then clone the forked repor

```
git clone https://github.com/<your_github_account>/questr-front-end.git
```

checkout a branch 

```
git checkout -b <your branch name>
git push -u origin <your branch name>
```

```
npm install
npm start
```

then you can start working! :)

## Submitting a pull request 

once you are done working on you issue create a pull request to master from your forked repo and add @kiamco or @docoleman36 as a reviewer

## Running the tests

we are going to be using https://github.com/testing-library/react-testing-library

```
npm install --save-dev @testing-library/react
```

to run tests run 

```
npm test
```

## React Routes

    -http://localhost:<port>/login
  
    -http://localhost:<port>/signup
  
    -http://localhost:<port>/add-question

    -http://localhost:<port>/dashboard

    -http://localhost:<port>/question/:id

## QraphQL queries and mutations

  - there is a directory called graphQl that contians all the http calls to the data base
  
###### Sample

- customize queries are made in the **queries.js** file

      import { gql } from 'apollo-boost';

      export const GET_QUESTION_BY_ID = (id) => gql`
          {
              question(id: "${id}") {
                  questionTitle
                  questionBody
              }
          }
      `

      export const GET_ALL_QUESTIONS = gql`
      {
          questions{
               questionTitle
              questionBody
          }

      }
      `

- this is how you use it in any component that need to an api call

      import {GET_QUESTION_BY_ID} from '../graphQL/queries'
      const { loading, error, data } = useQuery(GET_QUESTION_BY_ID("5dd1df42f19c8a660ecb966d"));

## Deployment

not deployed yet

## Built With

  - React/Redux
  - Styled components
  - SASS
  - React hooks
  - Apollo
  - graphql

## Versioning


## Authors


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

