import React, { useState } from "react";
import UserPool from "./UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        let attributeGivenName = new CognitoUserAttribute( { Name:'given_name', Value: "Daniel" });
        let attributeFamilyName = new CognitoUserAttribute({ Name:'family_name', Value: "Habig"});
        let attributePhoneNumber = new CognitoUserAttribute({ Name:'phone_number', Value: "+13174485192"});
        let attributeEmail = new CognitoUserAttribute({ Name:'email', Value: email });

        let attributeList = [
            attributeGivenName,
            attributeFamilyName,
            attributePhoneNumber,
            attributeEmail
        ];

        UserPool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);

        });

    };

    return (
        <div>
            <form onSubmit={onSubmit}> 
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>

                <button type="submit">Signup</button>
            </form>
        </div>
    )
};

export default Signup;