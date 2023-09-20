#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = (command) => {
  try {
    execSync(`${command}`,  {stdio: 'inherit'})
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/VitorCorrea98/PadraoVite ${repoName}`
const installDepsCommnad = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(0o1);

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommnad);
if (!installDeps) process.exit(0o1);

console.log("Congratulation")