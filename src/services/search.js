const fuse = require('fuse.js');
const each = require('lodash.foreach');
const data = require('./data/sample-data.json');

/**
 * data format is:
 * {
 *   key1: [{
 *     "symptom": string,
 *     "solution": string[],
 *   }],
 *   key2: [...],
 *   ...
 * }
 */
const options = {
  shouldSort: true,
  includeScore: true,
  threshold: 0.6,
  location: 0,
  distance: 200,
  maxPatternLength: 64,
  minMatchCharLength: 6,
  keys: [
    "symptom"
  ]
};

function searchSolution(problem) {
  const res = [];
  each(data, (v, k) => {
    const f = new fuse(v, options);
    res.push(...f.search(problem).map(v => ({ tag: k, score: v.score, ...v.item })));
  });
  return res.sort((a, b) => a.score - b.score);
}

module.exports = { searchSolution };
