To run with docker
docker build -f ./Dockerfile -t playwrighttest .
docker run --network host --rm -v $(pwd):/home/app/ --entrypoint npm playwrighttest run chrome_test

To run on local:

    npm install
    npx playwright test --project=chrome
