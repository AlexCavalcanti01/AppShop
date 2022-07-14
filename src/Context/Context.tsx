import React, { createContext, useState, ReactNode} from "react";

export const MyBag = createContext({
    MyBagClick: () => {},
    open: false,
});

interface Props {
    children?: ReactNode;
}

const MainContextProvider = ({ children }: Props) => {
    const [open, setOpen] = useState(false);

    const MyBagClick = () => {
        if(open === false) {
            return setOpen(true);
        }
        return setOpen(false);
    };

    return (
        <MyBag.Provider value={{ open, MyBagClick }}>
            {children}
        </MyBag.Provider>
    );
};

export default MainContextProvider;