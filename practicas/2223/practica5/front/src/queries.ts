import { gql } from "@apollo/client";

export const GET_AVAILABLE_SLOTS = gql`
  query availableSlots($year: Int!, $month: Int!, $day: Int) {
    availableSlots(year: $year, month: $month, day: $day) {
      day
      available
      dni
      hour
      month
      year
    }
  }
`;

export const ADD_SLOT = gql`
  mutation Mutation($year: Int!, $month: Int!, $day: Int!, $hour: Int!) {
    addSlot(year: $year, month: $month, day: $day, hour: $hour) {
      available
    }
  }
`;

export const REMOVE_SLOT = gql`
  mutation Mutation($year: Int!, $month: Int!, $day: Int!, $hour: Int!) {
    removeSlot(year: $year, month: $month, day: $day, hour: $hour) {
      available
    }
  }
`;
