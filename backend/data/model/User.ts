import { Schema, model } from "mongoose";

const user = new Schema({
  name: {
    type: String,
    required: [true, "Имя обязательно для заполнения"],
    minlength: [2, "Имя должно быть минимум из 2 букв"],
    match: [/^[а-яА-Яa-zA-Z\s]+$/, "Имя должно состоять из букв"],
  },
  email: {
    type: String,
    unique: [true, "Пользователь с таким email уже существует"],
    required: [true, "Email обязателен для заполнения"],
    match: [/.+@.+\..+/, "Неверный формат email"],
  },
  password: {
    type: String,
    required: [true, "Введите пароль"],
    minlength: [6, "Минимальная длина пароля - 6 символов"],
  },
});

const User = model("User", user);

export default User;
