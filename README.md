# Single SPA - Micro Frontends

This project was created with [Create Single SPA](https://github.com/single-spa/create-single-spa).

## Getting Started Locally

Once you clone this repo go into the terminal and install dependencies for each of the apps.

```shell
npm install
```

Now you're ready to serve the development build.

```sh
npm run start
```

After all the dependencies are installed and apps are started
open [http://localhost:9000](http://localhost:9000)

## Deployment

When pushing new code into the main branch of the repository the deployment github action will build the application and push the build files on a AWS S3 Bucket, the files are served from AWS CloudFront CDN service. Each micro frontend is built and deployed separately.
You can follow the link below to check the deployment.

[Deployed Single SPA](https://d2x0suc8dgrdto.cloudfront.net/)
