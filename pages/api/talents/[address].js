import { getTalent, updateTalent, isExistsTalentByAddress } from '../../../lib/db/queries'

export default async function handler(req, res) {
  const { method, body, query } = req

  const { address, isExists } = query

  if (!address) return res.status(400).json({ message: "Wallet address must be defined" })

  if (method === 'GET' && isExists !== undefined) {
    const data = await isExistsTalentByAddress({ walletAddress: address })

    return res.status(200).json({ isExists: data })
  }

  if (method === 'GET') {
    const talent = await getTalent({ walletAddress: address })

    return res.status(200).json(talent)
  }

  if (method === 'POST') {
    const { 
      firstname,
      lastname,
      email,
      telegram,
      country,
      city,
      isRemoteOnly,
      professionalXps,
      profileHeadline,
      linkedinUrl,
      githubUrl,
      stackoverflowUrl,
      portfolioUrl,
      rate,
      walletAddress
    } = body

    // TODO: add try/catch
    await updateTalent({
      firstname: firstname || '',
      lastname: lastname || '',
      email: email || '',
      telegram: telegram || '',
      country: country || '',
      city: city || '',
      isRemoteOnly: isRemoteOnly || false,
      professionalXps: professionalXps || '',
      profileHeadline: profileHeadline || '',
      linkedinUrl: linkedinUrl || '',
      githubUrl: githubUrl || '',
      stackoverflowUrl: stackoverflowUrl || '',
      portfolioUrl: portfolioUrl || '',
      rate: rate || 0,
      walletAddress
    })

    res.status(200).json({ msg: 'success' })
  }
}

