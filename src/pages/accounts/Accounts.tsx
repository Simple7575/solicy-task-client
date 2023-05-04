import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Accounts as AccountsType } from "../../types/account";

export default function Accounts() {
    const accounts = useLoaderData() as AccountsType;

    return (
        <>
            <h2 className="mb-4 text-3xl text-center font-bold tracking-tight sm:text-5xl">
                Accounts
            </h2>
            <div className="overflow-x-auto flex flex-col items-center content-center">
                <table className="table table-zebra w-full border border-indigo-600 max-w-2xl text-xs sm:text-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Created On</th>
                            <th>Owner</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => {
                            return (
                                <tr key={account.id}>
                                    <td>{account.id}</td>
                                    <td>{account.name}</td>
                                    <td>{new Date(account.created_at).toLocaleString()}</td>
                                    <td>{account.owner}</td>
                                    <td>
                                        <Link
                                            to={`${account.id}`}
                                            className="btn btn-ghost btn-xs border-indigo-600"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
