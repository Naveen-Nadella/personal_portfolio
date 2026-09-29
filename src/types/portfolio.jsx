/**
 * Portfolio Data Type Definitions (JSDoc)
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} sealCode
 * @property {'Full-Stack' | 'Cybersecurity & AI' | 'Security Engineering' | 'Systems'} category
 * @property {string} description
 * @property {string} longDescription
 * @property {string} problemSolved
 * @property {string} architecture
 * @property {string[]} technologies
 * @property {string[]} keyFeatures
 * @property {string[]} challenges
 * @property {string[]} solutions
 * @property {string[]} metrics
 * @property {string} [githubUrl]
 * @property {string} [liveUrl]
 * @property {boolean} featured
 *
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} level
 * @property {string} description
 * @property {boolean} [featured]
 *
 * @typedef {Object} SkillCategory
 * @property {string} title
 * @property {string} sealCode
 * @property {string} description
 * @property {Skill[]} skills
 *
 * @typedef {Object} ExperienceItem
 * @property {string} id
 * @property {string} period
 * @property {string} year
 * @property {string} sealCode
 * @property {string} title
 * @property {string} organization
 * @property {'experience' | 'education'} type
 * @property {string} [grade]
 * @property {string} summary
 * @property {string[]} highlights
 * @property {string[]} [technologies]
 *
 * @typedef {Object} Certification
 * @property {string} id
 * @property {string} title
 * @property {string} issuer
 * @property {string} year
 * @property {string} sealCode
 * @property {string[]} skills
 * @property {string} description
 * @property {string} [credentialUrl]
 * @property {string} [credentialId]
 * @property {string} [certificationNumber]
 *
 * @typedef {Object} PersonalInfo
 * @property {string} name
 * @property {string} monogram
 * @property {string} title
 * @property {string} subtitle
 * @property {string} tagline
 * @property {string} email
 * @property {string} phone
 * @property {string} location
 * @property {string} github
 * @property {string} linkedin
 * @property {string[]} bio
 * @property {string} cgpa
 * @property {string} university
 */

export const portfolioTypes = {};
export default portfolioTypes;
