import * as yup from "yup";
export const schemaAddCate = yup.object().shape({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    image: yup.string()
})