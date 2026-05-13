    window.askiimon = {};
    window.askiimon["parent"] = "";
    let warns = true;
    let intervals = true;
    let interval = 2000;

    export function color(c, text) {
        return `<span class='askiimon-${c}'>${text}</span>`
    }

    export function Color(c, text) {
        return `<span class='askiimon-customColor' style="color: ${c}">${text}</span>`
    }

    export function err(text, topic) {
        console.error(`ASKIIMON: ${text}\nDocs/help:\n    https://pfmcodes/aksiimon-web/docs/${topic}\nFound a bug or issue? report here:\n   https://github.com/pfmcodes/askiimon-web/issues/new`);
    }

    export function warn(text, topic) {
        console.warn(`ASKIIMON: ${text}\nDocs/help:\n    https://pfmcodes/aksiimon-web/docs/${topic}\nFound a bug or issue? report here:\n   https://github.com/pfmcodes/askiimon-web/issues/new`);
    }

    export function info(text) {
        console.log(
            `%cⓘ ASKIIMON: ${text}`, 
            'background: #3083ff; color: white; font-size: 14px; padding: 8px 8px; font-weight: 400;'
        );
    }

    export function setParent(el) {
        window.askiimon["parent"] = document.querySelector(`#${el}`);
    }

    export function getParent() {
        return window.askiimon['parent'];
    }

    export function setShowWarnings(value) {
        if (typeof value !== "boolean") {
            err("setShowWarnings received a paramter of not boolean", "setShowWarnings");
            return;
        }
        warns = value;
    }

    export function showWarnings() {
        return warns;
    }

    export function setIntervals(boolean, interval_timing) {
        if (typeof boolean !== "boolean") {
            err("setIntervals received paramter 1 of not boolean", "setIntervals");
            return;
        }
        if (typeof interval_timing !== "number") {
            err("setIntervals received paramter 2 of not number", "setIntervals");
            return;
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