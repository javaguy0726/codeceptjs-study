// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    coorCellCenter: function (row, col, canvas) {
      const { cellX, cellY } = this.apiGetCellRect(row, col)

    },

  })
}
