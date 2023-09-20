import styled from "styled-components"

export const Line = styled.hr`
    border: none;
    border-top: solid 3px #0061d8;
    border-image: linear-gradient(90deg, #ffffff, #818181) 10;
    max-width: 960px;
    margin-top: 5rem;
    margin-bottom: 0rem;
    border-radius: 3px;
    transition: .3s;
    -webkit-box-shadow:0px 0px 68px 15px rgba(77,77,77,1);
-moz-box-shadow: 0px 0px 68px 15px rgba(77,77,77,1);
box-shadow: 0px 0px 68px 15px rgba(77,77,77,1);

    @media (min-width: 481px) and (max-width: 1200px) {
        max-width: 350px;
    }

    @media (max-width: 480px) {
        max-width: 150px;

    }
`