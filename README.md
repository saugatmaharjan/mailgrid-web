# MailGrid
Send email with ease.

## Project Details
This web app enabled users to send an email from within the app. The app uses `Mialgun` and `Sendgrd` to send emails. The app first try to send the email through `Mailgun` and if in case it fails it will try to send through `Sendgrid` again. If it still fails the app will show an error message to an user.

I've create simple NodeJS server to send emails. You can find the source code for the server in my another repo here [MailGrid Server](https://github.com/saugatmaharjan/mailgrid-server)

Please be noticed tha, since the `Mailgun` and `Sendgrid` account that I've used is sandbox account, the email sending will fail. I will have to manually add varyfied email accounts to may Mailgun and Sendgrid account.

## Tech stack
- Single page application of web using `ReactJS` app link [MailGrid](https://inspiring-kare-d8a73a.netlify.com) and github link [MailGrid Web](https://github.com/saugatmaharjan/mailgrid-web)
- Simple `NodeJS` server using `NestJS`, github repo [MailGrid Server](https://github.com/saugatmaharjan/mailgrid-server)
- `Netlify` for hosting client app
- `Heroku` for hosting NodeJS server

## Links to other projects that I've worked on
- [Resource Projects](https://resourceprojects.org/)
- React native app SkjutsGruppen
  - Android app [SkjutsGruppen](https://play.google.com/store/apps/details?id=nu.skjutsgruppen.skjutsgruppen&hl=en) 
  - IOS app [SkjutsGruppen](https://apps.apple.com/us/app/ideella-r%C3%B6relsen-skjutsgruppen/id1370886185)

## Install the dependencies
### `yarn` or `yarn install`

## Update enviroment variables
Create a .env file at the root directory by copying the .env.example and update the values

## Run application
### `yarn start`
This should run the application locally on port `http://localhost:3000`

## Build the application
### `yarn build`
This will create a `build` directory at the root level and put the productino code in it from where you can serve for production
