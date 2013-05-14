Suggest It
==========

[![Build Status](https://secure.travis-ci.org/CrypticSwarm/suggest-it.png?branch=master)](http://travis-ci.org/CrypticSwarm/suggest-it)

Suggest similar words based on a dictionary.

## Install

`npm install suggest-it`

## Example usage

```js
var dictionary = ['foo', 'bar', 'baz'];
var suggest = require('suggest-it')(dictionary);
suggest('food'); // foo
```

