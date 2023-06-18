import * as yup from "yup";
export const schemaSignup = yup.object().shape({
    name: yup.string('Tên phải là một chuỗi').min(6, 'Tối thiểu 6 kí tự').required("Tên không được để trống"),
    email: yup.string().email().required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Mật khẩu không khớp"),
})
export const schemaSignin = yup.object().shape({
    email: yup.string().email('Email không đúng định dạng').required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6, 'Tối thiểu 6 kí tự').required("Trường dữ liệu bắt buộc"),
})
export const schmeAddProduct = yup.object().shape({
    name: yup.string().min(6, 'Tối thiểu 6 kí tự').max(50, 'Tối đa 50 kí tự').required("Trường dữ liệu bắt buộc"),
    price: yup.number().typeError("Phải là một số").positive("Phải là một số dương").min(4, "Tối thiểu 5 số").required("Trường dữ liệu bắt buộc"),
    original_price: yup.number().typeError("Phải là một số").positive("Phải là một số dương").min(4, "Tối thiểu 5 số").required("Trường dữ liệu bắt buộc"),
    image: yup.string().required('Trường dữ liệu bắt buộc'),
    categoryId: yup.string().required("Trường dữ liệu bắt buộc"),
    size: yup.string(),
    quantity: yup.number().typeError("Phải là một số").min(1, "Phải lớn hơn 1").max(999).required("Trường dữ liệu bắt buộc"),
    description: yup.string().min(50, "Tối kiểu 50 kí tự").max(225, "Tối đa 225 kí tự").required('Trường dữ liệu bắt buộc'),
    salient_features: yup.string().min(50, "Tối thiểu 50 kí tự").max(225, "Tối đa 50 kí tự").required('Trường dữ liệu bắt buộc'),
})