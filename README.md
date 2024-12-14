## Health Assessment chatbot

#### Install all the packages:

`npm install —legacy-peer-deps`

#### Make an account on [neon.tech](https://console.neon.tech/realms/prod-realm/protocol/openid-connect/auth?client_id=neon-console&redirect_uri=https%3A%2F%2Fconsole.neon.tech%2Fauth%2Fkeycloak%2Fcallback&response_type=code&scope=openid+profile+email&state=suLhFXykuuU58I6SCCXYQw%3D%3D%2C%2C%2C&ref=/app/projects/rapid-frost-76552912/branches/br-quiet-feather-a4b2ugww/tables)

![image](https://github.com/user-attachments/assets/05451fcd-ac78-45ff-95b0-2a9ab516147e)

Create `.env.local` file and paste [YOUR MODAL KEY] and [POSTGRES_URL]

![image](https://github.com/user-attachments/assets/d9484c3b-4daf-4caa-9999-04b7090d2014)

#### Sync the database

`npm run db:generate`

`npm run db:migrate`

#### Run Locally

`npm run dev`
