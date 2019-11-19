import gql from 'graphql-tag';



export const POST_QUESTION = gql`{
        mutation addQuestion($questionTitle: String!, questionBody: String!) {
            addQuestion(questionTitle: $questionTitle, questionBody: $questionBody){
                questionTitle
                questionBody
                votes
                createdBy
                createdAt
            }
        }
    }
`