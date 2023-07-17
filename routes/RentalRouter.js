const router = require("express").Router()
const controller = require("../controllers/RentalController")
const middleware = require("../middleware")

router.get("/all", controller.GetRentals)
router.post(
  "/all",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateRental
)
router.put(
  "/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateRental
)
router.delete(
  "/:rental_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteRental
)

module.exports = router