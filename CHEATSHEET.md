---
marp: true
paginate: true
---

# Tag 4: Arbeiten mit APIs

## Ziele des Tages
- **Grundlagen von REST APIs** verstehen.
- **Postman nutzen**, um API-Requests zu testen.
- **API-Requests mit JavaScript (fetch & .then)** schreiben.
- **Fehlerhandling bei API-Anfragen** implementieren.

---

# Was ist eine API?

- **API (Application Programming Interface)** = Schnittstelle zwischen Anwendungen.
- APIs bieten strukturierte Daten in Form von **JSON** oder **XML**.
- Beispiele:
  - **Wetter-APIs** (OpenWeatherMap).
  - **To-Do-API** (JSONPlaceholder).
  - **Social-Media-APIs** (Twitter, GitHub).

---

# Arten von APIs

### **1. REST API (Fokus heute)**
- Ressourcenorientiert (z. B. `/todos`, `/users`).
- Nutzt **HTTP-Methoden** (`GET`, `POST`, `DELETE`).
- Gibt meist **JSON** zurück.

### **2. GraphQL API**
- Ein einziger Endpunkt (`/graphql`).
- Client bestimmt selbst, welche Daten er braucht.

### **3. SOAP API**
- Älteres Protokoll, verwendet **XML**.
- Strenger Standard, oft in Unternehmenssoftware.

---

# Was ist eine REST API?

- REST = **Representational State Transfer** (Architekturstil für APIs).
- **Prinzipien:**
  - Ressourcen haben **eindeutige URLs**.
  - Nutzung von **HTTP-Methoden**:
    - `GET`: Daten abrufen.
    - `POST`: Daten erstellen.
    - `DELETE`: Daten löschen.
  - Antwortformat ist meistens **JSON**.

---

# API-Requests mit Postman

## Warum Postman?
- **Ermöglicht es, API-Requests zu testen, ohne Code zu schreiben.**
- **Zeigt API-Antworten als JSON an.**
- **Unterstützt GET, POST, DELETE, etc.**

---

# Demo: JSONPlaceholder API

## **GET-Request:** Lade To-Dos  

   - URL: `https://jsonplaceholder.typicode.com/todos`
   - Antwort: Liste von To-Dos im JSON-Format.

---

# Demo: JSONPlaceholder API

## **POST-Request:** Neues To-Do erstellen  
   - URL: `https://jsonplaceholder.typicode.com/todos`
   - JSON-Body:
     ```json
     {
       "title": "Neues To-Do",
       "completed": false,
       "userId": 1
     }
     ```

---

# Demo: JSONPlaceholder API

## **DELETE-Request:** To-Do löschen  
   - URL: `https://jsonplaceholder.typicode.com/todos/1`
   - Antwort: `200 OK` (To-Do erfolgreich gelöscht).

---

# API-Requests mit JavaScript (`fetch`)

### **Daten abrufen (GET)**
```javascript
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log('To-Dos:', data))
  .catch(error => console.error('Fehler beim Abrufen:', error));
```

---

# API-Requests mit JavaScript (POST)

### **Neue Daten senden (POST)**
```javascript
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Neues To-Do',
    completed: false,
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log('Neues To-Do:', data))
  .catch(error => console.error('Fehler beim Erstellen:', error));
```

---

# API-Requests mit JavaScript (DELETE)

### **Daten löschen (DELETE)**
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'DELETE'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }
    console.log('To-Do gelöscht');
  })
  .catch(error => console.error('Fehler beim Löschen:', error));
```

---

# Fehlerhandling bei API-Requests

- **Netzwerkprobleme** (z. B. Server nicht erreichbar).
- **Falsche Endpunkte** (`404 Not Found`).
- **Serverfehler** (`500 Internal Server Error`).

**Lösung: HTTP-Status prüfen**
```javascript
if (!response.ok) {
  throw new Error(`HTTP-Fehler: ${response.status}`);
}
```

**Lösung: `.catch()` für Fehlerhandling**
```javascript
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => console.error('Fehler:', error));
```

---

# Übungsaufgaben

### **Aufgabe 1: API-Requests in Postman ausführen**
- **GET:** Lade die To-Do-Liste.
- **POST:** Erstelle ein eigenes To-Do.
- **DELETE:** Lösche ein To-Do.

### **Aufgabe 2: API-Requests mit JavaScript schreiben**
- **GET:** Lade die To-Dos und zeige sie in einer HTML-Liste an.
- **POST:** Füge ein Formular hinzu, um neue To-Dos zu erstellen.
- **DELETE:** Ergänze einen „Löschen“-Button für jedes To-Do.

---

# Erweiterte Aufgabe: Wetter-API

- **Verwende die OpenWeatherMap API:**
  - Lade die Wetterdaten für eine Stadt.
  - Zeige Temperatur und Wetterbeschreibung an.
  - **Endpunkt:**  
    `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`.
- **Bonus:** Fehlerhandling einbauen.

---

# Fazit & Nächste Schritte

### **Heute gelernt:**
✅ Was REST APIs sind und wie sie funktionieren.  
✅ API-Requests mit **Postman** testen.  
✅ API-Requests mit **JavaScript** umsetzen.  
✅ Fehlerhandling in **API-Requests** integrieren.  

### **Nächster Tag:** **CSS-Frameworks (Bootstrap)**
- **Warum Frameworks?** Styling vereinfachen.
- **Grundlagen von Bootstrap:** Grid-System, Buttons, Formulare.
- **Unsere API-Daten schön präsentieren!**
