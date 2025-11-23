import mongoose, { Schema } from "mongoose";

const DistrictSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    idcity: { type: Number, required: true }
});

const CitySchema = new Schema({
    id: { type: Number, required: true },
    idstate: { type: Number, required: true },
    name: { type: String, required: true },
    districts: [DistrictSchema]
});

const StateSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    cities: [CitySchema]
});

export const State = mongoose.model("states", StateSchema);
