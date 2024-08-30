import {Employee} from '../models/employee.model.js'

export const createEmployee = async(req,res)=>{

 const {name,email,department,designation,salary}=req.body
 try {
    if(!name || !email || !department || !designation ||!salary){
       throw new Error('All fields are required')
      //return res.satus(400).send({message:'All filed are required'})
     }
     const newEmployee ={
        name,
        email,
        department,
        designation,
        salary
     }
     const employee = await Employee.create(newEmployee)
     return res.status(201).send(employee)
 } catch (error) {
    res.status(500).send({message:error.message})
 }
 

}
export const  getEmployee = async (req,res)=>{
   try {
      const employees = await Employee.find({})
      return  res.status(201).json({
         count:employees.length,
         data:employees
      })
   } catch (error) {
      console.log(error.message)
      res.status(500).send({message:error.message})
   }
}
export const getEmployeeById = async (req,res)=>{
   try {
      const {id} = req.params
      const employee = await Employee.findById(id)
      return res.status(201).json(employee)
   } catch (error) {
      console.log(error.message)
      res.status(500).send({message:error.message})
   }
}
export const updateEmployee = async (req,res)=>{
   const {name,email,department,designation,salary}=req.body
   try {
      if(!name || !email || !department || !designation ||!salary){
         throw new Error('All fields are required')
        //return res.satus(400).send({message:'All filed are required'})
       }
      const {id} = req.params
      const result = await Employee.findByIdAndUpdate(id,req.body)
      if(!result){
         res.status(404).json({message:'Employee not found'})
      }
      return res.status(200).send({message:'Employee updated succesfully'})

   } catch (error) {
      console.log(error.message)
      res.status(500).send({message:error.message})
   }

}
export const deleteEmployee = async (req,res)=>{
   try {
      const {id}=req.params
      const result = await Employee.findByIdAndDelete(id)
      if(!result){
         res.status(400).json({message:'Employee not found'})
      }
      res.status(201).send({message:'Employee Deleted Successfully'})
   } catch (error) {
      return res.status(500).send({message:error.message})
   }

}


