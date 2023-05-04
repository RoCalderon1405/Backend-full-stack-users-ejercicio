import Employee from "../models/Employee.js";
import User from "../models/user.js";

const Query = {
  async getEmployees() {
    const employees = Employee.find();
    return employees;
  },
  async findByName(_, { name }) {
    const employee = await Employee.find({name});
    return employee;
  },

  async login(_,{email,password}) {
    const verifyUser = await User.findOne( { email, password })   //[]
    console.log(verifyUser)
    return verifyUser
  }
};

export default Query