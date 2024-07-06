import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin123456@e-commerce.1eezjw0.mongodb.net/coder-bank");
    console.log("Mongo Conectado");
    
  } catch (error) {
    console.log("Error al conectar Mongo");
  }
}