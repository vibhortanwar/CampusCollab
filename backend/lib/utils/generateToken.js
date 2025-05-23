import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId},process.env.JWT_USER_PASSWORD, {
        expiresIn: '15d'
    })
    res.cookie("jwt",token,{
        maxAge: 15*24*60*50*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    })
}

export {generateTokenAndSetCookie}