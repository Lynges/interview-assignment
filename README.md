# BilligVVS opgave ifbm. jobansøgning

Dette er en simpel opgave for at give kandidaten en mulighed for at vise lidt af sin kodestil, evne til at benytte nye teknologier, samt tankegang i forbindelse med opgaveløsning.

Forventet tidsforbrug: 2-3 timer.

Opgaven kan enten løses ved at klone dette repository, og sende et link tilbage - eller blot pakke løsningen i én .zip-fil og sende den til <tab@billigvvs.dk>.

## Opgaven

Kod en simpel webshop, med (som minimum) følgende views:

 * Forside, der viser alle produkter
 * Varekort, hvorfra man kan lægge et produkt i sin kurv
 * Kurv, der viser hvad man har lagt i kurven

Mens opgaven løses, skal følgende spørgsmål overvejes og forberedes til uddybning til næste samtale:

 * Hvordan skal databasestrukturen se ud?
 * Hvorfor laver du applikationsstrukturen som du gør?
 * Hvilke udfordringer kan vi rende i på sigt? Hvorfor?
 * Hvor kan vi få performance bottlenecks på sigt?
 * Hvilke andre systemer/services kan man med fordel udvide med senere?
 * Hvilke features kan der være i en version 2?
 * Hvilke teknologier kan med fordel benyttes til at hoste og deploye denne applikation?
     * Klargør gerne en beskrivelse og/eller tegning af infrastrukturen.

Det er på ingen måder meningen at løsningen skal være en komplet shop, men mere en hjælp til at reflektere over ovenstående spørgsmål.

## Teknologier

I dette repository er der en meget simpel flask (<http://flask.pocoo.org/>) applikation, som skal benyttes som udgangspunkt for løsningen.
Det er tilladt at redigere og ændre i det eksisterende kode.

Data kan med fordel gemmes i en SQLite database. Husk at aflevere database schema, enten som en del af koden, en inkluderet sqlite-fil, eller vedlagt i anden format.

## Brug

For at installere påkrævede pakker:

```
$ pip install -r requirements.txt
```

For at køre applikationen:

```
$ make run
```

## Spørgsmål

Skulle der være nogle spørgsmål til opgaven eller krav til løsningen, kan de stiles til <tab@billigvvs.dk>.
