<img src="https://pfmcodes.onrender.com/askiimon/logo%20with%20text.svg">

[![License: MIT](https://img.shields.io/badge/License-MIT-4000ff.svg?style=flat-square)](https://github.com/pfmcodes/askiimon/LICENSE)
[![Downloads](https://img.shields.io/npm/dw/askiimon?style=flat-square)](https://npmjs.com/askiimon)
[![Version](https://img.shields.io/npm/v/askiimon?style=flat-square)](https://npmjs.com/askiimon)
[![Documentation](https://raw.githubusercontent.com/PFMCODES/askiimon/refs/heads/main/docs.svg)](https://pfmcodes.onrender.com/askiimon/docs/)

A tiny terminal personality that reacts, talks, and lives inside your app.

ASKIIMON is a lightweight JavaScript library that gives your CLI or app a living ASCII companion. It shows emotions, reacts to events, and displays messages in real-time.

---


## Features

* Dynamic moods
  Switch between different ASCII emotions like happy, angry, sad, and more.

* Reactive messaging
  Make ASKIIMON “talk” with custom messages rendered in your terminal.

* Real-time updates
  Mood and messages update instantly without cluttering the terminal.

* Extensible emotions
  Teach ASKIIMON new moods with your own ASCII expressions.

* Terminal-first design
  Built specifically for CLI tools, dev environments, and interactive scripts.

* Lightweight and simple
  Minimal setup, no heavy dependencies, plug-and-play.

* Helpful errors
  Clean, styled error and warning system with quick access to help resources.

* Customize Intervals <img width="35" height="15" src="https://pfmcodes.onrender.com/askiimon/new-badge.gif"> <br>

  1.0.0:
  ```javascript
  import askiimon from "askiimon";

  const mon = askiimon.init({
    mood: "idle",
    message: "",
  });

  let timeOut = setTimeout(() => {
    mon.setMood("happy");
    mon.setMessage("i'm happy");
    let innerTimeout = setTimeout(() => {
      clearTimeout(timeOut);
      clear(innerTimeout);
    }, 2000);
  }, 3000);
  ```

  2.0.0(and onwards):
  ```javascript
  import askiimon from "askiimon";

  const mon = askiimon.init({
    mood: "idle",
    message: "",
  });

  mon.setMood("happy");
  mon.setMessage("i'm happy");

  ```

  This is because askiimon has added internal intervals, so user code doesn't look like setTimeout and setInterval spaghetti, you modify the timings and if the intervals should be there suing:
  ```javascript

  mon.setIntervals(true, 1000)
  //             boolean custom interval after setMood and setMessage(number)
  ```

---

## Example

```javascript
import askiimon from "askiimon";

const goblin = askiimon.birth("happy", "hello");

goblin.setMood("angry");
goblin.setMessage("why did you do that?");
```

---

## Concept

ASKIIMON is designed to feel like a small creature living inside your terminal.
It reacts to user actions, shows emotion, and adds personality to otherwise plain output.

---

## Use Cases

* CLI tools with personality
* Developer utilities
* Debugging assistants
* Interactive scripts
* Terminal experiments

---

## Note

ASKIIMON is meant to be expressive and customizable.
You control how it behaves and how it communicates.

---

## Philosophy

Most tools just print text.
ASKIIMON reacts.

---

## Status

Actively being developed. Expect improvements and new features over time.

---

## Preview

```bash
^_^ [ hello ]
>:( [ something broke ]
:D [ fixed it! ]
```

---

## Installation

```bash
npm install askiimon
```