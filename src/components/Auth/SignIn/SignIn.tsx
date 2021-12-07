import styled from 'styled-components';
import Logo from '../../Logo';
import { PrimaryButton, SecondaryButton } from '../../SharedStyles';
import { PageRedirectInfo, Illustration, Input, Label, LabelWithInput, SignBox, PageTitle, PageAndLogoBox } from '../AuthSharedStyles';

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
    return (
        <SignInPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Log In</PageTitle>
                    <PageRedirectInfo>Don't have an account? <a href="/signUp">Sign up</a></PageRedirectInfo>
                    <Inputs>
                        <LabelWithInput>
                            <Input type="email" placeholder="e.x. support@pooltool.com"></Input>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <LabelWithInput>
                            <Input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"></Input>
                            <Label>Password</Label>
                        </LabelWithInput>
                    </Inputs>
                    <Buttons>
                        <PrimaryButton>Log In</PrimaryButton>
                        <SecondaryButton>Forgot Your Password?</SecondaryButton>
                    </Buttons>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignInPage>
    )
}