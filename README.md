# Demo: Orchestrering af en webapp med Docker Compose

Denne demo har fokus på **Docker Compose og orchestration**. Den tager udgangspunkt i en klassisk webstack (Node.js + MongoDB), som er let at forstå og arbejde med for studerende.

## Stack
- **Frontend/backend**: Node.js Express-app (API)
- **Database**: MongoDB
- **Orchestration**: Docker Compose

---

## Sådan kører du demoen

1. Gå til mappen:
   ```bash
   cd compose-demo
   ```

2. Kør med Compose:
   ```bash
   docker-compose up --build
   ```

3. Test i browser eller Postman:
   - `GET http://localhost:3000/` – henter alle items
   - `POST http://localhost:3000/` med JSON: `{ "name": "Kaffe" }`

---

## Læringspointer
- **Orchestration**: Hvordan services samarbejder og starter i rækkefølge
- **Netværk**: Brug af servicenames til kommunikation (f.eks. `mongo`)
- **Volumens og data persistence**
- **Miljøparitet mellem lokal udvikling og produktion**
