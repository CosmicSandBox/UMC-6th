import React, { useState } from 'react';
import styled from "styled-components";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Container>
            <OriginalTexts>
                <h1>안녕하세요!</h1>
                <p>내용내용내용</p>
                <button onClick={openModal}>버튼열기</button>
            </OriginalTexts>
            {isOpen && (<ModalWrapper>
                <ModalDiv>
                    <h1>안녕하세요!</h1>
                    <p>내용내용내용</p>
                    <CloseBtn>
                        <Close onClick={closeModal}>닫기</Close>
                    </CloseBtn>
                </ModalDiv>
            </ModalWrapper>)}

        </Container>
    );

};

export default Modal;

const Container = styled.div`
    
`;

const OriginalTexts = styled.div`
    
`;

const ModalDiv = styled.div `
    background: white;
    padding : 24px 16px;
    border-radius: 4px;;
    width: 320px;
`;

const CloseBtn = styled.div`
    text-align: right;
`;

const Close = styled.button`
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;