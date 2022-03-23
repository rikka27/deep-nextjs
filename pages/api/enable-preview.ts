import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.setPreviewData({ text: 'abc', number: 123 }, { maxAge: 200 });
    res.status(200).end('Preview mode is enabled!');
}

export default handler