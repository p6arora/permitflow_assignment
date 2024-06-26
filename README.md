# PermitFlow Assessment

## Objective

Assignment: https://permitflow.notion.site/Software-Engineer-Case-Study-9d274bd8b3774c60aaf18cd46abb5bde

The objective of this project was to design a Questionaire for contractors to determine if a permit is needed & what steps do they need to get approval for their renovation. It uses the following tech stack:

* Next.js
* React
* Node.js
* TypeScript
* Tailwind
* tRPC
* Prisma
* Zod
* PostgreSQL
* pgAdmin (optional)

## Screenshots

| ![Initial Landing Page](misc/Screenshots/QuestionairePage.png) | 
|:--:| 
| *Initial Questionaire Page* |

| ![Questionaire With Options](misc/Screenshots/QuestionairePageWithOptions.png) | 
|:--:| 
| *Questionaire Page with all options for User* |

| ![Results](misc/Screenshots/ResultsPage.png) | 
|:--:| 
| *Result Page showing user next steps* |

| ![Database](misc/Screenshots/Database.png) | 
|:--:| 
| *pgAdmin showcasing new entry into database* |

| ![File Hierarchy](misc/Screenshots/fileHiearchy.png) | 
|:--:| 
| *File Hierarchy* |

## Video Demo

https://www.youtube.com/watch?v=uSY7qdOXiwI

## Setup Instructions

### Containers

There are Postgres and Redis containers. To spin them up, use:

```
docker compose up -d
```

which will start a Postgres container on `localhost:5432` and a Redis container on `localhost:6379`.

### Starting the dev server

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### IDE

Any IDE/Code Editor of your choice will suffice, but my recommendation is Visual Studio Community. 

Official Microsoft Mirror: https://visualstudio.microsoft.com/downloads/


Clone/Download from the repository and execute the .sln file. The command line message will guide you through the program

## Author

Paarth Arora

e: paarth.arora21@gmail.com

p: 437-937-1942
