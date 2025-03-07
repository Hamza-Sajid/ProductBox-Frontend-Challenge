// React imports
import { ChangeEvent, FormEvent, useState } from "react";
// Third party import
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";
// Aoo imports
import { AddProductFormData } from "./types";
import { config } from "../../config/config";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import { toastMsg } from "../../constants/constant";


const ProductForm = () => {

    const [formData, setFormData] = useState<AddProductFormData>({
        name: '',
        price: '',
        img: ''
    });
    const [error, setError] = useState<string | null>(null);
    // To dynamically navigate
    const navigate = useNavigate();
    // Alerts
    const notifySuccess = () => toast.success(toastMsg.success);
    const notifyError = () => toast.warn(toastMsg.failure);

    // Handler to manage form state update
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handler to submit form data to server
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.serverPath}/items`, formData);
            notifySuccess();
            setTimeout(() => {
                navigate('/trending') // On success redirecting to /product page
            }, 1700);

        } catch (error) {
            setError('Error occured while adding product');
            notifyError();
        }
    };
    // If something went wrong show error screen
    if (error) return <ErrorScreen error={error} />;
    return (
        <>
            <fieldset className="fieldset w-auto bg-base-100 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend">New product form</legend>

                <label className="fieldset-label">Item Name</label>
                <input
                    value={formData.name}
                    onChange={handleChange}
                    name="name" type="text" className="input" placeholder="Thinkpad t480" />
                <label className="fieldset-label">Price</label>
                <input
                    value={formData.price}
                    onChange={handleChange}
                    name="price" type="number" className="input" placeholder="R.s 76000" />
                <label className="fieldset-label">Image URL</label>
                <input
                    value={formData.img}
                    onChange={handleChange}
                    name="img" type="text" className="input" placeholder="gitty.img-url.com/ddz8" />
                <button className="btn btn-neutral mt-4" type="submit" onClick={handleSubmit}>Submit</button>
            </fieldset>
            <ToastContainer autoClose={1500} />
        </>
    )
}

export default ProductForm
