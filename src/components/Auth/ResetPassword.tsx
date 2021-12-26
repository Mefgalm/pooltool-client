import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { PrimaryButton } from "../SharedStyles";
import { Illustration, PageAndLogoBox, PageSubtitle, PageTitle, SignBox } from "./AuthSharedStyles";
import PasswordInputWithHits from "./PasswordInputWithHits";
import SimpleDialog from "./SimpleDialog";
import success from '../../images/success.svg';
import PasswordResetDialog from "./SimpleDialog";

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

export default function ResetPassword() {
    const [newPassword, setNewPassword] = React.useState<string>("");
    const [successDialogOpen, setSuccessDialogOpen] = React.useState<boolean>(false);

    function newPasswordTextChanged(newPassword: string) {
        setNewPassword(newPassword);
    }

    function resetPasswordClicked() {
        setSuccessDialogOpen(true);
    }

    function onCloseSuccessDialog() {
        setSuccessDialogOpen(false);
    }

    return (
        <ResetPasswordPage>
            <PageAndLogoBox>
                <Logo />
                <SignBox>
                    <PageTitle>Reset password</PageTitle>
                    <PageSubtitle>Please set a new password</PageSubtitle>
                    <ResetPasswordBox>
                        <PasswordInputWithHits label={"New password"} value={newPassword} onTextChanged={newPasswordTextChanged}></PasswordInputWithHits>
                        <PrimaryButton onClick={resetPasswordClicked}>Set New Password</PrimaryButton>
                    </ResetPasswordBox>
                </SignBox>
            </PageAndLogoBox>
            <SimpleDialog pageTitle="Success"
                pageSubtitle="Your new password has been seccessfully saved"
                icon={success}
                open={successDialogOpen}
                onClose={onCloseSuccessDialog}/>
            <Illustration />
        </ResetPasswordPage>
    );
}
