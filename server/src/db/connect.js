import { Client } from "pg";
import conf from "dotenv";
conf.config();

export const client = new Client();

client.connect();


export const getRisksFromDb = async () => {
   const rs =  await client.query("SELECT * FROM public.risk ORDER BY gid ASC");
   console.log("Result set", rs.rows);
   return res.rows;
}
// client.query("SELECT * FROM public.risk ORDER BY gid ASC", null, (err, res) => {
//   console.log(err ? err.stack : res.rows); // Hello World!
//   client.end();
// });
