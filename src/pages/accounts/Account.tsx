import { Link } from "react-router-dom";
import { Account as AccountInterface } from "../../types/account";
import { useLoaderData } from "react-router-dom";

export default function Account() {
    const account = useLoaderData() as AccountInterface;

    return (
        <>
            <h2 className="mt-4 mb-4 text-3xl text-center font-bold tracking-tight sm:text-5xl">
                Account
            </h2>
            <div className="overflow-x-auto flex flex-col items-center gap-2">
                <table className="table table-zebra w-full border border-indigo-600 max-w-2xl">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{account.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{account.name}</td>
                        </tr>
                        <tr>
                            <th>Owner</th>
                            <td>{account.owner}</td>
                        </tr>
                        <tr>
                            <th>Created On</th>
                            <td>{new Date(account.created_at).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th>Updated On</th>
                            <td>{new Date(account.updated_at).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
                <Link
                    to="/accounts"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                    //  className="btn btn-accent btn-outline btn-xs"
                >
                    Back
                </Link>
            </div>
        </>
    );
}
