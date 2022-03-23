// получаем модуль Express
const express = require("express");
// получаем модуль Cors
const cors = require('cors');
// создаем приложение
const app = express();

const PORT = process.env.PORT || 5000

// обработка функции middleware
app.use(cors()); 

// обработка переадресации
app.get("/rates",function (request, response) {
    response.redirect("https://mini.forexite.com/forex_quotes.html")
});

// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("multiCurrency, version 1.0.0");

});

// начинаем прослушивание подключений на 5000 порту
app.listen(PORT, () => console.log(`Сервер начал прослушивание запросов на порту ${ PORT }`));