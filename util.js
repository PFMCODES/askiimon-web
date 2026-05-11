import chalk from "chalk"

let error = false;
let warns = true;
let intervals = true;
let interval = 2000;

function info(str) {
    console.log(chalk.blueBright("ⓘ ASKIIMON: ") + str)
}

function warn(str, topic) {
    console.log(chalk.yellow('⚠  ASKIIMON: ') + str + `\n\n${link("Docs/Help", `https://pfmcodes.onrender.com/askiimon/docs/${topic}/`)}\n`)
}

function err(str, topic) {
    error = true;
    process.stdout.write("\r");       // go to start
    process.stdout.clearLine(0);      // clear line
    console.log(chalk.redBright("╳ ASKIIMON: ") + str + `\n\n${link("Docs/Help", `https://pfmcodes.onrender.com/askiimon/docs/${topic}.html`)}\nFound a bug or an issue? ${link("report", "https://github.com/pfmcodes/askiimon/issues/new")}\n`)
}

function setErr(value) {
    error = value;
}

function Error() {
    return error;
}

function setShowWarnings(value) {
    if (typeof value !== "boolean") {
        err("setShowWarnings received a paramter of not boolean", "setShowWarnings");
        process.exit(1);
    }
    warns = value;
}

function showWarnings() {
    return warns;
}

export function setIntervals(boolean, interval_timing) {
    if (typeof boolean !== "boolean") {
        err("setIntervals received paramter 1 of not boolean", "setIntervals");
        process.exit(1);
    }
    if (typeof interval_timing !== "number") {
        err("setIntervals received paramter 2 of not number", "setIntervals");
        process.exit(1);
    }
    intervals = boolean;
    interval = interval_timing;
}

export function Intervals() {
    return intervals;
}

export function Interval() {
    return interval;
}

function link(text, url) {
  return `\u001b]8;;${url}\u0007${text}\u001b]8;;\u0007`;
}

export { warn, info, err, link, setErr, Error, showWarnings, setShowWarnings };