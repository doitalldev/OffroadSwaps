import express from "express"
const app = express()
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()
connectDB()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("api running")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(
  process.env.PORT || 5000,
  console.log(
    `server running on port ${process.env.PORT} and server running in ${process.env.NODE_ENV}`
  )
)
