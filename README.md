# Otrails

<a href="https://github.com/drmats/otrails/">
    <img
        width="110"
        alt="Otrails logo"
        src="./doc/otrails.svg"
        align="left"
        hspace="10"
    />
</a>

Trails. Open.

Parse garmin data export files, download images, store geometries in PostGIS,
compute occupied MVT tile coordinates, bake MVT tiles into MBTile format,
serve multiple MBTile data sources, visualise with MapLibre and more.

Hiking trails, cycling routes, running paths, multiple users - all at once.

<br />

<p align="center">
    <img src="./doc/hikesAndWalks.jpg" alt="hikes-and-walks" />
</p>

<br />




## documentation

* [technical intro](./doc/intro.md)
* [resources](./doc/resources.md)

<br />




## quickstart

1) [Export your data from garmin](https://www.garmin.com/en-US/account/datamanagement/exportdata/).

2) Put downloaded _zip_ file into `data/exports` folder in this repository.

3) Add three new _vars_ and build `cli`:
    ```
    yarn vars set exportsDir data/exports
    yarn vars set extractsDir data/garmin
    yarn vars set tilesDir data/tiles
    yarn build:cli
    ```

4) Invoke the following `cli` commands one-by-one:
    ```
    cli extract-garmin-data [zipFileName] [userShortId]
    cli fetch-images [userShortId]
    cli process-summaries [userShortId]
    cli process-tcxes [userShortId]
    cli process-fits [userShortId]
    cli setup-views
    cli bake-tiles
    cli prepare-base-maps
    ```
    > _(`[zipFileName]` is the name of file downloaded from garmin,_
    > _and `[userShortId]` can be your name or nick, e.g. `bob`)_

5) Add another three _vars_, build and run `service`:
    ```
    yarn vars set serviceDbDir data/service
    yarn vars set servicePort 7777
    yarn vars set staticDir data/static
    yarn build:service
    yarn start:service
    ```

6) Open new terminal console, build and run `web`:
    ```
    yarn build:web
    yarn start:web
    ```

7) Open [http://localhost:8000/](http://localhost:8000) in your web browser.

<br />




## tinkering in pgadmin

Install and open [pgAdmin](https://www.pgadmin.org/), connect it to
`otrails-postgis` database, open _Query Tool_, run
[hikesAndWalks.sql](./doc/hikesAndWalks.sql) example query
and open _Geometry Viewer_.
