const DepartmentModel = require('../models/DepartmentModel.js');

class Department {

    constructor(Department_obj){
        this._Department = Department_obj;
    }

    get id(){
        return this._Department.id;
    }

    get department(){
        return this._Department.department
    }
    
    set department(department){
        this._Department.department = department;
    }

    async insert(){
        const results = await DepartmentModel.insert(this._Department);
        this._Department.id = results.insertId;
    }

    async getAll(){
        this._Department = await DepartmentModel.selectAll();
    }

    async getById(id){
        this._Department = await DepartmentModel.selectByID(id);
    }

    async merge(new_Department){
        this._Department = {...this._Department, ...new_Department}
    }

    async update(id){
        await DepartmentModel.update(id, this._Department);
    }

    getLiteral(){
        return this._Department;
    }
}

module.exports = Department;