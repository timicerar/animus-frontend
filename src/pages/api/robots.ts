import type { NextApiRequest, NextApiResponse } from 'next';
import { Routes } from '@/constants/routes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const disallowedPaths = [Routes.PURCHASE_SUCCESSFUL];
  const robots =
    process.env.ROBOTS_ALLOW === 'true'
      ? `User-Agent: *\nAllow: /\nDisallow: ${disallowedPaths.join('\nDisallow: ')}`
      : `User-Agent: *\nDisallow: /`;

  res.send(robots);
}
