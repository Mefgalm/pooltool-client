import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { useSearchParams } from "react-router-dom";
import { PrimaryButton } from "../SharedStyles";
import { Illustration, PageAndLogoBox, PageSubtitle, PageTitle, SignBox } from "./AuthSharedStyles";
import PasswordInputWithHits from "./PasswordInputWithHits";
import SimpleDialog from "./SimpleDialog";
import success from '../../images/success.svg';
import PasswordResetDialog from "./SimpleDialog";
import { resetPasswordReq } from "../../Api";

const ResetPasswordPage = styled.div`
    display: flex;
    flex-direction: row;
`

const ResetPasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    & ${PrimaryButton} {
        margin-top: 5vh;        
    }
`

const ErrorMessage = styled.p`
    align-self: center;
    color: red;
`

const LogoMargin = styled.div`
    margin-bottom: 4vh;    
`

export default function ResetPassword() {
    const [newPassword, setNewPassword] = React.useState<string>("");
    const [newPasswordValid, setNewPasswordValid] = React.useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [successDialogOpen, setSuccessDialogOpen] = React.useState<boolean>(false);
    const [invalidTokenError, setInvalidTokenError] = React.useState<boolean>(false);

    function newPasswordTextChanged(newPassword: string, valid: boolean) {
        setNewPassword(newPassword);
        setNewPasswordValid(valid);
    }

    async function resetPasswordClicked() {
        if (!newPasswordValid) {
            return;
        }

        const token = searchParams.get('token') ?? "";
        const result = await resetPasswordReq(newPassword, token);
        if (result.code === "ok") {
            setSuccessDialogOpen(true);
        } else if (result.code === "invalid_token") {
            setInvalidTokenError(true);
        } else {
            console.error("ResetPasswordReq: " + result.message);
        }
    }

    function onCloseSuccessDialog() {
        setSuccessDialogOpen(false);
    }

    return (
        <ResetPasswordPage>
            <PageAndLogoBox>
                <LogoMargin>
                    <Logo />
                </LogoMargin>
                <SignBox>
                    <PageTitle>Reset password</PageTitle>
                    <PageSubtitle>Please set a new password</PageSubtitle>
                    {invalidTokenError && <ErrorMessage>Invalid token</ErrorMessage>}
                    <ResetPasswordBox>
                        <PasswordInputWithHits label={"New password"} value={newPassword} onTextChanged={newPasswordTextChanged}></PasswordInputWithHits>
                        <PrimaryButton disabled={!newPasswordValid} onClick={resetPasswordClicked}>Set New Password</PrimaryButton>
                    </ResetPasswordBox>
                </SignBox>
            </PageAndLogoBox>
            <SimpleDialog pageTitle="Success"
                pageSubtitle="Your new password has been seccessfully saved"
                icon={success}
                open={successDialogOpen}
                onClose={onCloseSuccessDialog} />
            <Illustration />
        </ResetPasswordPage>
    );
}
