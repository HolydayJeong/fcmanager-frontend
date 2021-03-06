import Styled from 'styled-components';

export const MatchItemContainer = Styled.div`
    width: 400px;
    height: 300px;
    background-color: #00BFFF;
    padding: 30px;
    margin: 20px;
`;

export const ScoreContainer = Styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TeamContainer = Styled.div`
    display: block;
    width: 100px;
    text-align: center;
    .icon {
        height: 48px;
        width: 48px;
        display: inline-block;
        vertical-align: middle;
    }
`;

export const RecordContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    border-top: 1px solid #efefef;
    margin: 20px 0;
    padding: 5px 0;
`;

// .match-item {
//     width: 600px;
//     height: 200px;
//     background-color: 	#00BFFF;
//     padding: 30px;
//     margin: 20px;

//     .final-score-container {
        // display: flex;
        // justify-content: space-between;

//         .team {
            // display: block;
            // width: 100px;
            // text-align: center;
            // .icon {
            //     height: 48px;
            //     width: 48px;
            //     display: inline-block;
            //     vertical-align: middle;
            // }
//         }

//         .final-score {
//             font-size: 32px;
//             margin: auto;
//             font-weight: bold;

//             .score {
//                 padding: 15px;
//             }
//         }
//     }

//     .record {
        // display: flex;
        // justify-content: space-between;
        // font-size: 12px;
        // border-top: 1px solid #efefef;
        // margin: 20px 0;
        // padding: 5px 0;

//         .player-container {
//             .player {
//                 display:flex;
//                 .icon {
//                     height: 13px;
//                     width: 13px;
//                     display: inline-block;
//                     vertical-align: middle;
//                     margin: 0 5px;
//                 }
//             }
//         }
//     }
// }