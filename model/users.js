import mongoose from "mongoose";

const User = mongoose.Schema({
    nip : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        default : "-"
    },
    email : {
        type : String,
        default : "-"
    },
    gender : {
        type : String,
        default : "-"
    },
    position : {
        type : String,
        required: true
    },
    address : {
        type : String,
        default : "-"
    },
    age : {
        type : String,
        default : "-"
    },
    password : {
        type : String,
        required: true
    },
},{
    timestamps: true
});

export default mongoose.model('Users' , User)