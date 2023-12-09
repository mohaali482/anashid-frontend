import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDialog = styled.div`
    z-index: 102;
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    display: block;
    max-width: 50%;
    max-height: 75%;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: ${(props) => props.theme.borderRadius};
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.palette.primary.backgroundPrimary};
`

const Backdrop = styled.div`
    z-index: 101;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary}5F;
    shape-image-threshold: 0.5;
    pointer-events: none;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Container = styled.div<{ fullScreen: boolean }>`
    position: fixed;
    top: ${(props) => props.fullScreen ? '0' : '5rem'};
    right: 0;
    left: ${(props) => props.fullScreen ? '0' : '16rem'};
    bottom: 0;
    z-index: 101;
    width: ${(props) => props.fullScreen ? '100%' : 'calc(100% - 16rem)'};
    height: ${(props) => props.fullScreen ? '100%' : 'calc(100vh - 5rem)'};

    @media (max-width: 1024px) {
        width: 100%;
        left: 0;
        top: 5rem;
        bottom: 0;
    };
`

interface DialogProps {
    children: React.ReactNode;
    fullScreen?: boolean;
    onClose: (() => void) | null;
}

const Dialog = ({ children, fullScreen }: DialogProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <Container fullScreen={fullScreen || false} ref={containerRef}>
            <Backdrop>
                <StyledDialog onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
                    {children}
                </StyledDialog>
            </Backdrop>
        </Container>
    )
}


export default Dialog;