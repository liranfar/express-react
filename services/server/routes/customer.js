const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const Customer = require('../models/Customer');

// @route GET api/v1/customers
// @dec Get all customers
// @access Public
router.get('/', (req, res) => {
  Customer.find()
    .sort({ date: -1 })
    .then(customers => res.json(customers));     
});

// @route POST api/v1/customers
// @dec Create a Customer
// @access Public
router.post('/', (req, res) => {
  const newCustomer = new Customer({
    name: req.body.name
  });

  newCustomer.save().then(
    customer =>
      res.json(customer)
  );
});

// @route   DELETE api/customers/:id
// @desc    Delete A Customer
// @access  Public
router.delete('/:id', (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => customer.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;