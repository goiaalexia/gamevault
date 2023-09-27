import React, {useRef, useState} from "react";
import {ErrorMessages, LoginProps, UserLogin} from "../models/videogame";
import {FormControl, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Login: React.FC<LoginProps> = ({setUserLoginCallback}) => {

    // React States
    const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef(null)
    const [selection, setSelection] = useState<UserLogin>({username: "", password: ""});

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "Invalid Username!",
        pass: "Invalid Password!"
    };

    const handleSubmit = (event: any) => {
        //Prevent page reload
        event.preventDefault();

        // Find user login info
        const userData = database.find((user) => user.username === selection.username);

        // Compare user info
        if (userData) {
            if (userData.password !== selection.password) {
                // Invalid password
                setErrorMessages({name: "pass", message: errors.pass});
            } else {
                setIsSubmitted(true);
                console.log("Authentication successful!")
                setUserLoginCallback(userData);
            }
        } else {
            // Username not found
            setErrorMessages({name: "uname", message: errors.uname});
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name: any) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    return (
        <FormControl className='my-3' ref={form}  sx={{
            'display': 'flex',
            'flex-direction': 'column',
            'padding': '5px',
            'alignItems':'center',
            'justifyContent': 'center',
            'justify':'center',
            'maxwidth':'200px',
            'maxheight':'fit-content'

        }}>
            <h4 className='my-3'>
                <center>Sign In</center>
            </h4>
            <Container component="main" maxWidth="xs"  sx={{
                'display': 'flex',
                'flex-direction': 'column',
            }}>
                <TextField label="username" value={selection.username ? selection.username : ""}
                           onChange={(e) => {
                               setSelection({...selection!, username: e.target.value}
                               )
                           }} sx={{'padding': '5px'}}
                           type="text" placeholder="" variant={"filled"}/>{renderErrorMessage("uname")}
                <TextField label="password" value={selection.password ? selection.password : ""}
                           onChange={(e) => {
                               setSelection({...selection!, password: e.target.value}
                               )
                           }} sx={{'padding': '5px'}}
                           type="password" placeholder="" variant={"filled"}/>{renderErrorMessage("pass")}

                <Button variant={"contained"} color={"primary"} sx={{'padding': '5px'}}
                        onClick={handleSubmit}>Login</Button>
            </Container>
        </FormControl>

    );

}

export default Login;