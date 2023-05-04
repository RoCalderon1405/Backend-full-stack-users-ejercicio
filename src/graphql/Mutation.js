import Employee from "../models/Employee.js";
import User from "../models/user.js";

const Mutation = {
  async createEmployee(_, { name, age, position, code }) {
    const newEmployee = { name, age, position, code };
    const employee = await Employee.create(newEmployee); //returns {}
    return await Employee.find();
  },
  async updateEmployee(_, { _id, name, age, position, code }) {
    const employee = { name, age, position, code };
    return await Employee.findByIdAndUpdate(_id, employee, { new: true });
  },
  //Delete
  async deleteEmployee(_, { _id }) {
    const employee = await Employee.findByIdAndDelete(_id);
    if (!employee) {
      throw new Error("No employee found");
    } else {
      return await Employee.find();
    }
  },

  // Create User
  async createUser(_, {email, password}) {
    const newUser = {email, password}
    const userCreated = await User.create( newUser ); 
    return await User.find()
  }
};

export default Mutation;
