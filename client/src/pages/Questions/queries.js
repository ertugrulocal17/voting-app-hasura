import { gql } from "@apollo/client";

export const QUESTIONS_SUBSCRIPTIONS = gql`
  subscription {
    questions(order_by: { id: desc }) {
      id
      title
    }
  }
`;
