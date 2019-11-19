import gql from 'graphql-tag';



export const POST_QUESTION = gql`
        mutation($questionTitle:String!,$questionBody: String!, $votes:Int!){
            addQuestion(questionTitle: $questionTitle, questionBody: $questionBody, votes: $votes) {
                questionTitle
                questionBody
                votes
                createdBy
                createdAt
            }
        }
    
`