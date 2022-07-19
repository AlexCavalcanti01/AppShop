import styled from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.div<Props>`
    width: 325px;
    height: 800px;
    
    display: ${p => p.open ? 'unset' : 'none'};
    
`;

export const Header = styled.div`
    width: 325px;
    height: 44px;

    background: rgba(34, 34, 36, 0.8);
    box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
`;
export const HeaderText = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;

    letter-spacing: 0.05em;

    color: #FFFFFF;

    padding-top: 8px;
    padding-bottom: 9px;
    padding-left: 16px;
`;
export const Items = styled.div`
    width: 325px;
    height: 480px;

    display: flex;
    flex-direction: column;

    background: rgba(34, 34, 36, 0.4);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
`;

export const Summary = styled.div`
    width: 325px;
    height: 276px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 18px;
    
    background: rgba(34, 34, 36, 0.4);
    box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.25);
`;
export const Text = styled.span`
    padding-top: 23px;
    padding-bottom: 3px;
    
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;

    padding-left: 26px;
`;

export const Subtotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 26px;
    padding-right: 30px;
`;
export const SubText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const SubValue = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

export const Tax = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 26px;
    padding-right: 30px;
`;
export const TaxText = styled.div`    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const TaxValue = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 26px;
    padding-right: 30px;
`;
export const TotalText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const TotalValue = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

export const Cod = styled.div`
    display: flex;
    align-items: center;
    gap: 56px;
    padding-left: 26px;
    
`;
export const CodText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.05em;

    color: #FFFFFF;
`;
export const CodMais = styled.img`
    width: 9px;
    height: 9px;
`;

export const Button = styled.button`
    margin-left: 58px;
    margin-right: 56px;

    border: none;
    background: rgba(34, 34, 36, 0.8);
    border-radius: 5px;    
`;
export const ButtonText = styled.div`
    width: 212px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: rgba(34, 34, 36, 0.8);
    border-radius: 5px;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.05em;

    color: #FFFFFF;
`;

