# Подключение Google Sheets к тесту

Таблица уже создана:
https://docs.google.com/spreadsheets/d/1iF2mMhMBY0WOSc3gwr4NGs4CpOB3KEfOfy9PSSIrLEE/edit

## Что нужно сделать в Google

1. Откройте таблицу.
2. Выберите `Расширения -> Apps Script`.
3. Удалите пример кода и вставьте код из файла `google-sheets-apps-script.js`.
4. Нажмите `Deploy -> New deployment`.
5. В типе выберите `Web app`.
6. `Execute as`: Me.
7. `Who has access`: Anyone.
8. Нажмите `Deploy`.
9. Скопируйте Web App URL.

## Web App URL

Скрипт опубликован как Web App:

```text
https://script.google.com/macros/s/AKfycbzepUAQinDyIze3XpH-AG_zHgdLYrf7XxX37pmvF8jytekgCsFcqIMla6K4bNWFetdR/exec
```

Этот URL уже вставлен в `visa-readiness-test.html`, а `visa-readiness-test-bitrix.html` пересобран.
