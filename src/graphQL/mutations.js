import gql from 'graphql-tag';



export const POST_QUESTION = gql`
        mutation($questionTitle:String!,$questionBody: String!, $votes:Int!){
            addQuestion(questionTitle: $questionTitle, questionBody: $questionBody, votes: $votes   ) {
                questionTitle
                questionBody
                votes
                createdBy
                createdAt
            }
        }
`

export const POST_TAGS = gql`
        mutation($tag: String!, question_id: String!) {
            addTag(tag: $tag, questoin_id: $quesiton_id) {
                tag
                question_id
            }
        }
`