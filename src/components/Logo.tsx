import styled from 'styled-components';
import question from '../images/question.svg';

const TitleWithImage = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-bottom: 4vh;
`;

export default function Logo() {
    return (
        <TitleWithImage>
            <img src={question} />
            <h2>PoolTool</h2>
        </TitleWithImage>
    )
}