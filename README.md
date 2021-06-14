<p align="center">
  <h3 align="center">Background Jobs with Bull and Nest.js</h3>

  <p align="center">
    This is an application made to learn background jobs with the bull library.
    <br />
    <a href="https://github.com/lucfersan/bg-jobs-bull"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/lucfersan/bg-jobs-bull/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucfersan/bg-jobs-bull/issues">Request Feature</a>
  </p>
</p>

## 📚 About The Project

I've searched about background jobs, so I've made this project to apply the knowledge I've gotten with some tutorials and the Nest documentation.

I've enjoyed working with background jobs especially with the mail feature because it returns a response for the user without having to wait for all the processes finalize.

## 🧰 Built With

- [Nest](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs/)
- [Bull](https://optimalbits.github.io/bull/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [NestJS Mailer](https://nest-modules.github.io/mailer/)
- [Ethereal](https://ethereal.email/)

## 🚀 Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lucfersan/bg-jobs-bull
   ```
2. Install NPM packages
   ```sh
   yarn
   ```
3. Create a database and a Postgres server using docker or your local machine.
4. Run the migrations
   ```sh
   yarn prisma migrate dev --name init
   ```

## 💻 Running the app

```bash
# development
$ npm run start
or
$ yarn start

# watch mode
$ npm run start:dev
or
$ yarn start:dev

# production mode
$ npm run start:prod
or
$ yarn start:prod
```

## 🔺 Prisma Studio

```bash
$ yarn prisma studio
```

## 🗞️ License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Lucas Fernandes - fernandes.lucas11@outlook.com
