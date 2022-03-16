<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/64584169/158031083-b8c49e30-38ee-441a-999d-195a79d390e1.png" alt="Wordle logo"></a>
<!--   ![LOGO](https://user-images.githubusercontent.com/64584169/158031083-b8c49e30-38ee-441a-999d-195a79d390e1.png) -->
</p>

<h3 align="center">WORDLE</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/KhalidSaifullahFuad/WORDLE.svg)](https://github.com/KhalidSaifullahFuad/WORDLE/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/KhalidSaifullahFuad/WORDLE.svg)](https://github.com/KhalidSaifullahFuad/WORDLE/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<div align="center"> 

 WORDLE is word game where you have six tries to guess the word.

</div>

## 📝 Table of Contents

- [About](#about)
- [Demo / Working](#demo)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [Deploying your own bot](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your bot.

## 🎥 Demo / Working <a name = "demo"></a>

![Working](https://media.giphy.com/media/20NLMBm0BkUOwNljwv/giphy.gif)

## 💭 How it works <a name = "working"></a>

The bot first extracts the word from the comment and then fetches word definitions, part of speech, example and source from the Oxford Dictionary API.

If the word does not exist in the Oxford Dictionary, the Oxford API then returns a 404 response upon which the bot then tries to fetch results form the Urban Dictionary API.

The bot uses the Pushshift API to fetch comments, PRAW module to reply to comments and Heroku as a server.

The entire bot is written in Python 3.6

## 🎈 Usage <a name = "usage"></a>

To use the bot, type:

```
!dict word
```

The first part, i.e. "!dict" **is not** case sensitive.

The bot will then give you the Oxford Dictionary (or Urban Dictionary; if the word does not exist in the Oxford Dictionary) definition of the word as a comment reply.

### Example:

> !dict what is love

**Definition:**

Baby, dont hurt me~
Dont hurt me~ no more.

**Example:**

Dude1: Bruh, what is love?
Dude2: Baby, dont hurt me, dont hurt me- no more!
Dude1: dafuq?

**Source:** https://www.urbandictionary.com/define.php?term=what%20is%20love

---

<sup>Beep boop. I am a bot. If there are any issues, contact my [Master](https://www.reddit.com/message/compose/?to=PositivePlayer1&subject=/u/Wordbook_Bot)</sup>

<sup>Want to make a similar reddit bot? Check out: [GitHub](https://github.com/kylelobo/Reddit-Bot)</sup>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

<!-- ## 🚀 Deploying your own bot <a name = "deployment"></a>

To see an example project on how to deploy your bot, please see my own configuration:

- **Heroku**: https://github.com/kylelobo/Reddit-Bot#deploying_the_bot -->

## ⛏️ Built Using <a name = "built_using"></a>

- [HTML](https://https://www.w3schools.com/html/) - Structure
- [CSS](https://www.w3schools.com/css/) - Design & Animation
- [JavaScript](https://www.w3schools.com/js/) - Functionality
- [Heroku](https://www.heroku.com/) - SaaS hosting platform

## ✍️ Authors <a name = "authors"></a>

- [@khalidsaifullahfuad](https://github.com/khalidsaifullahfuad) - Idea & Initial work


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspiration
  - [Wordle](https://www.powerlanguage.co.uk/wordle/)
- References
  - [New York Times Article](https://www.nytimes.com/2022/01/03/technology/wordle-word-game-creator.html)