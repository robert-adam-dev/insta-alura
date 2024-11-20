import { MongoClient } from 'mongodb';

export default async function connectDatabase(stringConexao) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(stringConexao);
      console.log('Establishing connection to the database...');
      await mongoClient.connect();
      console.log('Successfully connected to MongoDB Atlas!');

      return mongoClient;
  } catch (error) {
      console.error('Failed to connect to the database.', error);
      process.exit();
  }
}