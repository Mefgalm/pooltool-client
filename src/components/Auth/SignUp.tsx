import styled from 'styled-components';
import Logo from '../Logo';
import { PrimaryButton, Ref, SecondaryButton } from '../SharedStyles';
import { PageSubtitle, Illustration, Input, Label, LabelWithInput, SignBox, PageTitle, PageAndLogoBox } from './AuthSharedStyles';
import PasswordInput from './PasswordInput';
import React from 'react';
import Checkbox from '../Checkbox';
import PasswordInputWithHits from './PasswordInputWithHits';

const SignUpPage = styled.div`
    display: flex;
    flex-direction: row;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh; 
    & > *:not(:last-child) {
        margin-bottom: 3vh; 
    }
`



const ConfirmPrivacyPolicy = styled.div`
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
`

const PrivacyText = styled.label`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.6em;
    color: #B6B6CC;
`



export default function SignUp() {
    const [password, setPassword] = React.useState<string>("");

    function onPasswordChanged(value: string) {
        setPassword(value);
    }

    return (
        <SignUpPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Sing Up</PageTitle>
                    <PageSubtitle>Already have an account? <Ref href="/">Sign up</Ref></PageSubtitle>
                    <Inputs>
                        <LabelWithInput>
                            <Input type="email" placeholder="e.x. support@pooltool.com"></Input>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <PasswordInputWithHits value={password} onTextChanged={onPasswordChanged}></PasswordInputWithHits>
                    </Inputs>
                    <PrimaryButton>Log In</PrimaryButton>
                    <ConfirmPrivacyPolicy>
                        <Checkbox></Checkbox>
                        <PrivacyText htmlFor="check-policy">
                            Creating an account means you're okey with our <Ref href="https://">Privacy Policy</Ref>
                        </PrivacyText>
                    </ConfirmPrivacyPolicy>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignUpPage>)
}