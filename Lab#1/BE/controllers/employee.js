const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  const index = employee.findIndex((employee) => employee.id === id);
  employee.splice(index, 1);
  res.status(200)
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  const employeeExists = employee.find((employee) => employee.id === id);
  if (employeeExists) {
    res.status(400);
    
  }
  else{
      employee.push({ id, name });
      res.status(201);
  }
};
