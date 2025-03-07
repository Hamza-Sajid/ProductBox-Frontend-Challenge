// React imports
import { useState } from "react";
// Third party import
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
// Aoo imports
import { AddProductFormData, productFormInitialValues, productValidationSchema } from "./types";
import { config } from "../../config/config";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import { toastMsg } from "../../constants/constant";


const ProductForm = () => {

    const [error, setError] = useState<string | null>(null);
    // To dynamically navigate
    const navigate = useNavigate();
    // Alerts
    const notifySuccess = () => toast.success(toastMsg.success);
    const notifyError = () => toast.warn(toastMsg.failure);

    // Handler to submit form data to server
    const handleSubmit = async (value: AddProductFormData) => {
        console.log('running')
        try {
            const response = await axios.post(`${config.serverPath}/items`, value);
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
            <Formik
                initialValues={productFormInitialValues}
                validationSchema={productValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <fieldset className="fieldset w-auto bg-base-100 border border-base-300 p-4 rounded-box">
                        <legend className="fieldset-legend">New product form</legend>

                        <label htmlFor="name" className="fieldset-label">Item Name</label>
                        <Field
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Thinkpad t480"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                        <label htmlFor="price" className="fieldset-label">Price</label>
                        <Field
                            name="price"
                            type="number"
                            className="input"
                            placeholder="R.s 76000"
                        />
                        <ErrorMessage name="price" component="div" className="text-red-500" />
                        <label htmlFor="img" className="fieldset-label">Image URL</label>
                        <Field
                            name="img"
                            type="text"
                            className="input"
                            placeholder="gitty.img-url.com/ddz8"
                        />
                        <ErrorMessage name="img" component="div" className="text-red-500" />
                        <button className="btn btn-neutral mt-4" type="submit">Submit</button>
                    </fieldset>
                </Form>
            </Formik>
            <ToastContainer autoClose={1500} />
        </>
    )
}

export default ProductForm
