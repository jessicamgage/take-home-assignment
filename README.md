# Culdesac Take Home

Please modify the README to include any additional instructions needed to compile and run your code. You can optionally provide any feedback you have on this interview prompt.

## Setup

1. Make sure you have these requirements installed:
- [Python 3.8](https://www.python.org/downloads/)
- [Node 14.17+](https://nodejs.org/en/download/)
- [pipenv](https://pipenv.pypa.io/en/latest/) (Note: you may need to run `pip3 install --user pipenv` instead of `pip install --user pipenv`)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

2. Install the backend
```bash
(/)$ cd backend
(backend)$ pipenv install --dev
```

3. Install the frontend
with yarn:
```bash
(/)$ cd frontend
(frontend)$ yarn install
```

## Run
1. Run the backend server
```bash
(/)$ cd backend
(backend)$ pipenv run python manage.py runserver
```

2. Run the frontend server
```bash
(/)$ cd frontend
(frontend)$ yarn start
```

3. Visit http://localhost:3000

## Unit testing

### Run backend unit tests
```bash
(/)$ cd backend
(backend)$ pipenv run pytest
```

### Run frontend unit tests
```bash
(/)$ cd frontend
(frontend)$ yarn run test
```

### Borrowed snippets of code:
```
Translating .csv files to Django rest calls: https://www.senlev.com/blog/05-11-2021-working-with-csv-files-in-django-react

Resolution of code-breaking Recharts bug:
https://stackoverflow.com/questions/68030699/recharts-line-chart-not-rendering

```