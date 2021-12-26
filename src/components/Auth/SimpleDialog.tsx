import Dialog from "../Dialog";
import { PageSubtitle, PageTitle } from "./AuthSharedStyles";
import styled from "styled-components";

const Icon = styled.i<{ icon: string }>`
    width: 69px;
    height: 69px;
    background-image: ${props => `url(${props.icon})`};
    background-position: center;
    background-repeat: no-repeat;
`

const SimpleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & ${Icon} {
        margin-bottom: 2vh;
    }
`

export default function SimpleDialog({ pageTitle, pageSubtitle, icon, open, onClose }:
    { pageTitle: string, pageSubtitle: string, icon: string, open: boolean, onClose: (() => void) }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <SimpleBox>
                <Icon icon={icon}></Icon>
                <PageTitle>{pageTitle}</PageTitle>
                <PageSubtitle>{pageSubtitle}</PageSubtitle>
            </SimpleBox>
        </Dialog>
    )
}