import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.boxColor};
`


const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: #E9E9EA;
`

function Menu() {
    return (
        <MainPage>
            <Logo></Logo>
            <Divider></Divider>
        </MainPage>    
    );
}

const DashboardPage = styled.div`
    display: flex;
    flex-direction: row;
`

const DashboardMenu = styled.div`
    width: 20%;
    height: 100vh;
`

export default function Dashboard() {
    return (
        <DashboardPage>
            <DashboardMenu>
                <Menu></Menu>
            </DashboardMenu>
            Dashboard
        </DashboardPage>
    )
}