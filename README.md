# German Paycheck Calculator \[WIP\]

## Overview

This is a website that lets you enter your gross wage and tax class and returns among others your net wage and the marginal net wage which is the net benefit of the very last hour that you will have worked this year (2024).

My motivation behind this small project is primarily to get familiar with bootstrap.

## Installation Instructions

Clone the repository and run

```
npm install
```

In Visual Studio Code (abbr. VS Code), install the extension _Live Server_, then right-click on _src/index.html_ and select _Open with Live Server_.

## Working with the Code

For proper styling, the VS Code extension _Prettier - Code formatter_ is used. After the install, go to the VS Code settings, search for _Configure Default Formatter_ and select this extension. Also be sure to search for _Format on Save_ and check the setting.

## Sidenotes

The calculation is carried out by the Federal Ministry of Finance using [this](https://www.bmf-steuerrechner.de/interface/einganginterface.xhtml) API. Using the API is allowed for test purposes only.

The [favicon](https://commons.wikimedia.org/wiki/File:Euro_symbol_black.svg) is taken from the public domain.
