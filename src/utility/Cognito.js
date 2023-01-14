import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';
import poolData from './cognito-pool-data';

const userPool = new CognitoUserPool(poolData)

export const createUser = (givenName, familyName, email, phoneNumber, password, callback) => {

    const attributeList = [
        new CognitoUserAttribute({ Name: 'given_name', Value: givenName }),
        new CognitoUserAttribute({ Name: 'family_name', Value: familyName }),
        new CognitoUserAttribute({ Name: 'phone_number', Value: phoneNumber }),
        new CognitoUserAttribute({ Name: 'email', Value: email }),
    ];

    userPool.signUp(email, password, attributeList, null, callback)
}

export const verifyUser = (username, verifyCode, callback) => {
    const userData = {
        Username: username,
        Pool: userPool,
    }
    const cognitoUser = new CognitoUser(userData)
    cognitoUser.confirmRegistration(verifyCode, true, callback)
}

export const authenticateUser = (email, password, callback) => {
    const authData = {
        Username: email,
        Password: password,
    }
    const authDetails = new AuthenticationDetails(authData)
    const userData = {
        Username: email,
        Pool: userPool,
    }
    const cognitoUser = new CognitoUser(userData)
    cognitoUser.authenticateUser(authDetails, {
        onSuccess: result => {
            console.log('access token + ' + result.getAccessToken().getJwtToken())
            callback(null, result)
        },
        onFailure: err => {
            callback(err)
        }
    })
}

export const signOut = () => {
    userPool.getCurrentUser().signOut()
    window.location.reload()
}

export const getCurrentUser = (callback) => {
    const cognitoUser = userPool.getCurrentUser()
    if (!cognitoUser) return false;

    cognitoUser.getSession((err, session) => {
        if (err) {
            console.log(err)
            return
        }

        console.log('Session valid?', session.isValid())
        console.log(session)

        cognitoUser.getUserAttributes((err, attributes) => {
            if (err) return console.log(err);
            callback(attributes)
        })
    })
}