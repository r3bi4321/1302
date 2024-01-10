# 1302

# Projekt-Dokumentation


Rebecca Willi und Salma Tanner

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|   10.11.23    | 0.0.1   | Informieren: Gemeinsames Überlegen einer Projektidee, starten mit der Projektdokumentation. |
|   17.11.23    | 0.0.2   |  Planen/Entscheiden: Weiterführen der Projektdokumentation, Aufteilen der Aufträge.                                                            |
|   24.11.23    | 0.0.3   |   Realisieren: Beginn mit der Realisation in aufgeteilten Aufträgen, Projektdokumentation aktualisieren.                                                           |
|   01.12.23    | 0.0.4  | Realisieren: Fortsetzung, Projektdokumentation aktualisieren. |
|   08.12.23 | 0.0.5  | Realisieren: Fortsetzung ,Projektdokumentation aktualisieren. |
|   15.12.23    | 0.0.6 |Realisieren: Abschliessen und Projektdokumentation fertigstellen. |
|   22.12.23    | 0.0.7  | Portfolioeintrag anfertigen. |

## 1 Informieren

### 1.1 Ihr Projekt

Wir haben uns entschieden, selbst eine Projektidee auszudenken. Unsere Applikation soll ein "Fitness-Journal" darstellen, wo der Benutzer Workouts eintragen kann, um seine Fitness-Reise festzuhalten. Also so eine Art Fitness-Tagebuch. Das Ganze haben wir mittels Html/Css/Javascript implementiert.


### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |    Muss          |  Funktional    | Als User möchte ich mich neu registrieren können, um ein eigenes Login zu erhalten.    |
| 2  |      Muss           |  Funktional    |  Als User möchte ich mich mit meinem persönlichen Login anmelden können, um meine Workouts einzusehen.                                 |
| 3  |   Muss              |  Funktional    |    Als ein User möchte ich ein beliebiges Passwort erstellen können, damit ich mich mit dem passenden Username einloggen kann.                                |
| 4  |    Muss             |  Funktional    |    Als ein User möchte ich benachrichtigt werden, wenn das eingegebene Passwort falsch ist, damit ich es nochmals eingeben kann.                                |
| 5 |    Muss             |  Funktional    | Als ein User möchte ich, dass ich nach dem erfolgreichen Login auf die Mainpage weitergeleitet werde, damit ich meine Workouts eintragen kann.                                   |
| 6    |    Muss          |  Funktional    | Als User möchte ich, wenn ich bereits ein Login habe, die Registrierung umgehen können, damit ich mich nicht nochmals registrieren muss.     |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |   Webapplikation aufgerufen, Benutzer befindet sich auf Registrierungspage.           |   Username: Salma/Passwort:salma| Weiterleitung auf Loginpage                   |
| 2.1  |  Webapplikation aufgerufen, Benutzer befindet sich auf Loginpage.            |  Salma/salma       |   Weiterleitung auf Mainpage                |
| 3.1  |   Webapplikation läuft, Benutzer befindet sich auf Registrierungspage.           |  B3liebigesPW       |     Weiterleitung auf Loginpage               |
| 4.1  |  Webapplikation aufgerufen, Benutzer befindet sich auf Loginpage, vorhandener Username bereits eingegeben.            |   huehtoe      |   Invalid username or password. Please try again.                |
| 5.1  |   Webapplikation aufgerufen, Benutzer befindet sich auf Loginpage, vorhandener Username bereits eingegeben.             |  B3liebigesPW       |   Weiterleitung auf Mainpage                |
| 6.1  |   Webapplikation aufgerufen, Benutzer befindet sich auf Registrierungspage.            |  Klick auf "Login" Button       |    Weiterleitung zu Loginpage               |




## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |  24.11.23      |  Salma Tanner         |   Erstellen der Registrerungspage           |    60min           |
| 1.B  |  24.11.23      |  Salma Tanner          |   Erstellen der Eingabefelder, mittels Javascript           |      45min              |
| 2.A  |  24.11.23      | Salma Tanner           |   Erstellen der Loginpage           |      60min              |
| 2.B  |   01.12.23    |   Salma Tanner         |   Erstellen der Eingabefelder, mittels Javascript, Verknüpfung zur Mainpage erstellen           |      60min              |
| 3.A  |  01.12.23     |  Salma Tanner          |    Passwort sicherstellen, dass das Programm dieses auch erkennt und sichert, zusammen mit Username         |      45min              |
| 4.A  |  08.12.23     |  Salma Tanner          |  Überprüfung des Passworts sicherstellen            |      60min              |
| 4.B  |   08.12.23    |  Salma Tanner          |   Asugabefeld für Fehlermeldung bei flaschem Passwort erstellen.           |      60min              |
| 5.A  |   15.12.23     | Salma Tanner           |  Button für Umleitung zu Loginpage einrichten auf Registrierungspage.            |      90min           |

Total: 

## 3 Entscheiden

Wir haben uns dazu Entschieden uns die Arbeit aufzuteilen, dass jeder eigenständig die bestimmten Pages der Applikation implementiert und wir sie dann am Schluss zusammenfügen. Salma: Login/Registrierungspage, Rebecca: Mainpage.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |  24.11.23      |  Salma Tanner         |     60min           | 60min |
| 1.B  |  24.11.23      |  Salma Tanner          |        45min              |45min|
| 2.A  |  24.11.23      | Salma Tanner           |       60min              |60min|
| 2.B  |   01.12.23    |   Salma Tanner         |         60min              |80min|
| 3.A  |  01.12.23     |  Salma Tanner          |          45min              |45min|
| 4.A  |  08.12.23     |  Salma Tanner          |       60min              |60min|
| 4.B  |   08.12.23    |  Salma Tanner          |        60min              | 60min|
| 5.A  |   15.12.23     | Salma Tanner           |       90min           | 100min |


## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |    15.12.23    |  Funktioniert        |  Salma Tanner      |
| 2.1  |   15.12.23     |  Funktioniert        | Salma Tanner       |
| 3.1  |    15.12.23    |  Funktioniert        |  Salma Tanner      |
| 4.1  |    15.12.23    |  Funktioniert        |  Salma Tanner      |
| 5.1  |    15.12.23    |  Funktioniert        |  Salma Tanner      |
| 6.1  |    15.12.23    |  Funktioniert        |  Salma Tanner      |



