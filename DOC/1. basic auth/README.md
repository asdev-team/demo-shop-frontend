# `basic auth` - REST API Shop

### Авторизация приложения (Basic auth)

Для авторизации приложения необходимо выполнить запрос к `API`

#### Тело запроса:

```json
{
  "method": "getToken"
}
```

#### Логин и пароль приложения:

```javascript
const apiBasicAuth = {
	username: 'shop-front',
	password: 'shop-app'
}
const basicToken   = btoa( apiBasicAuth.username + ':' + apiBasicAuth.password ) 
```

#### Header запроса:

```json
{
  "x-access-token": "basicToken"
}
```

#### В случае успешной авторизации мы получим ответ:

```json
{
  "status": true,
  "statusCode": 200,
  "data": {
	"access_token": "eyJhbGciOiJIUzI1NiIsInR21cCI6IkpXVCJ9....",
	"created": "2023-03-27 17:36:02",
	"expired": "2023-04-10 17:36:02"
  }
}
```

где:

`access_token` - это токен доступа к остальным методам приложения

`created` - дата и время, когда создан токен

`expired` - дата и время, когда токен будет считаться недействительным

---

- [Main](../README.md "Main")
- [FAQ](../2.%20faq/README.md "FAQ")
- [Categories](../3.%20categories/README.md "Categories")
- [Products](../4.%20products/README.md "Products")
- [Admin](../5.%20admin/README.md "Admin")