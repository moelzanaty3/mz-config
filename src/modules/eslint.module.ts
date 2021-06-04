import { blue, bold, cyan } from 'chalk'
import fse from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'
import constants from '../constants'

const createEslintConfiguration = async (framework: string) => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 one second and you will find eslint configured in your project.. so relax and 🤌🏻`
    )
  )

  // path of the tsconfig in your project
  const eslintignore: string = path.join(process.cwd(), '.eslintignore')

  if (framework === 'node') {
    await execSync('yarn add -D eslint eslint-config-prettier eslint-plugin-prettier')
    const eslintjs: string = path.join(process.cwd(), '.eslintrc.json')
    const configFolderPath = path.join(process.cwd(), 'src', 'config')
    const eslintConfigBuffer: Buffer = await fse.readFile(
      path.join(configFolderPath, 'eslint-config-node-ts.json')
    )
    await fse.writeFile(eslintjs, eslintConfigBuffer.toString())
  }
  await fse.writeFile(eslintignore, 'node_modules\nbuild')

  console.log(
    blue(
      `😋😋 Sir, ${blue(bold(`${constants.username}`))}... ✅ eslint successfully configured 😋😋`
    )
  )
}

export default createEslintConfiguration
