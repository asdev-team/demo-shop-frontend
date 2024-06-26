# Демо (для анкеты Frontend Javascript разработчика - 04.2021) — реальные данные и адреса затерты. Это не полный проект, но суть понять можно

## Установка, сборка, запуск

- Установить: `npm i --force`
- Собрать: `npm run build`
- Запустить: `npm run start`

------------

## index.html

Файл универсальный для любого проекта. Чтобы изменить заголовок или другие мета теги, достаточно отредактировать
файл `variables.js` в корне проекта. И при сборке/запуске проекта все подтянется автоматически.

------------

## Структура папок

    ├── src
    ├  ├── 1_app (настройки, стили и провайдеры для всего приложения)
    ├  ├── 2_processes (сценарии, покрывающие несколько страниц. Например авторизация)
    ├  ├── 3_pages (страницы - композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов)
    ├  ├── 4_widgets (виджеты - композиционный слой для соединения сущностей и фич в самостоятельные блоки(например, ProductCard)
    ├  ├── 5_features (фичи - взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя. Например SendReviews, AddToCart, SendFeedback)
    ├  ├── 6_entities (сущности. Например Product, Order, Recent Order или что-то в этом роде)
    ├  ├── 7_shared (переиспользуемый код, не имеющий отношения к специфике приложения. Например UIKit, разметка, либы, апи)
    ├  ├── static (статика для index.html - это favicon, og, .htaccess)
    ├── dist (сборка приложения)
    ├── node_modules (сторонние модули)

### Пример

- `1_app/` содержит настройку роутера, глобальные хранилища и стили, возможно провайдеры.
- `2_processes/` содержит часть аутентификации, отвечающую за чтение/запись токенов аутентификации.
- `3_pages/` содержит компоненты роутов на каждую страницу в приложении, преимущественно композирующие, по возможности,
  без собственной логики.
- `4_widgets/` содержит "собранную" карточку товара, с содержимым и интерактивными кнопками, в которые вшиты запросы к
  бэкенду.
- `5_features/` содержит всю интерактивность карточки (например, кнопку добавить в корзину) и логику обработки этой
  интерактивности.
- `6_entities/` содержит скелет карточки со слотами под интерактивные элементы.
- `7_shared/` содержит переиспользуемые компоненты такие как кнопки, инпуты и т.п.

------------

## Основные секции главной страницы

### `Header`

- Логотип
- Кнопка "Корзина". Иконка корзины и количество товара. (фиксированная кнопка в углу)

### `Секция "Баннер"`

- Фуллскрин слайдер баннеров на десктопе (на мобильном выключаем). Автоматическая смена баннера. Картинка и текст

### `Секция "Каталог продукции"`

- Содержит табы категорий и карточки товара. На десктопе по 4, на мобиле по 2.
- Карточка товара (с тенью) включает изображение товара (в левом нижнем углу показываем процент скидки, если есть две
  цены), две цены (цена со скидкой и реальная), название товара, кнопка "в корзину", кнопка "инфо", количество продаж.
  При клике на кнопку "в корзину" добавляем товар в корзину, а на клик по кнопке "инфо" открываем модалку с галереей
  фотографий (реальных) и описанием.

### `Секция "Отзывы"`

- Содержит слайдер текстовых отзывов (десктоп по 3, мобила по 1) и кнопка "добавить отзыв"
- Карточка отзыва включает имя покупателя, звездочки и текст отзыва

### `Секция "Посление заказы"`

- Содержит карточку товара (4 последних). Сюда попадает карточка купленного товара, когда в базе появилась запись о
  покупке. Логика такая: при покупке (когда покупатель подтвердил покупку), создается новая запись в бд, а при запросе к
  апи "последние покупки" берем последние 4 записи и вторым запросом считаем количество продаж

### `Секция "FAQ"`

- Содержит список вопросов и ответов (тут все понятно)

### `Footer`

- Логотип
- Кнопка "Обратная связь"

### Модальные окна

#### `Информация о товаре`

- галерея фотографий (реальных) и описание.
- кнопка в корзину

#### `Обратная связь`

- Содержит поля:
    + Имя
    + Телефон
    + Текстовое поле (Вопрос)
    + Кнопка "Отправить"

#### `Оставить отзыв`

- Содержит поля:
    + Имя
    + Телефон
    + Текстовое поле (Отзыв)
    + Рейтинг 1-5
    + Кнопка "Оставить отзыв"

#### `Корзина товаров`

- Содержит карточки выбранных товаров, а именно фото, название, цена и кнопка удалить
- Кнопка "оформить заказ" при клике на которую, показываем второй шаг где предлагаем заполнить форму
    + Имя
    + Телефон
    + Кнопка "Подтвердить"

------------

## Логика

### Базовая авторизация

При загрузке приложения мы должны получить от бэка на основе базовой авторизации приватный токен. На основе этого
токена, а также базовой авторизации будет происходить общение с апи, чтобы предотвратить нежелательные запросы и спам
форм. Весь контент подгружаем с бэка.

Продолжение следует...

------------

## Описание API

- [Main](DOC/README.md "Main")
- [Basic auth](DOC/1.%20basic%20auth/README.md "Basic auth")
- [FAQ](DOC/2.%20faq/README.md "FAQ")
- [Categories](DOC/3.%20categories/README.md "Categories")
- [Admin](DOC/5.%20admin/README.md "Admin")
