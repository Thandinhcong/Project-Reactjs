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