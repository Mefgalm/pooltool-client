import styled from "styled-components";
import React from "react";
import PasswordInput from "./PasswordInput";

const PasswordHints = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 3vh;
    gap: 0.5em;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const PasswordHint = styled.label<{ valid: boolean }>`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: #B6B6CC;
    &::before {
        content: "●";
        color: ${props => props.valid ? '#1365FC' : '#B6B6CC'} ;
        font-size: 1.3em;
        margin-right: 0.3em;
    }
`

const oneLowercaseRegex = new RegExp(/^(?=.*[a-z]).*$/);
const lenghtRegex = new RegExp(/^.{8,}$/);
const oneUppercaseRegex = new RegExp(/^(?=.*[A-Z]).*$/);
const oneSpecialRegex = new RegExp(/^(?=.*[!@#$%^&*()№:?[\]\-_~/\\.,]).*$/);

export default function PasswordInputWithHits({ label, value, onTextChanged }:
    { label: string, value: string, onTextChanged: (val: string, valid: boolean) => void }) {
    const [oneLowercaseValid, setOneLowercaseValid] = React.useState<boolean>(false);
    const [lenghtValid, setLenghtValid] = React.useState<boolean>(false);
    const [oneUppercaseValid, setOneUppercaseValid] = React.useState<boolean>(false);
    const [oneSpecialValid, setOneSpecialValid] = React.useState<boolean>(false);

    function localTextChanged(value: string) {
        const oneLowerValid = oneLowercaseRegex.test(value);
        const lenghtValid = lenghtRegex.test(value);
        const oneUpperValid = oneUppercaseRegex.test(value);
        const oneSpecialValid = oneSpecialRegex.test(value);  

        setOneLowercaseValid(oneLowerValid);
        setLenghtValid(lenghtValid);
        setOneUppercaseValid(oneUpperValid);
        setOneSpecialValid(oneSpecialValid);

        onTextChanged(value, oneLowerValid && lenghtValid && oneUpperValid && oneSpecialValid);
    }

    return (
        <div>
            <PasswordInput label={label} value={value} onTextChanged={localTextChanged}></PasswordInput>
            <PasswordHints>
                <PasswordHint valid={oneLowercaseValid}>One lowercase character</PasswordHint>
                <PasswordHint valid={lenghtValid}>8 characters minimum</PasswordHint>
                <PasswordHint valid={oneUppercaseValid}>One uppercase character</PasswordHint>
                <PasswordHint valid={oneSpecialValid}>One special character</PasswordHint>
            </PasswordHints>
        </div>
    );
}