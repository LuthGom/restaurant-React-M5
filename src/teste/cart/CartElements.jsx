import styled from "styled-components";

export const CartContainer = styled.aside`
    font-weight: 600;
    font-style: normal;
    background-color: #ffffff;
    padding: 40px 20px 0 20px;    
    height: 100vh;
    min-width: 500px;

    @media screen and (max-width: 960px) {
        display: none;
      }
`;

export const TitleCart = styled.h1`
    font-size: 24px;
`;

export const ItemCart = styled.div`
    font-size: 18px;  
`;

export const RowsOrder = styled.section`
    display: grid;
    grid-template-rows: 3fr 1fr 1fr;
    margin-top: 10px;
`;

export const Order = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr 2fr 1fr 0.5fr;
    justify-items: start;
    align-items: center;
    margin-bottom: 8px;
`;

export const QtyOrder = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 40px);
    justify-items: center;
    align-items: center;
    justify-content: space-between;
`;

export const QtyItem = styled.div`
    display: grid;
    grid-template-rows: repeat(3 10px);
    color: #FDC844;
`;

export const ButtonQty = styled.span`
    color: #0F1108;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    background-color: #ffffff;
`;

export const Img = styled.img`    
    background-color: #fdc9448c;
    max-height: 81x;
    max-width: 66px;
    border-radius: 8px;
`;

export const Info = styled.a`
    color: rgba(132, 132, 132, 1);
    font-size: 12px
`

export const QtyPrice = styled.div`
    color: #FDC844;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;

`

export const TotalCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;

`;

export const OrderFinished = styled.button`
    background-color: #FF2351;
    color: #fffffa;
    border-radius: 8px;
    border: none;
    width: 397px;
    height: 51px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    margin: 10px auto;
`;

export const Obs = styled.p`
      font-size:12px;
      color: #808080
`


export const Line = styled.div`
    background-color: #DADADA;
    height:1px;

`;