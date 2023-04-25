# `Categories` - REST API Shop

### `getCategories` Получить список всех категорий

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "getCategories"
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
	"categories": [
	  {
		"id": 1,
		"title": "",
		"createdAt": "2023-03-22 17:59:19",
		"updatedAt": "2023-03-22 18:19:27"
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
	"ru": "Категорий еще нет.",
	"en": "No categories yet.",
	"system": "MySQL Error: 0 : "
  },
  "data": {
	"categories": [ ]
  }
}
```

---

### `getCategory` Получить категорию по `id`

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "getCategory",
  "category_id": 1
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
	"category": {
	  "id": 1,
	  "title": "",
	  "createdAt": "2023-03-22 17:59:19",
	  "updatedAt": "2023-03-22 18:19:27"
	}
  }
}
```

#### Если запрос удачный, но категория не найдена

```json
{
  "statusCode": 200,
  "status": false,
  "message": {
	"ru": "Категория не найдена.",
	"en": "Category not found.",
	"system": "MySQL Error: 0 : "
  },
  "data": {
	"category": [ ]
  }
}
```

---

### `setCategory` Добавление/изменение категории

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "setCategory",
  "category": {
	"id": 1,
	"title": "Название категории"
  }
}
```

> Если в `category` поле `id` присутствует, то это обновление, иначе создание

#### Header запроса:

```json
{
  "x-access-token": "Basic basicToken",
  "x-user-token": "Bearer access_token"
}
```

#### Если запрос удачный вернется объект категории

```json
{
  "statusCode": 200,
  "status": true,
  "message": {
	"ru": "Категория успешно создана.",
	"en": "Category successfully created."
  },
  "data": {
	"category": {
	  "title": "Название категории",
	  "createdAt": "2023-03-27 19:37:43",
	  "updatedAt": "2023-03-27 19:37:43",
	  "id": 13
	}
  }
}
```

---

### `removeCategory` Удаление категории

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "removeCategory",
  "category_id": 13
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
  "message": {
	"ru": "Категория успешно удалена.",
	"en": "Category deleted successfully."
  },
  "data": [ ]
}
```

---

- [Main](../README.md "Main")
- [Basic auth](../1.%20basic%20auth/README.md "Basic auth")
- [FAQ](../2.%20faq/README.md "FAQ")
- [Products](../4.%20products/README.md "Products")
- [Admin](../5.%20admin/README.md "Admin")