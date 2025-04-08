import app from './src/app.js';
import connectDB from './src/config/db.js';
import config from './src/config/env.js';


connectDB();

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});


process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});
