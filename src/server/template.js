// const { Cloudfront, DEV_ENV } = process.env;

const htmlStart = (data) => {
  return (`<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React Sand-Box</title>
        <link rel='stylesheet' href='/static/index.css'/>
      </head>
    <body>
    <div id="react-sandbox-root">`)
};


const htmlEnd = () => (`</div>
    </body>
    <script src='/static/index.js'></script>
</html>`);

export {
  htmlStart,
  htmlEnd
}



