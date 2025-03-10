
// {
//   "name": "express-bookings",
//   "version": "1.0.0",
//   "type": "module",
//   "description": "Your REST API for managing bookings",
//   "main": "src/index.js",
//   "prisma": {
//     "seed": "node ./prisma/seed.js"
//   },
//   "scripts": {
//     "dev": "nodemon src/index.js",
//     "test-positive": "newman run \"./postman/collections/Bookings API.json\" -e \"./postman/environments/Local.postman_environment.json\"",
//     "test-negative": "newman run \"./postman/collections/Bookings API Negative.json\" -e \"./postman/environments/Local.postman_environment.json\"",
//     "test": "npm run test-positive && npm run test-negative"
//   },
//   "author": "Dre",
//   "license": "ISC",
//   "dependencies": {
//     "@prisma/client": "^5.11.0",
//     "@sentry/node": "^7.64.0",
//     "dotenv": "^16.4.5",
//     "express": "^4.18.2",
//     "jsonwebtoken": "^9.0.2",
//     "uuid": "^9.0.0",
//     "winston": "^3.10.0"
//   },
//   "devDependencies": {
//     "newman": "^6.1.2",
//     "nodemon": "^3.0.1",
//     "prisma": "^5.11.0"
//   },
//   "engines": {
//     "node": ">=18 <19"
//   }
// }
