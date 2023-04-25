# `Products` - REST API Shop

### `getProducts` Получить список всех товаров

Выполняем запрос к `API`

#### Тело запроса:

```json
{
  "method": "getProducts"
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
	"products": [
	  {
		"id": 3,
		"title": "SKMEI 1251 BROWN",
		"description": "Современные спортивные часы Skmei 1251. Корпус противоударный, что с легкостью переносит любые удары и падение с высоты. Данная модель совместила в себе все необходимые функции: будильник, почасовой сигнал, таймер, секундомер, 12 и 24 часовой режим отображения времени. Водостойкость до 5 ATM, можно мыть руки и плавать. Характеристики: Механизм часов: цифровой Цвет подсветки: зелёный Материал ремешка: полиуретан Материал корпуса: Сталь, пластик, акрил Водостойкость: 5 ATM Отображение даты: есть Режим отображения времени: 12/24 Двойное время (Dual Time): есть Таймер: есть Будильник: есть Секундомер: есть По часовой сигнал: есть Максимальная длина браслета: 25 см Диаметр циферблата: 49 мм Высота циферблата: 15 мм Ширина ремешка: 22 мм Вес без упаковки: 57 гр Тип батарейки: CR2032",
		"quantity": 21,
		"price": 2150,
		"discount_price": 0,
		"discount_percent": 74,
		"category_id": 1,
		"createdAt": "2023-03-22 19:01:19",
		"updatedAt": "2023-03-22 19:01:19",
		"images": [
		  {
			"id": 3,
			"original": {
			  "url": "https://domain.com/uploads/20230323002941164495474.png",
			  "mime": "image/png",
			  "name": "20230323002941164495474.png",
			  "size": 2323
			},
			"webP": {
			  "url": "https://domain.com//uploads/20230323002941164495474.webp",
			  "mime": "image/webP",
			  "name": "20230323002941164495474.webp",
			  "size": 2323
			},
			"product_id": 3,
			"isMain": true,
			"isGallery": false
		  }
		]
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
	"ru": "Продуктов еще нет.",
	"en": "No products yet.",
	"system": "MySQL Error: 0 : "
  },
  "data": {
	"products": [ ]
  }
}
```

---

### `setProduct` Добавление/изменение продукта

Еще нет реализации

---

### `removeProduct` Удаление продукта

Еще нет реализации

---

- [Main](../README.md "Main")
- [Basic auth](../1.%20basic%20auth/README.md "Basic auth")
- [FAQ](../2.%20faq/README.md "FAQ")
- [Categories](../3.%20categories/README.md "Categories")
- [Admin](../5.%20admin/README.md "Admin")