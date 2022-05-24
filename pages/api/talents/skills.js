import { getSkills } from '../../../lib/db/queries'

export default async function handler(req, res) {
  const { method } = req

  if (method !== 'GET') return res.status(405).json({ message: "Method not valid" })

  res.status(200).json(await getSkills())
}

