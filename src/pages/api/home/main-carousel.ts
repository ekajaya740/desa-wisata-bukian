import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';

const handler: NextApiHandler = async (req, res) => {
  const jsonDirectory = path.join(process.cwd(), 'src', 'json', 'home');

  const fileContents = await fs.readFile(
    jsonDirectory + '/main-carousel.json',
    'utf8'
  );

  console.log(jsonDirectory);
  const data = JSON.parse(fileContents);
  res.status(200).json(data);
};

export default handler;
