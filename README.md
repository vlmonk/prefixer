### Поиск по префиксам (тестовое задание)

Фронтенд лежит в lib/assets/frontend/javascript

Оригинальную csv-шку конвертнул скриптом lib/fix_csv.rb и загнал в постгре:
> \copy prefixes(prefix, comment) FROM 'fixed.csv' with delimiter ',' csv
