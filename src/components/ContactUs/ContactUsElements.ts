import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 800px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const HorizontalGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1em;
  width: 100px;
  margin-bottom: 4px;
  //letter-spacing: 2px;
`;

export const Input = styled.input`
  border: 1px solid #000000;
  background: transparent;
  padding: 8px;
  border-radius: 6px;
`;

export const TextArea = styled.textarea`
  min-width: 100%;
  min-height: 180px;
  resize: none;
  border: 1px solid #000000;
  background: transparent;
  padding: 8px;
  border-radius: 6px;
`;

export const Button = styled.button`
  width: 120px;
  margin: 0 auto;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;
