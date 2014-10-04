# Unique Selector

*A jQuery plugin to return a unique selector for a given element.*

## Build
```sh
npm install
bower install
grunt
```


## Usage
```javascript
$(element).uniqueSelector();
// returns unique selector string using jQuery's :nth-child()
// i.e. html > body:nth-child(2) > div:nth-child(1) > div:nth-child(17) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)
```

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)