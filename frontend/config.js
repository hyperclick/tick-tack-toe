// Настройки для фронтенда
const isLocal = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1' || 
                window.location.hostname === ''; // Добавили пустую строку

const CONFIG = {
    // ИИ или вы сами измените этот адрес перед публикацией
    API_ROOT: isLocal 
        ? 'http://localhost:3000/api/' 
        : 'https://my-api.layero.app/api/'
};
