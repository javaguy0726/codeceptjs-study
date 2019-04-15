// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    /**
     * cell的中心点坐标
     * 
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellCenter: function (row, col, canvas) {
      const {x:cellX, y:cellY, width:cellWidth, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX+cellWidth/2, 
            y:cellY+canvasY+cellHeight/2
          }

    },

    /**
     * cell左上角坐标
     * 
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellLeftTop: function (row, col, canvas) {
      const {x:cellX, y:cellY} = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX, 
            y:cellY+canvasY
          }

    },

    /**
     * cell接近左上角（出现手型的位置）
     * 
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellNearlyLeftTop: function (row, col, canvas) {
      const {x:cellX, y:cellY, width:cellWidth, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX+cellWidth/20, 
            y:cellY+canvasY+cellHeight/20
          }

    },

    /**
     * cell靠近右中（三角下拉箭头显示的位置）
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellNearlyRightMiddle: function (row, col, canvas) {
      const {x:cellX, y:cellY, width:cellWidth, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX+(cellWidth*7)/8, 
            y:cellY+canvasY+cellHeight/2
          }

    },
    
    /**
     * cell右中
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellRightMiddle: function (row, col, canvas) {
      const {x:cellX, y:cellY, width:cellWidth, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX+cellWidth, 
            y:cellY+canvasY+cellHeight/2
          }

    },

    /**
     * cell下中
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellCenterBottom: function (row, col, canvas) {
      const {x:cellX, y:cellY, width:cellWidth, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX+cellWidth/2, 
            y:cellY+canvasY+cellHeight
          }

    },

    /**
     * cell左中
     * 
     * @param {*} row 
     * @param {*} col 
     * @param {*} canvas 
     */
    async coorCellLeftMiddle: function (row, col, canvas) {
      const {x:cellX, y:cellY, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX, 
            y:cellY+canvasY+cellHeight/2
          }

    },

    async coorRowMiddle: function (row, canvas) {
      const {x:cellX, y:cellY, width:cellWidth, height:cellHeight } = await this.apiGetCellRect(row, col)
      const {x:canvasX, y:canvasY} = await this.elementGetLocation(canvas)

      return {
            x:cellX+canvasX, 
            y:cellY+canvasY+cellHeight/2
          }

    },

  })
}
