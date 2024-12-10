import styled from "styled-components";

export const ConverterBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 500px;
  border-radius: 6px;
  position: relative;
  box-shadow: 1px 1px 8px rgba(255, 255, 255, 0.3);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px;

    &.converter-area1 {
      background: linear-gradient(to bottom, #ff6666 0%, #ffb3b3 100%);

      border-radius: 6px 6px 0 0;
      color: white;

      .converter-value {
        label {
          background: #ff66662f;
          padding: 5px;
          border-radius: 2px;
        }
      }
    }

    &.converter-area2 {
      background-color: white;
      border-radius: 0 0 6px 6px;
      color: #ff6666;

      .converter-value {
        input {
          cursor: default;
          color: #ff6666;
          border-color: #ff6666;
        }
      }
    }

    .converter-value {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;

      input {
        width: 90px;
        border: none;
        border-bottom: 2px solid white;
        background: none;
        color: white;
        font-size: 36px;
        font-weight: 600;
        outline: none;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      label {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  > svg {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    color: #ff6666;
    padding: 3px;
    transition: all 250ms linear;

    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      background-color: #f0f0f0;
      color: #c04c4c;
    }
  }
`;
