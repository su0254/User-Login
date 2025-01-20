import { Avatar, Button } from "@mui/material";
import UpdateDetails from "./UpdateDetails";
import { createContext, Dispatch, useContext, useState } from "react";
import { Themeuser } from "./Header";

export const IsUpdate = createContext<[boolean, Dispatch<React.SetStateAction<boolean>>]>([false, () => null])

const avatar = () => {

    function stringToColor(string: string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    const userContext = useContext(Themeuser)
    console.log(userContext);
    
    const name: string = userContext.user.lastName ? userContext.user.lastName : ''
    const latter: string = userContext.user.firstName ? userContext.user.firstName : ''

    return (
        <>
                <Avatar sx={{ bgcolor: stringToColor(name) }}>{latter[0]}</Avatar>
                hello {latter}
        </>)
}

export default avatar;