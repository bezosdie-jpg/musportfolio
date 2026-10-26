# musportfolio

Минималистичное портфолио для аудио/видео работ на Astro + GitHub Pages.

## Структура
```
musportfolio/
├─ public/
│  └─ media/          # сюда кладёшь .mp3/.wav/.mp4/.webm
├─ src/
│  ├─ components/     # AudioPlayer, VideoPlayer, WorkCard, Header
│  ├─ data/
│  │  └─ works.json   # метаданные работ
│  ├─ layouts/
│  │  └─ Layout.astro
│  ├─ pages/
│  │  └─ index.astro
│  ├─ styles/
│  │  └─ global.css
│  └─ env.d.ts
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ .gitignore
└─ README.md
```

## Быстрый старт
```bash
# Установка зависимостей
npm install

# Локальная разработка
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview

# Деплой на GitHub Pages
npm run deploy
```

## Как добавить работу

1. **Положи файл в `public/media/`**
   - Аудио: `.mp3`, `.wav`, `.ogg`, `.flac`
   - Видео: `.mp4`, `.webm`, `.mov`
   - Постер для видео (опционально): `.jpg`, `.png`, `.webp`

2. **Добавь запись в `src/data/works.json`**

   Формат объекта:
   ```json
   {
     "id": "уникальный-id",
     "type": "audio" | "video",
     "title": "Название работы",
     "description": "Описание (1–3 предложения)",
     "file": "/media/имя-файла.mp3",
     "poster": "/media/имя-постера.jpg",  // только для видео
     "duration": "3:42"  // опционально, для отображения
   }
   ```

   Пример для аудио:
   ```json
   {
     "id": "my-track",
     "type": "audio",
     "title": "Morning Light",
     "description": "Soft piano piece for early mornings.",
     "file": "/media/morning-light.mp3",
     "duration": "2:30"
   }
   ```

   Пример для видео:
   ```json
   {
     "id": "my-video",
     "type": "video",
     "title": "Studio Session",
     "description": "Behind the scenes of recording.",
     "file": "/media/studio-session.mp4",
     "poster": "/media/studio-session-poster.jpg",
     "duration": "4:15"
   }
   ```

3. **Пересобери и задеплой**
   ```bash
   npm run build && npm run deploy
   ```

## Настройка GitHub Pages

В `astro.config.mjs` укажи свой username:
```js
export default defineConfig({
  site: 'https://ТВОЙ_USERNAME.github.io',
  base: '/musportfolio',
  output: 'static',
  trailingSlash: 'always'
});
```

После первого `npm run deploy` сайт будет доступен по адресу:
`https://ТВОЙ_USERNAME.github.io/musportfolio/`

## Особенности

- **Нативные плееры** — `<audio>` / `<video>` с кастомными контролами на ванильном JS
- **Клавиатурное управление** — Space/K (play/pause), ←/→ (seek ±5s), ↑/↓ (volume), M (mute), F (fullscreen для видео)
- **Доступность** — семантическая разметка, `aria-label`, фокус-стили, `prefers-reduced-motion`
- **Адаптивность** — mobile-first, CSS Grid для карточек
- **Минимализм** — 1 CSS-файл, системные шрифты, без фреймворков

## Лицензия

MIT