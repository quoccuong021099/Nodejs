### Cấu hình chạy app

- Vào package.json

* start app
  `"start": "nodemon --inspect src/index.js"`

* watch node-sass
  `node-sass -w src/resources/scss/app.scss src/public/css/app.css`

### 1. Cài đặt express

`npm i express`

### 2. Cài đặt nodemon & inspector

`npm i nodemon --save-dev`

### 3. Cài đặt Morgan

`npm i morgan --save-dev`

### 4. Cài đặt Handlebar (template engine)

- Viết các tag html bằng cái này

  `npm i express-handlebars`

### 5. Static files & scss

- Viết các tag html bằng cái này

  `npm i express-handlebars`

- Cài đặt node-sass
  `npm i node-sass --save-dev`

# Basic routing

- Các method và nhận vào 2 đối số 1 là path và 2 là 1 hàm gồm 2 hoặc nhiều hơn đối số : `req, res`

`app.METHOD(PATH, HANDLER)`

- Ví dụ:

```js

// khi gõ ở url http://localhost:3000/new thì mới chạy hàm sau
app.get("/news", (req, res) => res.render("news"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
```

# Query parameters

- Truyền param:

* Param đầu tiên sẽ sau dấu `?`
* Các param tiếp theo sẽ sau dấu `&` như ví dụ
  ` http://localhost:3000/search?q=f8%web&ref=f8&author=sondn`

- Lấy dữ liệu query trên url

```js
app.get("/search", (req, res) => {
  console.log("req", req.query); // dữ liệu ở đây
  return res.render("search");
});
```

# Hành vi mặc định của form (Form default behavior)

- Những thằng form mặc định:

* Khi submit form sẽ load lại page
* Khi submit sẽ đẩy thông tin lên url như ví dụ sau:
  `http://localhost:3000/search?queryName=f8+tìm+kiếm`
* Nó sẽ lấy name ở từng thẻ input làm tên query
* Mặc định là `method="GET" action=""`

```html
<form method="GET" action="">
  <div class="form-group">
    <label for="exampleInputEmail1">Enter keyword</label>
    <input
      type="text"
      name="queryName"
      class="form-control"
      id="search-input"
      placeholder="Enter key..."
    />
  </div>
  <button type="submit" class="btn btn-primary">Search now</button>
</form>
```

# POST method


