import styled from "styled-components";

export const Container = styled.div`
    width: 272px;
    height: 214px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: 26px;
    padding-right: 27px;

    background: rgba(34, 34, 36, 0.4);
    box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.25);
`;

export const Title = styled.div`
    width: 274px;
    height: 20px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const Value = styled.div`
    width: 76px;
    height: 20px;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #FFFFFF;

    padding-top: 10px;
`;
export const Box = styled.div`
    padding-top: 15px;
    display: flex;
    gap: 17px;
`;

export const Img = styled.img`
    width: 120px;
    height: 120px;

    padding-top: 15px;
`;

export const List = styled.div`
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-top: 10px;
`;
export const ListName = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const ListSize = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const Qty = styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #FFFFFF;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;
`
export const QtyUnd = styled.img`
    width: 5px;
    height: 4.82px;
`;
