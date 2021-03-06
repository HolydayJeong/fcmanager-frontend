import styled, { css } from 'styled-components';
import Select from 'react-select';

const TextFontStyles = css`
    color: #FFFFFF;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 20px;
`;

export const LogoContainer = styled.div`
    width: 50px;
    height: 50px;
`;

export const TextContainer = styled.div`
    padding: 5px 10px;
`;

export const DropdownContainer = styled.div`
    width: 300px;
    @media screen and (max-width: 800px) {
        width: 50vw;
    }
`;

export const Title = styled.div`
    font-size: 16px;
    padding: 0px 10px;
    font-weight: bold;
    ${TextFontStyles}
`;

export const SubTitle = styled.div`
    font-size: 12px;
    padding: 0px 10px;
    ${TextFontStyles}
`;