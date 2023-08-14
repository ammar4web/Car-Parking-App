<p align="center">
    <a href="https://laravel.com" target="_blank">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
    </a>
</p>
<hr />

## Project Installation Steps:

1. Clone the repository:
2. ``` cd api_using_laravel ```
3. Create the ".env" file and set the database connection values.
4. ``` composer install ```
5. ``` php artisan key:generate ```
6. ``` php artisan migrate ```

<br /><hr /><br />

<h2>API Routes</h2>

All routes are prefixed with `/api/v1/`.

## Authentication Routes

- **Register User**
  - POST: `/api/v1/auth/register`
  - ```
    {
        "name": "User Name",
        "email": "user@gmail.com",
        "password": "your_password_here",
        "password_confirmation": "your_password_here"
    }
    ```
  - Response: a new API token (Sanctum token).

- **User Login**
  - POST: `/api/v1/auth/login`
  - ```
    {
        "email": "john@example.com",
        "password": "your_password_here"
    }
    ```
  - Response: a new API token (Sanctum token).

- **User Logout**
  - POST: `/api/v1/auth/logout`
  - Requires an API token (Sanctum token) obtained during login.

<br /><hr /><br />
