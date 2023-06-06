import React, { FC } from "react";
import styled from "@emotion/styled";
import { Slot } from "@/types";
import { ADD_SLOT, REMOVE_SLOT } from "@/queries";
import { useMutation } from "@apollo/client";

type SlotComplete = Slot & {
  created: boolean;
};

const SlotsViewer: FC<{
  slots: Slot[];
  doctor: boolean;
  add: boolean;
  day: number;
  month: number;
  year: number;
  refetch: () => Promise<any>;
}> = ({ slots, doctor, day, month, year, refetch }) => {
  const [addSlot] = useMutation(ADD_SLOT);
  const [removeSlot] = useMutation(REMOVE_SLOT);

  // add all slots not present from 8:00 to 20:00 with created: false
  const slotsComplete: SlotComplete[] = [];
  for (let i = 8; i < 20; i++) {
    const slot = slots.find((slot) => slot.hour === i);
    if (!slot) {
      slotsComplete.push({
        day,
        month,
        year,
        hour: i,
        created: false,
        available: true,
        dni: "",
      });
    } else {
      slotsComplete.push({
        ...slot,
        created: true,
      });
    }
  }

  return (
    <>
      <h1>
        {new Date(year, month, day).toLocaleDateString("es-ES", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </h1>
      <Container>
        {slotsComplete.map((slot) => {
          return (
            <Slot key={`${slot.day}-${slot.hour}-${slot.month}-${slot.year}`}>
              {slot.hour}:00 - {slot.hour}:50 -
              {doctor && slot.created ? (
                slot.available ? (
                  <Action
                    onClick={async () => {
                      await removeSlot({
                        variables: {
                          day: slot.day,
                          month: slot.month,
                          year: slot.year,
                          hour: slot.hour,
                        },
                      });
                      refetch();
                    }}
                  >
                    Remove Slot
                  </Action>
                ) : (
                  "Booked"
                )
              ) : (
                <Action
                  onClick={async () => {
                    await addSlot({
                      variables: {
                        day: slot.day,
                        month: slot.month,
                        year: slot.year,
                        hour: slot.hour,
                      },
                    });
                    refetch();
                  }}
                >
                  Add Slot
                </Action>
              )}
            </Slot>
          );
        })}
      </Container>
    </>
  );
};

// box with list of slots
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  // all item to left
  text-align: left;
  // padding
  padding: 0.5rem 1rem;
  // border
  border: 1px solid #ccc;
  border-radius: 5px;
  // shadow
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  width: 250px;
`;

// text with onclick
const Action = styled.div`
  cursor: pointer;
  // bold
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const Slot = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // padding
  padding: 0.5rem 1rem;
`;

export default SlotsViewer;
