import axios from "axios";
import { LoaderFunctionArgs } from "react-router-dom";

export const getAccounts = async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/accounts`);

        return JSON.parse(data);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        throw new Error("Could not get the accounts.");
    }
};

export const getAccount = async ({ params }: LoaderFunctionArgs) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/accounts/${params.id}`);

        return JSON.parse(data);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        throw new Error("Account with this id is not found.");
    }
};
