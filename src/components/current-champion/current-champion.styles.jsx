import styled, {css}from 'styled-components';
import { ReactComponent as BlueIcon } from '../../assets/icon-blue.svg';

const IconStyles = css`
    height: 80px;
    width: 80px;
`;

export const CurrentChampionContainer = styled.div`
    width: 250px;
    height: 250px;
    text-align: center;
    background-color: #3e1964;
    padding: 20px;
`;

export const Title = styled.div`
    padding: 20px;
    font-size: 20px;
`;

export const IconContainer = styled.div`
    width: 80px;
    height: 80px;
`;

export const Team = styled.div`
    width: 100%;
`;

export const TeamIcon = styled(BlueIcon)`
    ${IconStyles}
`;

// .current-champion {
//     width: 250px;
//     height: 250px;
//     background-color: #00BFFF;
//     padding: 30px;
//     margin: 20px;
//     text-align: center;

//     h3 {
//         padding: 10px;
//     }

//     .icon {
//         width: 80px;
//         height: 80px;
//         display: inline-block;
//         vertical-align: middle;
//     }

//     .team {
//         font-weight: bold;
//         font-size: 20px;
//         padding: 15px;
//     }
// }