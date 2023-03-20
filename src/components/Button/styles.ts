import styled from "styled-components";

type TButtonProps = {
  typeButton?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  cursor?: "default" | "wait" | "move" | "not-allowed";
  hover?: boolean;
  focus?: boolean;
};

export const Button = styled.button<TButtonProps>`
  background-color: ${(props) =>
    props.typeButton === "SECONDARY"
      ? "#3C3748"
      : props.typeButton === "TERTIARY"
      ? "transparent"
      : "#8257E5"};
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
  border-radius: 1.5rem;
  padding: 1rem 1.5rem;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: filter 250ms;

  .draggable-icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: ${(props) => (props.hover ? "brightness(0%)" : "")};
  }

  .default {
    &:hover {
      cursor: pointer;
    }
  }

  &:disabled {
    opacity: 56%;
    &:hover {
      cursor: not-allowed;
    }
  }
  .draggable {
    &:hover {
      cursor: move;
    }
  }
`;
