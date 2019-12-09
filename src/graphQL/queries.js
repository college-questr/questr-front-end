import {
    gql
} from 'apollo-boost';


export const GET_QUESTION_BY_ID_WITH_ANSWERS = (id) => gql `
    {
        question(id: "${id}") {
            questionTitle
            questionBody
        	votes
        	createdBy
        	createdAt
        	answer{
                id
                user_id
                answer
                votes
                createdAt
              }
			tag{
              question_id
              tag
            }
        }
    }
`

export const GET_QUESTION_BY_ID = (id) => gql `
        {
        question(id: "${id}") {
            questionTitle
            questionBody
        	votes
        	createdBy
        	createdAt
        }
    }
`

export const GET_QUESTION_BY_ID_AND_TAGS = (id) => gql `
    {
        question(id: "${id}") {
            questionTitle
            questionBody
        	votes
        	createdBy
        	createdAt
			tag{
              question_id
              tag
            }
        }
    }
`

export const GET_ALL_QUESTIONS = gql `
{
    questions{
 		questionTitle
        questionBody
    }
}
`

export const getQuestionItemQuery = gql `
  {
    questions(pageSize:10) {
      id  
      questionTitle
      answer{
        id
        answer
      }
      votes
      tag{
        question_id
        tag
      }
      createdAt
    }
  }
  `

export const fetchMoreQuestion = gql `
  query questions($lastId: ID) {
    questions(pageSize:10,lastId:$lastId) {
      id  
      questionTitle
      answer{
        id
        answer
      }
      votes
      tag{
        question_id
        tag
      }
      createdAt
    }
  }
  `
export const GET_TAGS = gql `
{
    tags {
        tag
    }
}
`

export const SEARCH = gql `
query search($searchKey: Sting!) {
  search(searchKey: $searchKey) {
    id
    questionTitle
    answer {
      id
      answer
    }
    votes
    tag {
      question_id
      tag
    }
    createdAt
  }
}
`
