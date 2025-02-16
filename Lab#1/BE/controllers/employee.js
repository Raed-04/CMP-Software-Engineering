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
  res.status(200).json("done");
};

// TODO
exports.createEmployee = async (req, res, next) => {
  let index = employee.findIndex(function(element) {{
    if (element.id === req.body.ID)
    {
      return true;
    }
    return false;
  }});
  if (index === -1)
  {
    let Emp = {id: req.body.ID, name: req.body.Name}
    employee.push(Emp);
    console.log("Element Added: ", Emp);
    res.status(200).json("done");
  }
  else
  {
    console.log("ID can't be repeated!")
    res.status(400).json("failed");
  }
};
