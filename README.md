# Aviasearch

[Пример работы проекта на Vercel](https://aviasearch.vercel.app/)
>Здесь представлен образец документации к SPA-приложению, которое я самостоятельно разработал. Приложение фейковое и не обращается к реальному API, а также имеет скромный функционал.

## О приложении

Aviasearch - это приложение для поиска авиабилетов в браузере. Состоит из двух страниц: главной `/avia` и `/avia/info`. Приложение имеет адаптивный дизайн и подстраивается под ширину экрана устройства.

### Главная страница `/avia`

`/avia` — главная страница на которую попадает пользователь, когда приложение запускается. Страница предоставляет пользователю следующие возможности выбора:

- Направление перелёта;
- Дата вылета в одну сторону;
- Дата обратного вылета*.

**Может быть не заполнено*

![Скриншот главного экрана](https://github.com/georgy-p/Aviasearch/assets/81578359/72d99f47-faa3-4f52-966c-4685fee6cdb6)

**Для поиска авиабилетов пользователю необходимо:**

  1. Ввести город отправления в поле **«Откуда»**;
  2. Указать город прибытия в поле **«Куда»**;
  3. В зависимости от поиска билета только в одном направлении или в оба направления:
       1. Для билета в одном направлении необходимо заполнить только поле **«Туда»**;
       2. Для билета в оба направления, необходимо заполнить оба поля **«Туда»** и **«Обратно»**.
  4. Нажать кнопку «Найти билеты».

![Скриншот заполненного главного экрана](https://github.com/georgy-p/Aviasearch/assets/81578359/1798f339-6b4a-4587-a0b3-f27dec1b4703)

>#### Об ошибках пользователя
>
>Если на странице приложение `/avia` возникнет ошибка пользователя, например, пользователь не указал город прибытия, то приложение выдаст сообщение об ошибке, и укажет в каком поле она произошла.
>
>Пока пользователь не устранит ошибку, кнопка «Найти билеты» будет заблокирована!
>![](https://github.com/georgy-p/Aviasearch/assets/81578359/ca37efc0-fd2f-4025-94b0-a128b4b012f3)

### Страница `/avia/info`

 `/avia/info` — страница на которую пользователь автоматически перенаправляется с главной страницы  `/avia`. На странице пользователь получает возможность выбора времени перелётов. В зависимости от параметров поиска отображается выбор времени для перелёта в одном направлении или в оба направления.

*Пример страницы `/avia/info` с выбором времени рейса в одном направлении:*
![Страница выбора рейса в одном направлении](https://github.com/georgy-p/Aviasearch/assets/81578359/ae975a07-9417-4328-aac3-8b8a3cee9e59)

*Пример страницы `/avia/info` с выбором времени рейсов в оба направления:*
![Страница выбора рейса туда и обратно](https://github.com/georgy-p/Aviasearch/assets/81578359/264e635f-a7d9-4a3f-b46a-4b614fbe7a47)

Для выбора рейса пользователь должен нажать на кнопку с подходящим временем. Изначально при запуске страницы пользователю предлагается время вылета по-умолчанию.

## Как установить и запустить

1. Клонируйте репозиторий себе на компьютер с помощью команды `git clone https://github.com/georgy-p/Aviasearch` или скачайте .zip файл.
2. В корне проекта запустите команду `npm ci` для установки пакетов зависимостей.
3. После установки в корне проекта запустите команду `nmp start`.
