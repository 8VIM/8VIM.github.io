#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const {run}=require("./index")
const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 <schemas>... [options]")
  .option("dir", {
    alias: "d",
    type: "string",
    default: process.cwd(),
    describe: "Base directory to resolve refs",
  })
  .options("out", {
    alias: "o",
    type: "string",
    default: "out/README.md"
  })
  .positional("schemas", {
    describe: "schema(s) or directory to process",
    array: true,
  })
  .check((argv, options) => {
    const filePaths = argv._;
    if (filePaths.length < 1) {
      throw new Error("At least one schema must be provided");
    } else {
      return true; // tell Yargs that the arguments passed the check
    }
  })
  .help("h")
  .alias("h", "help")
  .parse();

run(argv._, argv.dir);
