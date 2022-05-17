import db from './conf'

export const getTalent = async ({ walletAddress }) => {
  // TODO: move connection to lib/db/conf.js
  conn = await db.getConnection()

  try {
    return { firstname, lastname, email, telegram, country, city, isRemoteOnly, professionalXps, profileHeadline, linkedinUrl, githubUrl, stackoverflowUrl, portfolioUrl, rate, walletAddress } = await conn.query({
        namedPlaceholders: true,
        sql:`
          SELECT talents (firstname, lastname, email, telegram, country, city, is_remote_only, professional_xps, profile_headline, linkedin_url, github_url, stackoverflow_url, portfolio_url, rate, wallet_address)
          WHERE walletAddress = :walletAddress
        `
      }, {
        walletAddress
      }
    )
  } catch (err) {
    throw err
  }
}

export const insertTalent = async ({ firstname, lastname, email, telegram, country, city, isRemoteOnly, professionalXps, profileHeadline, linkedinUrl, githubUrl, stackoverflowUrl, portfolioUrl, rate, walletAddress }) => {
  let conn

  try {
    // TODO: move connection to lib/db/conf.js
    conn = await db.getConnection()

    await conn.query({
        namedPlaceholders: true,
        sql:`
          INSERT INTO talents (firstname, lastname, email, telegram, country, city, is_remote_only, professional_xps, profile_headline, linkedin_url, github_url, stackoverflow_url, portfolio_url, rate, wallet_address)
          VALUES (:firstname, :lastname, :email, :telegram, :country, :city, :isRemoteOnly, :professionalXps, :profileHeadline, :linkedinUrl, :githubUrl, :stackoverflowUrl, :portfolioUrl, :rate, :walletAddress)
        `
      }, {
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
      }
    )

    return 'success'
  } catch (err) {
    throw err
  }
}

export const updateTalent = async ({ firstname, lastname, email, telegram, country, city, isRemoteOnly, professionalXps, profileHeadline, linkedinUrl, githubUrl, stackoverflowUrl, portfolioUrl, rate, walletAddress }) => {
  let conn

  try {
    // TODO: move connection to lib/db/conf.js
    conn = await db.getConnection()

    await conn.query({})
  } catch (err) {
    throw err
  }
}