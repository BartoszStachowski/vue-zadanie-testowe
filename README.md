# Vue - zadanie testowe

## 🛠️ Technologie

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Pinia]([https://pinia.vuejs.org/])
- [Prettier]([https://prettier.io/])
- [Tailwind(CDN)]([https://tailwindcss.com/])

## 🚀 Jak uruchomić projekt

1. Zainstaluj zależności:

```bash
npm install
```

2. Uruchom serwer developerski:

```bash
npm run dev
```

3. Aplikacja będzie dostępna pod adresem:

```
http://localhost:5173
```

## ⚙️ Jak został wygenerowany projekt?

Projekt został utworzony za pomocą oficjalnego narzędzia CLI Vue:

```bash
npm init vite@latest
```

### Uzasadnienie wyboru

Zdecydowałem się na użycie `npm init vue@latest`, ponieważ:

- Vite jest domyślnym bundlerem dla nowoczesnych projektów Vue 3 – szybki, lekki i zoptymalizowany pod kątem DX (Developer Experience).
- Instalowane są tylko **minimalne, niezbędne zależności**, dzięki czemu projekt jest lekki i przejrzysty na starcie.

## 📌 Wymagania

- Node.js w wersji 16+ (zalecana LTS)

## 📚 Linki

- [Dokumentacja Vue](https://vuejs.org/guide/introduction.html)
- [Dokumentacja Vite](https://vitejs.dev/guide/)

## Podejście do obsługi błędów

Stosuję podstawowe podejście z wykorzystaniem **try/catch**.  
Zabezpieczam request na trzech poziomach:

- Zakładam, że backend zwróci komunikat o błędzie – w bloku `catch` przypisuję go do zmiennej i wyświetlam.
- Jeśli backend nie zwróci komunikatu o błędzie, w `catch` ustawiam komunikat: **An unknown error occurred**.
- Jeśli błąd nie zostanie przechwycony przez `catch`, ale `response.ok` zwróci `false`, wyświetlam informację o błędzie z jego `status` i `statusText`, aby ułatwić diagnozę problemu w przyszłości.

Ważne jest, aby użytkownik nie był zdezorientowany – powinien wiedzieć, że coś poszło nie tak. Jednocześnie developerzy muszą mieć łatwą możliwość zidentyfikowania, co się zepsuło i gdzie szukać źródła problemu.
