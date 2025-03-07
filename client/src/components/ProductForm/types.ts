import * as Yup from 'yup';

export interface AddProductFormData {
    name: string;
    price: number;
    img: string;
}


// Validation Schema
export const productValidationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name should be at least 3 character long'),
    price: Yup.number()
        .required('Price is required')
        .positive('Enter valid number'),
    img: Yup.string()
        .required('Image URL is required')
        .min(10, 'Enter valid URL'),
});

   
   export const productFormInitialValues = {
    name: '',
    price: 0,
    img: ''
};