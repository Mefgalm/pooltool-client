import React from 'react';
import styled from 'styled-components';
import Dialog from '../Dialog';
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



export default function SignIn() {
    const [password, setPassword] = React.useState<string>("");
    const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState<boolean>(false);
    const [emailSentDialogOpen, setEmailSentDialogOpen] = React.useState<boolean>(false);

    return (
        <SignInPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Log In</PageTitle>
                    <PageSubtitle>Don't have an account? <Ref href="/sign-up">Sign up</Ref></PageSubtitle>
                    <Inputs>
                        <LabelWithInput>
                            <Input type="email" placeholder="e.x. support@pooltool.com"></Input>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <PasswordInput label="Password" value={password} onTextChanged={setPassword}></PasswordInput>
                    </Inputs>
                    <Buttons>
                        <ForgotPasswordDialog open={forgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)}></ForgotPasswordDialog>
                        <PrimaryButton>Log In</PrimaryButton>
                        <SecondaryButton onClick={() => setForgotPasswordOpen(true)}>Forgot Your Password?</SecondaryButton>
                    </Buttons>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignInPage>
    )
}
