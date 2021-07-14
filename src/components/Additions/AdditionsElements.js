import styled from 'styled-components';

export const AdditionsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 100vh;
  padding: 100px 0;

  //   @media screen and (max-width: 768px) {
  //     height: 1100px;
  //   }

  //   @media screen and (max-width: 480px) {
  //     height: 1300px;
  //   }
`;

export const AdditionsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  //   @media screen and (max-width: 1000px) {
  //     grid-template-columns: 1fr 1fr;
  //   }

  //   @media screen and (max-width: 768px) {
  //     grid-template-columns: 1fr;
  //     padding: 0 20px;
  //   }
`;

export const AdditionsCard = styled.a`
  background-color: #fff;
  display: flex;
  text-decoration: none;
  color: black;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  padding: 30px;
  transform: scale(1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const AdditionsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const AdditionsH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#26261C')};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AdditionsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AdditionsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
