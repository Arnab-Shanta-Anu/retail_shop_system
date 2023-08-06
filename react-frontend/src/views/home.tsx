import axios from "axios";
import { useEffect, useState } from "react";
import InvoiceTable from "../components/invoiceTable";

const Home = () => {
    const [customerList, setCustomerList] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);
    const [rows, setRows] = useState([
        {
            id: 1,
            details: "abc",
            price: 12.5,
            quantity: 5,
        },
        {
            id: 2,
            details: "def",
            price: 123,
            quantity: 3,
        },
    ]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/customers")
            .then((response) => setCustomerList(response.data));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/employees")
            .then((response) => setEmployeeList(response.data));
    }, []);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        console.log("Submit");
        //TODO: send data to database
    };

    const addRow = (newRow: any) => {
        setRows((oldRows) => [...oldRows, newRow]);
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        addRow({ id: 3, details: "ghi", price: 13, quantity: 4 });
    };

    const handleAddCustomer = (e: { preventDefault: () => void }) => {
        //TODO: add a customer to database
    };

    return (
        <form>
            <fieldset className="grid grid-cols-2 md:grid-cols-3">
                <label>Customer: </label>
                <select name="" id="">
                    {customerList.map((customer) => (
                        <option key={customer["id"]}>{customer["name"]}</option>
                    ))}
                </select>
                <button
                    className="rounded-md bg-rose-500 px-2 shadow-sm"
                    onClick={handleAddCustomer}
                >
                    Create
                </button>
            </fieldset>
            <InvoiceTable rows={rows} />
            <button
                className="rounded-md bg-blue-500 px-2 shadow-sm"
                onClick={handleAddItem}
            >
                add item
            </button>
            &nbsp;
            <button
                className="rounded-md bg-green-500 px-2 shadow-sm"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    );
};

export default Home;
