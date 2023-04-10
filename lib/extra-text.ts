import { convert } from 'html-to-text';

import React from 'react';

export default function extractText(html, length = 80, more = '・・・') {
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      {
        selector: 'a',
        options: { ignoreHref: true },
      },
    ],
  });

  return text.slice(0, length) + more;
}
