import type { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (req: NextRequest, res: any) => {
  return res
    .status(200)
    .setHeader("headers-from-serverless", "1")
    .json(req.headers);
};
