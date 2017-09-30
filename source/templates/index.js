export default ({ title }) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${title}</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link rel="stylesheet" href="/static/css/main.min.css">
  </head>
  
  <body>
    <div id="app">
      <v-app>
        <main>
          <v-container>Hello world</v-container>
        </main>
      </v-app>
    </div>
  </body>
  <script src="/static/scripts/bundle.min.js"></script>
  
  </html>`
}
