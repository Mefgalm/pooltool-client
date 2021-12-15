import styled from 'styled-components';
import illustration from '../../images/illustration.svg';

export const SignBox = styled.div`
    background-color: ${props => props.theme.boxColor};
    padding: 12vh 7vw;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 3vh 7vw;
    }
`

export const PageAndLogoBox = styled.div`    
    margin: 3vh 1vw 0 8vw;
    width: 100%;
    @media (max-width: 768px) {
        margin: 3vh 3vw 1vh 3vw;
    }
`

export const LabelWithInput = styled.div`
    display: flex;
    flex-direction: column-reverse;
    & > label {
        margin-bottom: 0.5em;
    }
    & > input:focus + label {
        color: #1365FC;
    }
`

export const Label = styled.label`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.3;
    color: #0A1F2C;
`

export const PageTitle = styled.div`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.15;
    margin-bottom: 1vh;
    font-feature-settings: 'pnum' on, 'lnum' on;
    align-self: center;
`

export const PageSubtitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.6;
    align-self: center;
    color: #B6B6CC;
    margin-bottom: 2vh;
`

export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #B6B6CC;
    caret-color: #1365FC;
    box-sizing: border-box;
    height: 6vh;
    padding: 0 1vw;
    border-radius: 4px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.6;
    &:focus {
        outline: none;
        border-color: #1365FC;
    }
    &::placeholder {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 1.6;
        color: #B6B6CC;
    }
`

export const Illustration = styled.div`
    background-image: url(${illustration});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 90vh;
    margin: 5vh 0;
    @media (max-width: 768px) {
        display: none;
    }
`