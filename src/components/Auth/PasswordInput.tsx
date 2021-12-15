import { Input, Label, LabelWithInput } from "./AuthSharedStyles";
import eye from '../../images/eye.svg';
import eyeOff from '../../images/eyeOff.svg';
import styled from "styled-components";
import React from "react";

const Eye = styled.i`
    width: 30px;
    height: 30px;
    position: absolute;
    cursor: pointer;
    background-image: url(${eye});
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: all;
`

const EyeOff = styled(Eye)`
    background-image: url(${eyeOff});
`

const PasswordWithLabel = styled(LabelWithInput)`
    position: relative;
    & i {
        position: absolute;
        right: 1px;
        top: 29px;
    }
`

export default function PasswordInput({ value, onTextChanged }: { value: string, onTextChanged: (val: string) => void }) {
    const [hidePassword, setHidePassword] = React.useState<boolean>(true);

    function localTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
        onTextChanged(e.target.value);
    }

    return (
        <div>
            <PasswordWithLabel>
                <Input type={hidePassword ? 'password' : 'text'} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" value={value} onChange={localTextChanged}></Input>
                <Label>Password</Label>
                {hidePassword ? <Eye onClick={() => setHidePassword(false)}></Eye> : <EyeOff onClick={() => setHidePassword(true)}></EyeOff>}
            </PasswordWithLabel>
        </div>
    );
}