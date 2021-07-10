import styled from "styled-components";

export const IndividualSetGatheringStyled = styled.div`
    width: 100%;
    .body_container {
        position: relative;
        margin: 0px 120px;
    }
    .header {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 15px 120px;
    }
    .loader {
        width: 50px;
        margin: 15% auto 0px;
    }  
    .header a {
    float: left;
    color: #00cccc;
    text-align: center;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;
    }
    .header-right {
        float: right;
    }
    
    .header a.logo {
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
    }
    
    td button {
    background-color: #00cccc;
    border: none;
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    }
    .back_button{
        background-color: #00cccc;
        border: none;
        color: white;
        padding: 10px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
    }
    .MuiTableCell-root {
        display: table-cell;
        padding: 10px;
    }
    
      
`;
export const IndividualCardListStyled = styled.div`
button.close_button {
    float: right;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
}
`;

export const RandomBoosterDetailsStyled = styled.div`
    margin: 0 120px;
`;