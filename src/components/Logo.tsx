import { Link } from 'react-router-dom';
import styled from 'styled-components';
import question from '../images/question.svg';
import { Navigate } from "react-router-dom";
import React, { useEffect } from 'react';

const TitleWithImage = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
`;

const Image = styled.img.attrs<{ onClick: (_: React.MouseEventHandler<HTMLImageElement>) => void }>(props => ({
    src: question,
    width: '30px',
    onClick: props.onClick
}))`
    cursor: pointer;
`;

const Header = styled.h2.attrs<{ onClick: (_: React.MouseEventHandler<HTMLImageElement>) => void }>(props => ({
    onClick: props.onClick
}))`
    cursor: pointer;
`;


export default function Logo() {
    const [toMain, setToMain] = React.useState<boolean>(false);

    function toMainClicked() {
        setToMain(true);
    }

    useEffect(() => {
        return () => {
            setToMain(false);
        }
    })

    return (
        <>
            {toMain && <Navigate to="/" />}
            <TitleWithImage>
                <Image onClick={toMainClicked}></Image>
                <Header onClick={toMainClicked}>PoolTool</Header>
            </TitleWithImage>
        </>
    )
}