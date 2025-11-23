import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true }
});
export const Person = mongoose.model("people", PersonSchema);

const CarSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    model: { type: String, required: true, unique: true }
});
export const Car = mongoose.model("cars", CarSchema);

const PhoneSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    idpeople: { type: Number, ref: "people", required: true },
    number: { type: String, required: true, match: /^[0-9]{11}$/ }
});
export const Phone = mongoose.model("phones", PhoneSchema);

const CarByPersonSchema = new Schema({
    idcar: { type: Number, ref: "cars", required: true },
    idpeople: { type: Number, ref: "people", required: true }
});
export const CarByPerson = mongoose.model("car_by_person", CarByPersonSchema);
