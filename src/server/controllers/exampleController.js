const CollectionName = require('../model/exampleModel.js');

module.exports = {
  getData: (req, res) => {
    CollectionName.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  addData: (req, res) => {
    const newData = req.body;

    CollectionName.create(newData)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  // editData: (req, res) => {
  //   CollectionName.findOneAndUpdate(req.body, { $set: { string: , number: , date: , } }, { new: true })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.sendStatus(404);
  //   })
  // },
  deleteData: (req, res) => {
    CollectionName.findOneAndRemove({ _id: req.body.memoId })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
};
