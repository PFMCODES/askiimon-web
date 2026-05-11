import brain from "./brain.js";
import { err, setErr, setShowWarnings, showWarnings } from "./util.js";

function birth(parameter) {
    if (typeof parameter !== "object" && showWarnings()) {
        setErr(true);
        err(`init() expects a config object, but received a ${typeof parameter}.`, "init");''
        process.exit(1);
    }
    if (Object.keys(parameter).length === 0 && showWarnings()) {
        setErr(true);
        err(`init() expects a config object, but object does contain necessary data.`, "init");
        process.exit(1);
    }
    const mood = parameter.mood;
    const message = parameter.message;
    brain.init(message, mood);

    return brain;
}

const create = birth;
const init = birth;

const askiimon = {
    birth,
    create,
    init,
    setShowWarnings
};

export { birth, init, create };
export default askiimon;