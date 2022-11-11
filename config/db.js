// import mongoose from 'mongoose'

// export const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`MongoDB Connected: ${connect.connection.host}`)
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }
// }

// const startServer = async () => {
//     try {
//         await connectDB()
//         app.listen(PORT, () => {
//             console.log(`App is running on port ${PORT} `)
//         })

//     } catch (error) {
//         console.log(error)
//     }
// }

// startServer()