import styled from "styled-components"

export const PrimaryButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2vh 2vw;

    background: ${props => props.disabled ? '#B6B6CC' : '#1365FC'} ;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    border-radius: 8px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;

    color: #FFFFFF;
`

export const SecondaryButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2vh 2vw;

    border: 1px solid #1365FC;    
    box-sizing: border-box;
    border-radius: 8px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;

    color: #1365FC;

    background-color: #fff;
`

export const Ref = styled.a`
    font-size: 14px;
    color: #1365FC;
    text-decoration: none;
`