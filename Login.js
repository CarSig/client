import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./components/context/GlobalState";
import axios from "axios";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
const Login = () => {


    const [values, setValues] = useState({ username: "lb", password: "123456" });
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const { setUser, user, setSignedIn, setRoute } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const handleChange = (input) => (e) => {
        setValues({ ...values, [input]: e.target.value });
    };

    const loginUser = async (e) => {
        e.preventDefault();
        const payload = {
            username: values.username,
            password: values.password,
        };

        const response = await axios({
            url: "/api/login",
            method: "POST",
            data: payload,
        });

        const data = await response;

        // AUTHENTICATION 2
        if (data.data.user) {
            const userLog = await data.data.userData
            localStorage.setItem("token", data.data.user);
            localStorage.setItem("userData", JSON.stringify(data.data.userData));
            localStorage.setItem("username", payload.username);
            setUser(userLog);
            setInvalidCredentials(false);

        } else {
            setInvalidCredentials(true);
        }
        setRoute("/")
        setSignedIn(true)
        return data
    };


    loginUser()

    return (
        <View>
            <Text>Loghin</Text>
        </View>

    );
};

export default Login;