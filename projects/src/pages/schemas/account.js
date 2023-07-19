
import * as yup from "yup";
export const schemaUser = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    email: yup.string().email("Email không đúng định dạng").required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6, "Tối thiểu 6 kí tự").typeError("Tối thiểu 6 kí tự"),
    numberPhone: yup.number().min(9).typeError("Tối thiểu 9 số").required("Trường dữ liệu bắt buộc"),
    gender: yup.string(),
    address: yup.string().required("Trường dữ liệu bắt buộc"),
    date: yup.date()
})