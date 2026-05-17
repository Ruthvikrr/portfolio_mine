import { pool } from './src/db.js'; 
async function run() { 
  await pool.query(`DELETE FROM kb_chunks WHERE metadata->>'type' IN ('fact', 'qa')`); 
  console.log('Deleted old facts'); 
  await pool.end(); 
} 
run();
