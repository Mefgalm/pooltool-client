import styled from 'styled-components';
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';
import { signUpReq } from '../../Api';
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

const ValidInput = styled(Input) <{ valid: boolean }>`
    border: 1px solid ${props => props.valid ? '#B6B6CC' : 'red'};
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

const ErrorMessage = styled.p`
    align-self: center;
    color: red;
`

const LogoMargin = styled.div`
    margin-bottom: 4vh;    
`

const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export default function SignUp() {
    const [email, setEmail] = React.useState<string>("");
    const [emailValid, setEmailValid] = React.useState<boolean>(false);
    const [password, setPassword] = React.useState<string>("");
    const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
    const [agree, setAgree] = React.useState<boolean>(false);
    const [emailTaken, setEmailTaken] = React.useState<boolean>(false);

    const navigate = useNavigate();

    function onPasswordChanged(value: string, valid: boolean) {
        setPassword(value);
        setPasswordValid(valid);
    }

    function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        if (emailTaken) {
            setEmailTaken(false);
        }
        setEmail(e.target.value);
        setEmailValid(emailRegex.test(e.target.value));
    }

    const valid = () => agree && emailValid && passwordValid;

    function onAgreeChange() {
        setAgree(!agree);
    }

    async function onSignUp() {
        const result = await signUpReq(email, password);
        if (result.code === "ok") {
            navigate("/");
        } else if (result.code === 'validation') {
            setEmailTaken(true);
        } else {
            console.error("SignUpReq error: " + result.message);
        }
    }

    return (
        <SignUpPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Sing Up</PageTitle>
                    <PageSubtitle>Already have an account? <Ref href="/">Sign in</Ref></PageSubtitle>
                    {emailTaken && <ErrorMessage>Email taken</ErrorMessage>}
                    <Inputs>
                        <LabelWithInput>
                            <ValidInput valid={emailValid} type="email" value={email} onChange={onChangeEmail} placeholder="e.x. support@pooltool.com"></ValidInput>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <PasswordInputWithHits label={"Password"} value={password} onTextChanged={onPasswordChanged}></PasswordInputWithHits>
                    </Inputs>
                    <PrimaryButton disabled={!valid()} onClick={onSignUp}>Sign Up</PrimaryButton>
                    <ConfirmPrivacyPolicy>
                        <Checkbox checked={agree} onChange={onAgreeChange}></Checkbox>
                        <PrivacyText htmlFor="check-policy">
                            Creating an account means you're okey with our <Ref href="https://">Privacy Policy</Ref>
                        </PrivacyText>
                    </ConfirmPrivacyPolicy>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignUpPage>)
}
