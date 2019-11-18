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