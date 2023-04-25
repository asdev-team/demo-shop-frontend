# REST API Shop

Backend API для магазина Описание методов и принципов работы.

`https://domain.com/` - единый endpoint для всех запросов (Далее `API`).

Все данные передаются по методу POST.

Для запроса необходимо указывать ключ — это первичные данные:

```json
{
  "method": "nameMethod"
}
```

Вторичные данные указываются в каждом методе по-разному, об этом ниже

---

## Ответ на запрос

```json
{
  "status": true,
  "statusCode": 200,
  "message": {
	"ru": "",
	"en": "",
	"system": ""
  },
  "data": { }
}
```

| Ключ  | Тип данных  | Описание  |
| ------------ | ------------ | ------------ |
|`status` | `boolean` | Статус ответа <br> `true` - успешный <br> `false` - неуспешный |
|`statusCode` | `int` | Код ответа |
|`message` | `object` | Сообщение ответа, необязательный ключ <br> `ru` - сообщение на русском <br> `en` - сообщение на английском <br> `system` - системное сообщение, например о проваленном запросе к бд |
|`data` | `object` | Данные ответа  |

---

## Если авторизация не пройдена мы получим ответ:

```json
{
  "status": false,
  "statusCode": 403,
  "message": {
	"ru": "Ошибка базовой аутентификации. В доступе отказано.",
	"en": "Basic auth failed. Access denied."
  }
}
```

---

## Если токен доступа не верный

```json
{
  "status": false,
  "statusCode": 403,
  "message": {
	"ru": "Данные скомпрометированы. Доступ заблокирован.",
	"en": "Data compromised. Access denied."
  },
  "data": [ ]
}
```

---

## Существующие методы

| Название метода ( nameMethod )  |Назначение  |
| ------------ | ------------ |
|`getToken` | Авторизация приложения  |
|`getFAQs` |Получить список FAQ   |
|`setFaq` |Добавление/изменение пункта в FAQ  |
|`removeFaq` |Удаление пункта в FAQ  |
|`getCategories` |Получить список всех категорий   |
|`getCategory` |Получить категорию по `id`   |
|`setCategory` |Добавление/изменение категории  |
|`removeCategory` |Удаление категории  |
|`getProducts` |Получить список всех товаров   |
|`loginAdmin` |Авторизация админа   |

---

- [Basic auth](1.%20basic%20auth/README.md "Basic auth")
- [FAQ](2.%20faq/README.md "FAQ")
- [Categories](3.%20categories/README.md "Categories")
- [Products](4.%20products/README.md "Products")
- [Admin](5.%20admin/README.md "Admin")