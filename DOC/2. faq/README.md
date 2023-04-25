# `FAQ` - REST API Shop

### `getFAQs` Получить список FAQ

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "getFAQs"
}
```

#### Header запроса:

```json
{
  "x-access-token": "Basic basicToken",
  "x-user-token": "Bearer access_token"
}
```

#### Если запрос удачный

```json
{
  "statusCode": 200,
  "status": true,
  "message": [ ],
  "data": {
	"faq": [
	  {
		"id": 1,
		"title": "",
		"text": ""
	  }
	]
  }
}
```

#### Если таблица в базе пуста или запрос к базе провалился

```json
{
  "statusCode": 404,
  "status": false,
  "message": {
	"ru": "Вопросов и ответов еще нет.",
	"en": "No questions or answers yet.",
	"system": "MySQL Error: 0 : "
  },
  "data": {
	"faq": [ ]
  }
}
```

---

### `setFaq` Добавление/изменение пункта в FAQ

Еще нет реализации

---

### `removeFaq` Добавление/изменение пункта в FAQ

Еще нет реализации

---

- [Main](../README.md "Main")
- [Basic auth](../1.%20basic%20auth/README.md "Basic auth")
- [Categories](../3.%20categories/README.md "Categories")
- [Products](../4.%20products/README.md "Products")
- [Admin](../5.%20admin/README.md "Admin")