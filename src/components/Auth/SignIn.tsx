import React from 'react';
import styled from 'styled-components';
import Dialog from '../Dialog';
import Logo from '../Logo';
import { PrimaryButton, Ref, SecondaryButton } from '../SharedStyles';
import { PageSubtitle, Illustration, Input, Label, LabelWithInput, SignBox, PageAndLogoBox, PageTitle } from './AuthSharedStyles';
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

const ForgotPasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    & ${LabelWithInput} {
        margin-top: 1vh;
        margin-bottom: 5vh;
    }
`

export default function SignIn() {
    const [password, setPassword] = React.useState<string>("");
    const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState<boolean>(false);

    return (
        <SignInPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Log In</PageTitle>
                    <PageSubtitle>Don't have an account? <Ref href="/signUp">Sign up</Ref></PageSubtitle>
                    <Inputs>
                        <LabelWithInput>
                            <Input type="email" placeholder="e.x. support@pooltool.com"></Input>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <PasswordInput value={password} onTextChanged={setPassword}></PasswordInput>
                    </Inputs>
                    <Buttons>
                        <Dialog open={forgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)}>
                            <ForgotPasswordBox>
                                <PageTitle>Forgot your password?</PageTitle>
                                <PageSubtitle>Enter the email address associated with your accaunt</PageSubtitle>
                                <LabelWithInput>
                                    <Input type="email" placeholder="e.x. support@pooltool.com"></Input>
                                    <Label>Email</Label>
                                </LabelWithInput>
                                <PrimaryButton>Reset Password</PrimaryButton>
                            </ForgotPasswordBox>
                        </Dialog>
                        <PrimaryButton>Log In</PrimaryButton>
                        <SecondaryButton onClick={() => setForgotPasswordOpen(true)}>Forgot Your Password?</SecondaryButton>
                    </Buttons>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignInPage>
    )
}