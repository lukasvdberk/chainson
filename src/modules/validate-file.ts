import * as fs from 'fs';
import { createFile } from './storage';

// TODO: Move file exists here
// TODO: Check if existing file is readable here
// TODO: Check if existing file is writable here

/**
 * Runs checks related to the chainfile itself. Ensuring it can be created/edited/read
 * @param chainLocation chainfile location
 */
export function runValidateChecks(chainLocation: string) {
  const exists = checkChainExists(chainLocation);
  if (!exists) {
    createFile(chainLocation);
  }
}

/**
 * Check if the chainfile exists on the disk
 * @param chainLocation chainfile location
 */
function checkChainExists(chainLocation: string) {
  return fs.existsSync(chainLocation);
}
