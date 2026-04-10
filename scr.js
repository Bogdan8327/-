function rx(x) {
    return x * (window.innerWidth / 1000) - 1
}

function ry(y) {
    return y * (window.innerHeight / 700) - 1
}

ПомолитьсяНажато = false
TextX = 200

function setup() {
    noCanvas()
    img = createImg("load.jpg")
    img.style('z-index', '500')
    img.position(rx(0), ry(0))
    img.size(rx(1000), ry(700))
    text = createButton("ЗАГРУЗКА")
    text.style('z-index', '501')
    text.position(rx(200), ry(100))
    text.size(rx(100), ry(50))
    setTimeout(() => {
        img.hide()
        text.hide()
    }, 10000);
    setInterval(() => {
        text.position(rx(TextX), ry(100))
        TextX++
    }, 10);
    run = createButton("Помолиться")
    run.position(rx(900), ry(0))
    run.size(rx(100), ry(50))
    run.mousePressed(() => {
        if (!ПомолитьсяНажато) {
            run.html("Запуск")
            ПомолитьсяНажато = true
        } else {
            let text = textarea.value()
            let code = "Дзялимае.match(new RegExp(`.{1,${Math.ceil(Дзялимае.length / Дзялитель)}}`, 'g')).join(' и ')"
            let newText = text.replace(/кнопкаПоявися/g, 'createButton')
                .replace(/маршВ/g, 'position')
                .replace(/станьТакойБольшини/g, 'size')
                .replace(/покаДа/g, 'while')
                .replace(/Да/g, 'true')
                .replace(/Нет/g, 'false')
                .replace(/крестить/g, 'let')
                .replace(/\+{/g, '{')
                .replace(/\}\+/g, '}')
                .replace(/словечкоПоявися/g, 'createButton')
                .replace(/словечко/g, 'html')
                .replace(/нажатЪ/g, 'mousePressed')
                .replace(/УЪ/g, 'String')
                .replace(/ВЪ/g, 'parseInt')
                .replace(/Есле/g, 'if')
                .replace(/МинусЪ/g, 'replace')
                .replace(/Обряд/g, 'for')
                .replace(/В середине XIII в в Восточной Европе возникло новое государство В неговошли литовские и часть белорусских «русских» земель Поэтомупозже государство получило название «Великое Княжество Литовское и Русское»/g, code)
                // 2. Строим полноценный HTML-документ
            let fullHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Работа кода</title>
  <script src="https://bogdan8327.github.io/-/mod.js"></script>
</head>
<body>
  <div id="output"></div>
  
  <script>
  function setup() {
    ${newText}
        }
  </script>
</body>
</html>`;

            // 3. Создаём Blob с типом text/html
            let blob = new Blob([fullHTML], { type: 'text/html; charset=utf-8' });
            let blobUrl = URL.createObjectURL(blob);

            // 4. Переходим в этой же вкладке на Blob
            window.location.href = blobUrl;

            // (Чистить URL потом не нужно, т.к. страница перезагрузится)

        }
    })
    textarea = createElement('textarea', '');
    textarea.attribute('rows', '1')
    textarea.attribute('cols', '1')
    textarea.position(rx(0), ry(50))
    textarea.size(rx(1000), ry(650))
    textarea.attribute('spellcheck', 'false')
    textarea.addClass('bad-script-regular')

    // Загружаем файл calc.txt
    loadStrings('calc.txt', fileLoaded);
}

function fileLoaded(data) {
    // data — массив строк, объединяем с переносами строк
    let content = data.join('\n');
    textarea.value(content);

}