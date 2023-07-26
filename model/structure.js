import mongoose from "mongoose";

const Structures = mongoose.Schema({
    food : {
        type : Number,
        required: true
    },
    drink : {
        type : Number,
        required: true
    },
    admin : {
        type : Number,
        required: true
    },
    developer : {
        type : Number,
        required: true
    },
    officeBoy : {
        type : Number,
        required: true
    },
    cashier : {
        type : Number,
        required: true
    },
    waiters : {
        type : Number,
        required: true
    },
});

export default mongoose.model('Structures' , Structures);