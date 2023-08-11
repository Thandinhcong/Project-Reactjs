import User from "../model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import { signinSchema, signupSchema } from "../schemas/auth";
import dotenv from 'dotenv';
dotenv.config();
export const getUser = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(400).json({
                message: "không có tài khoản nào",
            })
        }
        return res.status(200).json({

            users,
        })
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server",
        })
    }
}
export const getOneUser = async (req, res) => {
    try {
        const users = await User.findOne({ _id: req.params.id });
        if (!users) {
            return res.status(400).json({
                message: "không có tài khoản nào",
            })
        }
        return res.status(200).json({
            users,
        })
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server",
        })
    }
}
export const checkEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ email });
        if (user) {
            res.json({
                exists: true,
                message: 'Email already exists'
            });
        } else {
            res.json({
                exists: false,
                message: 'Email is available'
            });
        }
    } catch (error) {

    }
}
export const deleteUser = async (req, res) => {
    try {
        const users = await User.findByIdAndRemove(req.params.id);
        if (!users) {
            return res.status(400).json({
                message: "Khoogn có tài khoản nào",
            })
        } else {
            return res.status(200).json({
                message: "Xóa thành công tài khoản",
            })
        }
    } catch (error) {

    }
}
export const UpdateUser = async (req, res) => {
    try {

        const data = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!data) {
            res.status(400).json({
                message: "Tài khoản không tồn tại",
            })
        }
        else {
            res.status(200).json({
                message: "update User successfully",
                data: data,
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "có lỗi zảy ra",
        })
    }
}
export const signup = async (req, res) => {
    try {
        //validate đầu vào
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.map((err) => err.message)
            return res.status(400).json({
                message: errors,
            })
        }
        //kiểm tra tài khoản có trong db hay không ?
        const userExits = await User.findOne({ email: req.body.email });
        if (userExits) {
            return res.status(400).json({
                message: "email đã tồn tại",
            })
        }
        // mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(req.body.password, 11);
        // tạo tài khoản mới
        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });
        // B4: Tạo token mới chứa id của user
        // tạo token , expiresIn trong khoảng thời gian bao nhiêu lâu ?
        const token = jwt.sign({ id: user._id }, "danhsapwebtruong", { expiresIn: "1d" });
        user.password = undefined;
        return res.status(201).json({
            message: "Tạo tài khoản thành công",
            accessToken: token,
            user,
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }

}

export const signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                messages: errors,
            });
        }
        // kiểm tra email có tồn tại hay không
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                messages: "Email không tồn tại",
            });
        }
        // kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                messages: "Sai mật khẩu",
            });
        }

        // tạo tuken

        const token = jwt.sign({ id: user._id }, "danhsapwebtruong", { expiresIn: "1d" });
        user.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            accessToken: token,
            user,
        });
    } catch (error) { }
};
export const sendMails = async (req, res) => {
    const email = await req.body.email;
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({
            messages: "Email không tồn tại",
        });
    }
    const password = user.password;
    var transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        service: 'gmail',
        secure: true,
        port: 587,
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });

    await transporter.sendMail({
        from: 'thandv03@gmail.com',
        to: `${email}`,
        subject: 'Thandinhclothes xin thông báo ',
        text: `Mật khẩu của bạn là :${password} `
    })
    res.status(200).json({
        message: "Đã gửi email thành công"
    })
}