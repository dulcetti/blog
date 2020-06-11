import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/assets/favicon.ico" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            base-uri 'self';
            connect-src 'self' data: gap: ws:* ssl.gstatic.com 'unsafe-inline' links.services.disqus.com;
            font-src 'self' data: *.cloudfront.net;
            frame-src 'self' https://disqus.com/;
            img-src 'self' data: *.google-analytics.com *.viglink.com links.services.disqus.com ce.lijit.com *.cloudfront.net;
            manifest-src 'self';
            media-src 'self';
            object-src 'none';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.disqus.com *.disquscdn.com *.cloudfront.net;
            style-src 'self' 'unsafe-inline' blob: *.disquscdn.com"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
