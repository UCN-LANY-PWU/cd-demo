# 🐳 Docker Compose Workshop – Orchestration i praksis

## 🎯 Formål
I denne workshop skal du arbejde med at orchestrere en simpel webapplikation bestående af en Node.js-backend og en MongoDB-database ved hjælp af Docker Compose. 

Du vil udvide og sikre applikationen med funktioner som logning, backup og brug af environment variables.

---

## 📦 Mappestruktur
```text
compose-demo/
├── docker-compose.yml
├── app/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
```

---

## 🧠 Læringsmål
- Forstå hvordan flere services samarbejder i en Compose-fil
- Bruge volumes til data og logfiler
- Bruge environment variables til at styre funktionalitet
- Strukturere en applikation så den er klar til deployment

---

## 📝 Opgaver

### 1. Logning
- Tilføj `morgan` middleware til Express til logning af requests
- Logfilerne skal skrives til `/logs/app.log`
- Brug en named volume i Compose til log-mappen

### 2. Backup-endpoint
- Tilføj et `GET /backup` endpoint, som eksporterer alle items fra databasen og gemmer dem som JSON i en mappe `/backup/backup.json`
- Brug en volume til at gemme backup-filerne

### 3. Feature toggle med environment variable
- Tilføj en variabel `ENABLE_POSTS`
- Hvis `false`, skal `POST /` returnere status 403
- Variablen skal defineres i `docker-compose.yml`

### 4. Netværk og test
- Sørg for at `app` servicen kan tilgå `mongo` via hostnavnet `mongo`
- Brug `docker-compose logs` og `docker-compose exec` til at afprøve din løsning

### 5. (Valgfrit) Tilføj en Nginx reverse proxy
- Tilføj en tredje service `nginx`, som sender trafik videre til Node.js
- Brug en volume til at montere en `nginx.conf`

---

## 🚀 Kørsel og test
```bash
docker-compose up --build
```

Test i Postman eller browser:
- `GET /` for at hente data
- `POST /` med `{ "name": "Test" }`
- `GET /backup` for at gemme backup

---

God fornøjelse! ✨
