# jilfond

Что сделано. Для инициализации проекта использовался Jetstream + Inertia. Laravel 9. DB Sqlite.

0. Инициировал данный Git-репозитарий + клонировал репозитарий локально "git clone ..."  + настроил локальный сервер для проекта (работаю локально на сервере Caddy собственной сборки под Windows) 
1. laravel new jilfond --jet (всё уже давно придумано до нас), "под капотом" Inertia (Vue, в package.json присутствует зависимость "axios": "^1.1.2" - постановке задачи соответствует)
2. Для локального теста изменил драйвер базы данных с Mysql на Sqlite в .env (мне так удобнее работать локально - я на Windows, чтобы не развёртывать ещё одну базу Mysql), запустил миграцию php artisan migrate
3. По условию задачи должны быть имя и фамилия при регистрации. Для этого поправил несколько файлов: app\Actions\Fortify\CreateNewUser.php, resources\js\Pages\Auth\Register.vue, resources\js\Pages\Auth\Login.vue, app\Models\User.php
4. Добавил русскую локализацию для сообщений об ошибках
5. git add.  ->  git commit -a -m "Init jilfond"  -> Git push
6. Добавил данный комментарий (прямо на Github, так удобнее), последнее заняло больше времени, чем всё остальное

В совокупности кодирование и развёртывание заняло 1.5 чacа (вместе с пунктом #6), т.к. при тестировании ещё долго искал проблему ошибки сохранения в базу (думал из-за драйвера), в общем забыл, что нужно было в app\Models\User.php новое поле прописать в массиве $fillable
