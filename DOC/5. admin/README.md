# `Admin` - REST API Shop

### `loginAdmin` Авторизация админа

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "loginAdmin",
  "loginData": {
	"access_token": "...",
	"email": "mail@domain.com",
	"password": "somePass"
  }
}
```

Варианты тела запроса:

| Поле  |Назначение  |
| ------------ | ------------ |
|`access_token` | Используется для фоновой авторизации <br> Если поле и его значение присутствует,<br>то это приоритет, а остальные поля игнорируются |
| `email` | Email администратора |
| `password` | Пароль администратора |

#### Header запроса:

```json
{
  "x-access-token": "Basic basicToken",
  "x-user-token": "Bearer access_token"
}
```

#### Если авторизация прошла

Если авторизация по `email` и `password`, будет присутствовать два поля `admin` и `token`.
<br>
Если авторизация по `accesc_token`, то только поле `admin`

```json
{
  "statusCode": 200,
  "status": true,
  "message": {
	"en": "Login Success.",
	"ru": "Авторизация прошла успешно."
  },
  "data": {
	"admin": {
	  "id": 1,
	  "email": "mail@domain.com",
	  "createdAt": "2023-04-14 19:52:59",
	  "updatedAt": "2023-04-14 19:52:59"
	},
	"token": {
	  "access_token": "...",
	  "created": "2023-04-14 22:34:51",
	  "expired": "2023-04-28 22:34:51"
	}
  }
}
```

#### Если авторизация по токену не пройдена

```json
{
  "statusCode": 403,
  "status": false,
  "message": {
	"ru": "Токен доступа недействителен. В доступе отказано.",
	"en": "The access token is invalid. Access denied."
  }
}
```

#### Если авторизация по паролю не пройдена

```json
{
  "statusCode": 403,
  "status": false,
  "message": {
	"ru": "Авторизация не пройдена. Неправильный пароль.",
	"en": "Login error. Wrong password."
  }
}
```

---

- [Main](../README.md "Main")
- [Basic auth](../1.%20basic%20auth/README.md "Basic auth")
- [FAQ](../2.%20faq/README.md "FAQ")
- [Categories](../3.%20categories/README.md "Categories")
- [Products](../4.%20products/README.md "Products")