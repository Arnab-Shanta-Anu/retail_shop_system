import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/customers")
            .then((response) => setCustomerList(response.data));
    }, []);

    const spawnRow = () => {
        const tableRow = [
            <td className="border-2 border-black">
                <input type="text" value="p-1234" />
            </td>,
            <td className="border-2 border-black">abc</td>,
            <td className="border-2 border-black">50</td>,
            <td className="border-2 border-black">3</td>,
            <td className="border-2 border-black">150</td>,
        ];
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
                <fieldset className="grid grid-cols-2 md:grid-cols-3">
                    <label>Customer: </label>
                    <select className="min-w-max">
                        {customerList.map((customer) => (
                            <option key={customer["id"]}>
                                {customer["name"]}
                            </option>
                        ))}
                    </select>
                    <button className="col-span-2 rounded-md bg-rose-500 px-2 shadow-sm md:col-span-1">
                        Create
                    </button>
                </fieldset>
                <table>
                    <thead>
                        <tr>
                            <th className="border-2 border-black font-bitter">
                                Product id
                            </th>
                            <th className="border-2 border-black font-bitter">
                                Details
                            </th>
                            <th className="border-2 border-black font-bitter">
                                Price
                            </th>
                            <th className="border-2 border-black font-bitter">
                                Quantity
                            </th>
                            <th className="border-2 border-black font-bitter">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="border-2 border-black">
                            <input type="text" value="p-1234" />
                        </td>
                        <td className="border-2 border-black">abc</td>
                        <td className="border-2 border-black">50</td>
                        <td className="border-2 border-black">3</td>
                        <td className="border-2 border-black">150</td>
                    </tbody>
                </table>
                <button
                    onClick={spawnRow}
                    className="mx-auto w-fit rounded-md bg-blue-500 px-4 shadow-sm"
                >
                    +
                </button>
                <button className="rounded-md bg-green-500 px-2 shadow-sm">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Home;
