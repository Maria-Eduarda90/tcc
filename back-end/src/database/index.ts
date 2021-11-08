import { createConnection } from 'typeorm';

// async function createConnectionUpdate(){
//     const connection = await createConnection();

// await connection.query('PRAGMA foreign_keys=OFF');
// await connection.synchronize();
// await connection.query('PRAGMA foreign_keys=ON');
// }

// createConnectionUpdate();
createConnection();