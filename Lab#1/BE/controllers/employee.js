const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  let index = employee.findIndex(function(element) {{
    if (element.id === req.params.id)
    {
      return true;
    }
    return false;
  }});
  let spliced = employee.splice(index, 1);
  console.log("Element removed: ", spliced);
  res.status(200);
};

// TODO
exports.createEmployee = async (req, res, next) => {
  let Emp = {id: req.body.ID, name: req.body.Name}
  employee.push(Emp);
  res.status(200);
};
