import { useEffect } from "react";
import styled from "styled-components";
import dialogClose from '../images/dialogClose.svg';

const Modal = styled.div<{ open: boolean }>`
    display: ${props => props.open ? 'block' : 'none'}; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100vw; 
    height: 100vh; 
    overflow: auto; 
    background-color: rgba(10,10,10,0.38); 
`

const ModalBox = styled.div`
    background-color: ${props => props.theme.boxColor};
    padding: 8vh 7vw;
    border-radius: 12px;
    box-sizing: border-box;
`

const Close = styled.span`
    width: 24px;
    height: 25px;
    float: right;
    background-image: url(${dialogClose});
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: all;
    cursor: pointer;
    margin-right: 24px;
    margin-top: 24px;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;     
    height: 100vh;
`

export default function Dialog({ open, onClose, children }: { open: boolean, onClose: (() => void), children?: React.ReactNode; }) {
    return (
        <Modal open={open}>
            <ModalContent id="modalContent">
                <div>
                    <Close onClick={onClose}></Close>
                    <ModalBox>
                        {children}
                    </ModalBox>
                </div>
            </ModalContent>
        </Modal>
    )
}