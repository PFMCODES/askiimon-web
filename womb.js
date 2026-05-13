import brain from "./brain.js";
import { err, setParent } from "./util.js"

async function birth(object) {
    const ot = typeof object;
    if (ot !== "object") {
        err(`function birth expected an object received a ${ot}`, "init");
        return;
    }
    if (object.length === 0) {
        err("function birth received an empty Object", "init");
        return;
    }
    if (typeof object.parent !== "string") {
        err("function birth received did not receive an string of parent id", "init");
    }

    const parent  = object.parent;
    console.log({parent})
    const mood = object.mood || "idle";
    const message = object.message || "";
    await setParent(parent);
    brain.init(message, mood);
    return brain;
}

let askiimon = {
    birth,
    init: birth,
    create: birth
}

export default askiimon;