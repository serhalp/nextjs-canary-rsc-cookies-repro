import { NextRequest } from "next/server";

export const runtime = "edge";

export default (req: NextRequest) => {
  return Response.json(Object.fromEntries(req.headers.entries()), {
    headers: {
      "headers-from-edge-function": "1",
    },
  });
};
