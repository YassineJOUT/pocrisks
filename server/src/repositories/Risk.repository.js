import { client } from "../db/connect";

export const getRisksFromDb = async () => {
  const rs = await client.query("SELECT * FROM public.risk ORDER BY gid ASC");
  return rs.rows;
};
