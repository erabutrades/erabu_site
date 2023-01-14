import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
    UserPoolId: "us-east-1_3NTct3H57",
    ClientId: "1mmcd47im69nuke20q71tjo03"
}

export default new CognitoUserPool(poolData);