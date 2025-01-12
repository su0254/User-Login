import { useContext, useState } from "react"
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Themeuser } from "./Header";
import axios, { AxiosError } from "axios";
import { UserType } from "../types/userType";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const updateDetails = () => {
    const userContext = useContext(Themeuser)
    console.log(userContext.user);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const save = async (e: React.FormEvent) => {
        e.preventDefault()
        handleClose();
        const url = "http://localhost:3000/api/user/"
        console.log("update" + user.id);

        try {
            const res = await axios.put(`${url}`,
                {...user},
                {
                    headers: {
                        "user-id": "" + user.id
                    }
                }
            )
            userContext.userDispatch(
                {
                    type: 'UPDATE',
                    data: res.data
                })
        }
        catch (e: AxiosError | any) {
            if (e.response?.status === 401)
                alert(e.response.data.message);
            else if (!e.response.ok) {
                throw new Error(e.response.status + "" + e.response.data.message);
            }
        }
    }

    const [user, setUser] = useState<UserType>(userContext.user)

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <div>
            <Button onClick={handleOpen} color="inherit">Update</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update your details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form action="">
                            <div><TextField id="standard-basic" label="first Name" name="firstName" variant="standard"  value={user.firstName} onChange={handleChange} /></div>
                            <div><TextField id="standard-basic" label="last Name" name="lastName" variant="standard" value={user.lastName} onChange={handleChange} /></div>
                            <div><TextField id="standard-basic" label="email" name="email" variant="standard" value={user.email} onChange={handleChange} /></div>
                            <div><TextField id="standard-basic" label="password" name="password" variant="standard" value={user.password} onChange={handleChange} type="password"/></div>
                            <div><TextField id="standard-basic" label="address" name="address" variant="standard" value={user.address} onChange={handleChange} /></div>
                            <div><TextField id="standard-basic" label="phone" name="phone" variant="standard" value={user.phone} onChange={handleChange} /></div>
                            <div><Button onClick={(e: React.FormEvent) => save(e)} type='submit'>save</Button></div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
export default updateDetails