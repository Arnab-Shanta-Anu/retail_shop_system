import { useState } from "react";

const InvoiceTable = (props) => {
    const [total, setTotal] = useState(0);


    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th className=" border-2 border-black font-bitter">
                        Product id
                    </th>
                    <th className=" border-2 border-black font-bitter">
                        Details
                    </th>
                    <th className=" border-2 border-black font-bitter">
                        Price
                    </th>
                    <th className=" border-2 border-black font-bitter">
                        Quantity
                    </th>
                    <th className=" border-2 border-black font-bitter">
                        Total
                    </th>
                    <th className=" border-2 border-black font-bitter">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row: { [x: string]: number; }) => (
                    <tr key={row["id"]}>
                        <td className="border-2 border-black">{row["id"]}</td>
                        <td className="border-2 border-black">
                            {row["details"]}
                        </td>
                        <td className="border-2 border-black">
                            {row["price"]}
                        </td>
                        <td className="border-2 border-black">
                            {row["quantity"]}
                        </td>
                        <td className="border-2 border-black">
                            {row["price"] * row["quantity"]}
                        </td>
                        <td className="border-2 border-black">
                            <button
                                className="rounded-md bg-blue-500 px-2 shadow-sm"
                                onClick={()=>props.handleEdit(row["id"])}
                            >
                                edit
                            </button>
                            &nbsp;
                            <button
                                className="rounded-md bg-rose-500 px-2 shadow-sm"
                                onClick={()=>props.handleDelete(row["id"])}
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                ))}

                <tr>
                    <td colSpan={4} className="border-2 border-black">
                        Total
                    </td>
                    <td className="border-2 border-black">{total}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default InvoiceTable;
