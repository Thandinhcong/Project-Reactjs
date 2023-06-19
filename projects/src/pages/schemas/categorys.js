import * as yup from "yup";
export const schemaAddCate = yup.object().shape({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    products: yup.array(),
    image: yup.string().required("Trường dữ liệu bắt buộc")
})