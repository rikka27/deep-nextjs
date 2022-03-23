import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.clearPreviewData()
    res.status(418).end('Disabled preview mode');
};

export default handler;