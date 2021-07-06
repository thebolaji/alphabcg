<h1 align="center">Alphabcg 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/alphabcg" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/alphabcg.svg">
  </a>
  <a href="https://twitter.com/iambigb_" target="_blank">
    <img alt="Twitter: iambigb_" src="https://img.shields.io/twitter/follow/iambigb_.svg?style=social" />
  </a>
</p>

> Quickly Convert any letter to image with random background

## Install

```sh
npm i alphabcg
```

## Usage

```
const alphabcg = require('alphabcg')

app.post('/',  async(req, res) => {
  const result = await alphabcg(req.body.letter)

  <!-- It would return a buffer data -->
  res.send(result)
})

```

### Using alphabcg with cloudinary

```
const alphabcg = require('alphabcg')


app.post('/',  async(req, res) => {
    const option = {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  };
  const result = await alphabcg(req.body.letter, options)

  <!-- It would return a url -->
  res.send(result)
})
```

## Author

👤 **Bolaji Yusuf**

- Website: http://bolajiyusuf.me/
- Twitter: [@iambigb\_](https://twitter.com/iambigb_)
- Github: [@bigb97](https://github.com/bigb97)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/yusuf-bolaji-abdulwaheed-1a3a98114\/](https://linkedin.com/in/yusuf-bolaji-abdulwaheed-1a3a98114/)

## Show your support

Give a ⭐️ if this project helped you!

---
