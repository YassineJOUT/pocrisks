const { db } = require("../db/seqConnect");

export const getRisksFromDb = async () => {
  const rs = await db.query(
    "SELECT json_build_object('type', 'FeatureCollection', 'features', json_agg(ST_AsGeoJSON(t.*)::json))  FROM (SELECT * FROM public.risks) as t;"
  );
  return rs[0][0].json_build_object;
};
