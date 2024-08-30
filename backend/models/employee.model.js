import mongoose from 'mongoose'
const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    department:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
    },
    dateOfJoining:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        default:'Active'
    },
    address:String,
    phone_No:String
},{timestamps:true})

export const Employee = mongoose.model('Employee',EmployeeSchema)