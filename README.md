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
|   15.12.23    | 0.0.6 |Realisieren: Fortsetzung, Projektdokumentation aktualisieren. |
|   22.12.23    | 0.0.7  | Realisieren: Abschliessen und Projektdokumentation fertigstellen. |

## 1 Informieren

### 1.1 Ihr Projekt

Wir haben uns entschieden, selbst eine Projektidee auszudenken. Unsere Applikation soll ein "Fitness-Journal" darstellen, wo der Benutzer Workouts eintragen kann, um seine Fitness-Reise festzuhalten. Also so eine Art Fitness-Tagebuch.


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
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
