import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: .3rem;
  border-radius: 10px;
  background-color: #2196F3;
  width: 10rem;
  border-style: none;
  color: white;
  transition: .25s;
  text-transform: capitalize;
  background: royalblue;
  color: white;
  border-style: none;
  margin-top: 3%;
  font-size: 1.4rem;
  font-weight: bold;
  transition: .25s;
  padding: 1rem ;
  border-radius: 10px;
  border: solid 1px #ddd;
  text-align: center;
  &:hover {
    background-color: #0A2738;
  }
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  max-width: 30rem;
`;

export const FormPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Head = styled.header`
  width: 90%;
  height: 11rem;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const HeadContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: -4rem;
`

export const HLeft = styled.div`
  display: flex;
  padding: .5rem;
  align-items: center;
  margin-top: -5rem;
`;

export const HRight = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-right: 4%;
  font-size: 1.3rem;
  
  `

export const Input = styled.input`
  border-radius: 5px;
  padding: .5rem;
  width: 30rem;
  margin-bottom: 0;
  &:focus {
    border-color: dodgerblue;
  }
`;

export const LoginForm = styled.div `
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
`;

export const Nav = styled.div`
  width: 100%;
  background-color: #0a2738;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const NavLinksContainer = styled.div `
  display:flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-around;
`;