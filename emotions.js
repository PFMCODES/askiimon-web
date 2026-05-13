import { warn, info, showWarnings, color} from "./util.js";

export const moods = {
    ADMIRATION: "*_*",
    AIMING: "^_+",
    ANNOYED: `>"<`,
    ANGRY: ">:(",
    BORED_0: "-_-",
    BORED_1: ":/",
    BORED_2: "=/",
    BORED_3: ":|",
    BORED_4: "=_=",
    BORED_5: "-0-",
    BRIBE: ":-$",
    CUTE_0: "^_____^",
    CUTE_1: "U_U",
    CUTE_2: "^.^", 
    CUTE_3: "OwO",
    CUTE_4: "UwU",
    CRYING_0: "T_T",
    CRYING_1: ";_;",
    DEAD_0: "X_X",
    DEAD_1: "X X",
    DEAD_2: "X.X",
    DEAD_3: "X>X",
    DEAD_4: `X3X`,
    DIZZY_0: ":-S",
    DIZZY_1: ":S",
    EXCITED_0: ">.<",
    EXCITED_1: "Y.Y",
    FLIRT_0: ";-)",
    FLIRT_1: ";D",
    GREEDY: "$_$",
    HAPPY_0: ":-)",
    HAPPY_1: ":D",
    HAPPY_2: "^o^",
    HAPPY_3: "=)",
    HAPPY_4: "=D",
    HAPPY_5: ":]",
    HAPPY_6: "=]",
    HAPPY_7: "^0^",
    HAPPY_8: ":-D",
    HAPPY_9: ":-]",
    HAPPY_10: ":-3",
    HAPPY_11: "8-)",
    HEART: "<3",
    IDLE: "^_^",
    IDLE2: "^\x22^",
    IN_AWE: ":-O",
    KISS: "^3^",
    MOUTH_SHUT: ":-x",
    SAD_0: ":(",
    SAD_1: ":-(",
    SAD_2: "=[",
    SAD_3: ":'(",
    SAD_4: "=(",
    SCARED: "> <",
    SHOCKED_0: "O.O",
    SHOCKED_1: "O_O",
    SHOCKED_2: ":O",
    SHOCKED_3: ":O)",
    SMUG: "¬_¬",
    TEASING_0: ":-P",
    TEASING_1: "=P",
    TRYING_TO_SLEEP: ">_<",
    WINK_0: ";-)",
    WINK_1: ";D",
    WINK_2: "^_-",
    ZONING_OUT: "-.-",
}

export let currentMood = moods["IDLE"]

export function setMood(mood) {
    const face = moods[mood];

    if (!face) {
        if (showWarnings()) {
            warn(color("white", `"${color("cyanBright", mood)}" does not exist. Falling back to ${color("yellowBright","IDLE")}.`), "valid-moods");
            info(`use learnMood("${mood}", "...") to register it`);
        }

        currentMood = moods.IDLE;
        notify();
        return currentMood;
    }

    currentMood = face;
    notify();
    return currentMood;
}

export function learnMood(moodName, mood) {
    if (moods[moodName]) {
        warn(`mood "${moodName}" already exists`, "learnMood");
        return;
    }
    moods[moodName] = mood;
}

const listeners = [];

export function subscribe(fn) {
    listeners.push(fn);
}

export function notify() {
    listeners.forEach(fn => fn(currentMood));
}