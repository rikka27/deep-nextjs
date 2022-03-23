import { NextApiRequest, NextApiResponse } from "next";

type resDataType = {
    message: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<resDataType>) => {
    res.setPreviewData({ text: 'abc', number: 123 }, { maxAge: 10 })
    res.status(200).json({ message: 'Preview mode is enabled!' })
}

export default handler