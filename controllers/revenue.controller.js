const { Revenues } = require("../models");
const sequelize = require("sequelize");

// fungsi mengambil angka bulan dan mengembalikan nama bulan
const getMonthName = (monthNumber) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[monthNumber - 1];
};

const getAllRevenues = async (req, res) => {
  const revenues = await Revenues.findAll({
    attributes: [
      // menentukan kolom yang ingin diambil ok
      [sequelize.fn("SUM", sequelize.col("total")), "total"],
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
    ], // mengelompokkan data berdasarkan tahun dan bulan ok
    group: [
      [sequelize.fn("YEAR", sequelize.col("createdAt"))],
      [sequelize.fn("MONTH", sequelize.col("createdAt"))],
    ],
  });

  // untuk mengubah angka bulan ke nama bulan
  const formattedRevenues = revenues.map((revenue) => ({
    total: revenue.get("total"),
    year: revenue.get("year"),
    month: getMonthName(revenue.get("month")),
  }));

  return res.status(200).json(formattedRevenues);
};

module.exports = {
  getAllRevenues,
};
