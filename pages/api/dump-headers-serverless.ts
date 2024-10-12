import type { NextRequest, NextResponse } from "next/server";

export default (req: NextRequest, res: NextResponse) => {
  return res
    .status(200)
    .setHeader("headers-from-serverless", "1")
    .json(req.headers);
};
