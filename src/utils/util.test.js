require('mocha');
const { expect } = require('chai');
const { URL } = require('url');

describe('util.normalizeTwofactorauthorgData', function () {
  var data = {
    "Category One": {
      "Service One": {
        "name": "Service One",
        "url": "https://www.example.com/",
        "tfa": true,
        "software": true,
        "img": "something.png",
        "doc": "https://docs.example.com"
      },
      "Service Two": {
        "name": "Service Two",
        "url": "https://www.exampletwo.com/",
        "tfa": true,
        "software": true,
        "img": "something.png",
        "doc": "https://docs.exampletwo.com"
      }
    },
    "Category Two": {
      "Service Three": {
        "name": "Service Three",
        "url": "https://www.examplethree.com/",
        "tfa": true,
        "software": true,
        "img": "something.png",
        "doc": "https://docs.examplethree.com"
      }
    }
  };

  it('should restructure the data as expected', function () {
    var expected = {
      'https://www.example.com': {
        name: 'Service One',
        url: 'https://www.example.com/',
        tfa: true,
        software: true,
        img: 'something.png',
        doc: 'https://docs.example.com'
      },
      'https://www.exampletwo.com': {
        name: 'Service Two',
        url: 'https://www.exampletwo.com/',
        tfa: true,
        software: true,
        img: 'something.png',
        doc: 'https://docs.exampletwo.com'
      },
      'https://www.examplethree.com': {
        name: 'Service Three',
        url: 'https://www.examplethree.com/',
        tfa: true,
        software: true,
        img: 'something.png',
        doc: 'https://docs.examplethree.com'
      }
    };

    let actual = normalizeData(data);
    expect(actual).to.deep.equal(expected);
  });
});

function normalizeData(data) {
  let domainMap = {};

  Object.entries(data).forEach(function(categoryEntry) {
    let category = categoryEntry[0];
    let services = categoryEntry[1];
    // console.log(category);
    Object.entries(services).forEach(function(serviceEntry) {
      let name = serviceEntry[0];
      let config = serviceEntry[1];
      let url = new URL(config.url);
      domainMap[url.origin] = config;
    });
  });

  return domainMap;
}