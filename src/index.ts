#!/usr/bin/env node
import { blue, bold, red, green } from 'chalk'
import { prompt } from 'inquirer'

import constants from './constants'
import questions from './utils/questions'
import createTypeScriptFile from './modules/typescript.module'
import createPrettierFile from './modules/prettier.module'
import createHuskyConfiguration from './modules/husky.module'
import createEslintConfiguration from './modules/eslint.module'

// eslint-disable-next-line import/newline-after-import
const run = async () => {
  console.log(
    `- Hey Sir, ${blue(bold(`${constants.username}`))}... here's ${green(
      'Younes'
    )} How can I serve you? 👨🏻‍💻`
  )
  console.log(
    `- Sir, Sorry but ${bold(
      `Do not you think is it a suitable time to stop ${green.italic(
        'being lazy'
      )} and ${green.italic('never use me again ?!!')}`
    )} 🤔🤨 `
  )

  console.log(`- .... ${red('😡😡😡😡')}, no Younes`)

  try {
    const { isUsingPrettier, isUsingTypeScript, framework, isUsingEslint } = await prompt(questions)
    if (isUsingTypeScript) {
      await createTypeScriptFile(framework as string)
    }
    if (isUsingPrettier) {
      await createPrettierFile()
    }
    if (isUsingEslint) {
      await createEslintConfiguration(framework as string)
    }
    if (!isUsingPrettier && !isUsingTypeScript) {
      console.log(
        red(`Sorry Sir, ${blue(bold(`${constants.username}`))}...I wish to help you 😂💔 `)
      )
    }
  } catch (error) {
    console.log(
      red(`Whoops!, Sorry Sir, ${blue(bold(`${constants.username}`))}... 😂💔 but ${error.message}`)
    )
  }
}

run()
