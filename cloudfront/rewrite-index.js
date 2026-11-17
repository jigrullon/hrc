// CloudFront Function (viewer request, runtime cloudfront-js-2.0).
//
// The site is a Next.js static export with `trailingSlash: true`, so each page
// lives at <page>/index.html in S3. CloudFront's "default root object" only
// applies to "/", so map folder-style URLs to their index.html:
//   /events/  -> /events/index.html
//   /events   -> /events/index.html
// Requests for real files (anything with an extension) pass through untouched.
function handler(event) {
  var request = event.request
  var uri = request.uri

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html'
  } else if (!uri.split('/').pop().includes('.')) {
    request.uri = uri + '/index.html'
  }

  return request
}
