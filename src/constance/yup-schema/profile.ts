import * as yup from "yup";

export const profileSchema = yup.object({
  "first-name": yup.string().min(3).trim().required("請輸入姓氏"),
  "last-name": yup.string().trim().required("請輸入名稱"),
  "e-mail": yup
    .string()
    .email("請輸入一個有效電郵地址")
    .required("請輸入電郵地址"),
});
