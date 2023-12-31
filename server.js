const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const AuthRouter = require("./routes/AuthRouter")
const RentalRouter = require("./routes/RentalRouter")
const ReviewRouter = require("./routes/ReviewRouter")
const ReservationRouter = require("./routes/ReservationRouter")
const ComingSoonRouter = require("./routes/ComingSoonRouter")

const PORT = process.env.PORT || 3001

const db = require("./db")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/auth", AuthRouter)
app.use("/rentals", RentalRouter)
app.use("/reviews", ReviewRouter)
app.use("/reservations", ReservationRouter)
app.use("/comingsoon", ComingSoonRouter)

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
