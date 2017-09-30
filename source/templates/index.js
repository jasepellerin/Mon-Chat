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
          <div class="chat-container">
            <div class="chat-msg" v-for="message in messages">
              {{ message }}
            </div>
          </div>
          <form v-on:submit.prevent="onSubmit(message)">
            <input type="text" v-model="message" placeholder="Send a message..." />
            <input type="Submit" value="-->" />
          </form>
        </div>
      </div>
    </div>
  </body>
  <script src="/static/scripts/bundle.min.js"></script>
  
  </html>`
}
