import styled from "styled-components";
import Dialog from "../Dialog";
import { forgotPasswordReq } from '../../Api';
import { PrimaryButton } from "../SharedStyles";
import { Input, Label, LabelWithInput, PageSubtitle, PageTitle } from "./AuthSharedStyles";
import SimpleDialog from "./SimpleDialog";
import sent from '../../images/sent.svg';
import React from "react";

const ForgotPasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    & ${LabelWithInput} {
        margin-top: 1vh;
        margin-bottom: 5vh;
    }
`



export default function ForgotPasswordDialog({ open, onClose }: { open: boolean, onClose: (() => void) }) {
    const [email, setEmail] = React.useState<string>("");
    const [sentDialogOpen, setSentDialogOpen] = React.useState<boolean>(false);

    async function onSentDialog() {
        if (!email) {
            return;
        }

        const result = await forgotPasswordReq(email);
        if (result.code === "ok") {
            setSentDialogOpen(true);
            localOnClose();
        }  else {
            console.error("ForgotPasswordReq: " + result.message);
        }
    }

    function localOnClose() {
        setEmail("");
        onClose();
    }


    return (
        <>
            <Dialog open={open} onClose={localOnClose}>
                <ForgotPasswordBox>
                    <PageTitle>Forgot your password?</PageTitle>
                    <PageSubtitle>Enter the email address associated with your accaunt</PageSubtitle>
                    <LabelWithInput>
                        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.x. support@pooltool.com"></Input>
                        <Label>Email</Label>
                    </LabelWithInput>
                    <PrimaryButton onClick={onSentDialog}>Reset Password</PrimaryButton>
                </ForgotPasswordBox>
            </Dialog>
            <SimpleDialog pageTitle="Email has been sent!"
                pageSubtitle="Please check your inbox and click in the received link to reset a password"
                icon={sent}
                open={sentDialogOpen}
                onClose={() => setSentDialogOpen(false)} />
        </>
    )
}