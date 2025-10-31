import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI not set. Please create a .env with MONGODB_URI.');
  }
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, {
    dbName: 'Portfolio'
  });
  console.log('✅ MongoDB connected:', mongoose.connection.host, 'DB:', mongoose.connection.name);
};

export default connectDB;
