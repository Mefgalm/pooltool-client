import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SignInReq } from '../../Api';
import Logo from '../Logo';
import { PrimaryButton, Ref, SecondaryButton } from '../SharedStyles';
import { PageSubtitle, Illustration, Input, Label, LabelWithInput, SignBox, PageAndLogoBox, PageTitle } from './AuthSharedStyles';
import ForgotPasswordDialog from './ForgotPasswordDialog';
import PasswordInput from './PasswordInput';

const SignInPage = styled.div`
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

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
        margin-bottom: 1vh; 
    }
`

const ErrorMessage = styled.p`
    align-self: center;
    color: red;
`

export default function SignIn() {
    const [password, setPassword] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState<boolean>(false);
    const [emailSentDialogOpen, setEmailSentDialogOpen] = React.useState<boolean>(false);

    const [invalidEmailOrPassword, setInvalidEmailOrPassword] = React.useState<boolean>(false);

    const navigate = useNavigate()

    async function onSignInClicked(): Promise<void> {
        const result = await SignInReq(email, password);
        if (result.code === "ok") {
            navigate("/dashboard");
        } else {
            setInvalidEmailOrPassword(true);
        }
    }

    return (
        <SignInPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Log In</PageTitle>
                    <PageSubtitle>Don't have an account? <Ref href="/sign-up">Sign up</Ref></PageSubtitle>
                    {invalidEmailOrPassword && <ErrorMessage>Invalid email or password</ErrorMessage>}
                    <Inputs>
                        <LabelWithInput>
                            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.x. support@pooltool.com"></Input>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <PasswordInput label="Password" value={password} onTextChanged={setPassword}></PasswordInput>
                    </Inputs>
                    <Buttons>
                        <ForgotPasswordDialog open={forgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)}></ForgotPasswordDialog>
                        <PrimaryButton onClick={async () => await onSignInClicked()}>Log In</PrimaryButton>
                        <SecondaryButton onClick={() => setForgotPasswordOpen(true)}>Forgot Your Password?</SecondaryButton>
                    </Buttons>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignInPage>
    )
}
