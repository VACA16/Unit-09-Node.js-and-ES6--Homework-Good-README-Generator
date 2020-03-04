function generateMarkdown(data, getUserResponse) {
    return `
  # ${data.project}

  ![License](https://img.shields.io/badge/License-${data.license}-blue)

  ## Discription
  
  ${data.discription}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.dependencies}

  ## Usage

  ${data.know}

  ## License

  ${data.license}

  ## Contributing

  ${data.repo}

  ## Test

  To run test, run the following comand:

  ${data.test}

  ## Questions
  
  ![ME](${getUserResponse.data.avatar_url}) 

  if you have any questions about the repo contact me directly at ${getUserResponse.data.email} thank you.
  `;
}

module.exports = generateMarkdown;