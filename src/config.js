const dev = {
  WCBASEURL: 'https://www.wolframcloud.com/objects/mitch/'
}

const prod = {}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}
