
let detectGPC = require('..')
  , { equal } = require('assert')
;

describe('Detect GPC', function () {
  it('handles detection', () => {
    [
      { header: undefined, value: false },
      { header: '0', value: false },
      { header: 'cat', value: false },
      { header: '1', value: true },
      { header: '1;with extension', value: true },
    ].forEach(({ header, value }) => {
      let req = { headers: { 'sec-gpc': header }};
      detectGPC()(req, {}, () => {});
      equal(value, req.globalPrivacyControl, `Correct value for "${header}"`);
    });
  });
});
