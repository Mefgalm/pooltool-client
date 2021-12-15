import styled from "styled-components";
import checkSolid from '../images/checkSolid.svg';


const LocalCheckbox = styled.input`
    position: absolute;
    z-index: 0;
    opacity: 0;

    & + label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid #B6B6CC;
        margin-right: 0.6em;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    &:checked + label::before {
        border-color: #1365FC;
        background-color: #1365FC;
        background-image: url(${checkSolid});
    }
`

export default function Checkbox() {
    return (
        <div>
            <LocalCheckbox type="checkbox"></LocalCheckbox>
            <label></label>
        </div>
    )
}