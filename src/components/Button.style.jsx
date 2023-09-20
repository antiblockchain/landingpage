import styled from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  background-color: rgba(0,0,0,0);
  border-bottom: solid 3px #ffffff;

  border-image: ${props => props.$primary ? "linear-gradient(#ff0055, #ff3276) 20" : "linear-gradient(#ffffff, #c5c5c5) 20"};
  padding: .5rem;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  transition: .3s ease-out;

  &:hover {
    transform: scale(110%);
  }
  
`;
export const LinkButton = styled.a`
  
  border-radius: 3px;
  background-color: rgba(0,0,0,0);
  border: solid 3px #ffffff;

  border-image: ${props => props.$primary ? "linear-gradient(#ff0055, #ff3276) 20" : "linear-gradient(#ffffff, #c5c5c5) 20"};
  padding: .5rem;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  transition: .3s ease-out;
  background-color: rgba(0,0,0,0);

  &:hover {
    transform: scale(110%);
  }
  




`