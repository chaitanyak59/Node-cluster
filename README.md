# Basic Express App with Cluster Mode

This is a basic express application, which is created to test the performance when cluster mode is enabled. <br />
Project has been written in typescript and uses <b>autocannon</b> for load test

## Getting Started

<b> Note: </b> During Load test , your system might slow down,
since it uses OS functionalities and this test utilizes a good amount of Ram and CPU.

I have configured load test for 5000 concurrent + pipelined requests.You can change the values in package.json if required
### Prerequisites
1) Pull Project in your local
2) Goto Project Directory and do npm install

```
a.Development Mode
```
### Usage

cmd: npm start (Project will run in port 6000) <br />
<b>Autocannon:</b> After triggering the server, <i>run npm run cannon</i>

```
b.Production Mode
```
### Usage
<i><b>important: stop Dev server if running <br/></b></i>
cmd: npm pm2-start (Project will run in Cluster Mode, based on available cores) <br />
<b>Autocannon:</b> After triggering the server, <i>run npm run cannon</i>


## Built With

* [Typescript-Code]
* [Node](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Auto Cannon](https://www.npmjs.com/package/autocannon) - For emulating Concurrent Requests
* [PM2](https://pm2.keymetrics.io/) - For enabling Cluster Mode

## Authors

* **Chaitanya Kumar** - *Initial work* - [Chaitanya](https://gist.github.com/chaitanya-apty)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
