# Login Formular

## Frontend
    - Login Formular
    - Daten aus dem Formular abschicken
    - wenn Daten richtig sind, die zusätzlichen Userdaten anzeigen

## Backend
    - Es soll Login Daten empfangen
    - soll die erhaltenen Daten in einer Datenbankl abgleichen
    - wenn die Daten richtig sind, die zusätzlichen userdaten aus der Datenbank zurückschicken

### Vorgehen:
    x Datenbank mit (User-)Daten
        - Datenstruktur --> Array mit Objekten

    x Routen:
        - POST-Route für login Informationen
            - welche Daten kommen an: {uname: 'blabla, password: 'xxx'}
    
    x Logik:
        - User in Datenbank suchen
        - Passwort vergleichen
        - (User-)Daten aus Datenbankl auslesen

    x Response:
        - Error bei falschen Eingaben
        - Userdaten zurück


#### Abhängigkeiten: 
    - express
    - lowdb








