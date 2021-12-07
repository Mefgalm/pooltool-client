import styled from 'styled-components';
import Logo from '../../Logo';
import { PrimaryButton, SecondaryButton } from '../../SharedStyles';
import { PageRedirectInfo, Illustration, Input, Label, LabelWithInput, SignBox, PageTitle, PageAndLogoBox } from '../AuthSharedStyles';

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

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
        margin-bottom: 1vh; 
    }
`

const PasswordHints = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1vw;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const PasswordHint = styled.label`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 0.7em;
    color: #B6B6CC;
    &::before {
        content: "●";
        color: #1365FC;
        font-size: 1.3em;
        margin-right: 0.3em;
    }
`

const ConfirmPrivacyPolicy = styled.div`
    display: flex;
    flex-direction: row;
    & > label {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 1.6em;
        color: #B6B6CC;
    }
`

const PrivacyCheckbox = styled.input`
    width: 20px;
    height: 20px;
    border: 2px solid #B6B6CC;
    box-sizing: border-box;
    border-radius: 4px;
`

const PrivacyPolicy = styled.div`

`

export default function SignUp() {
    return (
        <SignUpPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Sing Up</PageTitle>
                    <PageRedirectInfo>Already have an account? <a href="/">Sign up</a></PageRedirectInfo>
                    <Inputs>
                        <LabelWithInput>
                            <Input type="email" placeholder="e.x. support@pooltool.com"></Input>
                            <Label>Email</Label>
                        </LabelWithInput>
                        <LabelWithInput>
                            <Input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"></Input>
                            <Label>Password</Label>
                        </LabelWithInput>
                        <PasswordHints>
                            <PasswordHint>One lowercase character</PasswordHint>
                            <PasswordHint>8 characters minimum</PasswordHint>
                            <PasswordHint>One uppercase character</PasswordHint>
                            <PasswordHint>One special character</PasswordHint>
                        </PasswordHints>
                    </Inputs>
                    <Buttons>
                        <PrimaryButton>Log In</PrimaryButton>
                        <PrivacyPolicy>
                            <ConfirmPrivacyPolicy>
                                <PrivacyCheckbox type="checkbox"></PrivacyCheckbox>
                                <label>Creating an account means you're okey with our</label>
                            </ConfirmPrivacyPolicy>
                            <a href="https://">Privacy Policy</a>
                        </PrivacyPolicy>
                    </Buttons>
                </SignBox>
            </PageAndLogoBox>
            <Illustration />
        </SignUpPage>)
}