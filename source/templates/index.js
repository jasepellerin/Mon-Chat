export default ({ title }) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${title}</title>
    <link rel="stylesheet" href="/static/css/main.min.css">
  </head>
  
  <body>
    <div id="app">
      <div class="main-container">
        <div class="content-container">
          {{ message }}
        </div>
      </div>
    </div>
  </body>
  <script src="/static/scripts/bundle.min.js"></script>
  
  </html>`
}
