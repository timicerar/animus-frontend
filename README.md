# Aljatera/Animus Next.js Application

This README provides instructions on how to launch the application locally and deploy it to cPanel for production.

## 🖥️ Getting Started Locally

Follow these steps to set up and run the application on your local machine:

**1. Clone or Fork the Project 📁**

Clone the repository or fork it to your GitHub account and then clone your fork.

```bash
git clone https://github.com/timicerar/animus-frontend.git
```

**2. Install Dependencies 👨‍💻**

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

**3. Create a `.env.local` File 🔑**

Create a .env.local file in the project root, copy variables from the .env file into it, and set them according to your local environment requirements.

```
NEXT_PUBLIC_ENVIRONMENT= # local | development | production

NEXT_PUBLIC_APP_DOMAIN= # http://localhost:3000 | [APP_DOMAIN]

NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=

ROBOTS_ALLOW= # true | false

PAYPAL_CLIENT_SECRET=
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
NEXT_PUBLIC_PAYPAL_MERCHANT_ID= # Add if needed
```

**4. Run the Development Server 💻**

Start the development server:

```bash
npm run dev
```

## 🚀 Deploying to cPanel

To deploy the application to cPanel, follow these detailed steps:

**1. Set Up Environment Variables for Production 🔑**

Ensure your `.env` file is correctly configured with production variables before building the application.

**2. Build the Application 🧱**

Build the production version of your app (make sure your application is not running locally):

```bash
npm run build
```

**3. Prepare Files for Deployment 🚛**

- Copy the contents of the `static` folder from `.next` to `.next/standalone/.next`.
- Copy the contents of the `public` folder, **excluding the locales folder**, to `.next/standalone/public`.
- **Archive (zip)** the contents of the `.next/standalone` folder.

**4. Upload Files to cPanel ⬆️**

1. Log in to cPanel: https://moj.neoserv.si/.
2. In the dashboard, go to `File Manager`.
3. Create a directory named `animus-frontend`.
4. Upload the `standalone.zip` file into the `animus-frontend` directory and extract it.

**5. Set Up Node.js Application 🛠️**

1. Go back to the cPanel dashboard and click on `Setup Node.js App`.
2. Click `Create Application` and configure the following settings:
   - **Node.js version**: Select the **latest version** available.
   - **Application mode**: Select `Production`.
   - **Application root**: Enter `animus-frontend`.
   - **Application startup file**: Enter `server.js`.
3. Add all necessary environment variables (if needed).

**6. Verify Deployment 🧑‍💻**

After completing the steps above, your application should be accessible at:
https://aljatera.com.

## 🚀 Deploying to Vercel

An alternative deployment method is to use Vercel, which is optimized for Next.js applications. The app has already been set up and deployed to Vercel.

You can view the live deployment here:
https://animus-frontend.vercel.app/

**Steps for Deploying to Vercel:**

1. Log in to `Vercel` with your GitHub account.
2. Click `New Project` and import your GitHub repository.
3. During setup:
   - Ensure the Framework Preset is set to Next.js.
   - Add all necessary environment variables.
4. Click Deploy.

   Vercel will build and deploy your app automatically.