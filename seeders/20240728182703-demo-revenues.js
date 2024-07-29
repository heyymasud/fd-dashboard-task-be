"use strict";

const { literal } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("revenues", [
      {
        total: 4521,
        description: "Test 1",
        createdAt: "2023-01-25",
        updatedAt: new Date(),
      },
      {
        total: 2134,
        description: "Test 2",
        createdAt: "2023-02-25",
        updatedAt: new Date(),
      },
      {
        total: 521,
        description: "Test 3",
        createdAt: "2023-03-15",
        updatedAt: new Date(),
      },
      {
        total: 2850,
        description: "Test 4",
        createdAt: "2023-03-25",
        updatedAt: new Date(),
      },
      {
        total: 5200,
        description: "Test 5",
        createdAt: "2023-04-25",
        updatedAt: new Date(),
      },
      {
        total: 8500,
        description: "Test 6",
        createdAt: "2023-05-25",
        updatedAt: new Date(),
      },
      {
        total: 5500,
        description: "Test 7",
        createdAt: "2023-06-25",
        updatedAt: new Date(),
      },
      {
        total: 5211,
        description: "Test 8",
        createdAt: "2023-07-25",
        updatedAt: new Date(),
      },
      {
        total: 4533,
        description: "Test 9",
        createdAt: "2023-08-25",
        updatedAt: new Date(),
      },
      {
        total: 7500,
        description: "Test 10",
        createdAt: "2023-09-25",
        updatedAt: new Date(),
      },
      {
        total: 3656,
        description: "Test 11",
        createdAt: "2023-10-15",
        updatedAt: new Date(),
      },
      {
        total:8500,
        description: "Test 12",
        createdAt: "2023-10-25",
        updatedAt: new Date(),
      },
      {
        total: 4520,
        description: "Test 13",
        createdAt: "2023-11-15",
        updatedAt: new Date(),
      },
      {
        total: 5602,
        description: "Test 14",
        createdAt: "2023-11-25",
        updatedAt: new Date(),
      },
      {
        total: 4520,
        description: "Test 15",
        createdAt: "2023-12-25",
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
