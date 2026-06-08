# 📝 Application ToDo - Stack PERN (PostgreSQL, Express, React, Node.js)

Cette application est une **ToDo List** complète de type **SPA (Single Page Application)** développée avec la stack **PERN**. Elle permet d'effectuer toutes les opérations de base CRUD (Créer, Lire, Mettre à jour et Supprimer) sur des tâches.

---

## 🚀 Stack Technique Utilisée

L'application repose sur les technologies suivantes :

### 1. Frontend (Client)
*   **React (v19)** : Bibliothèque JavaScript moderne pour la création d'interfaces utilisateur dynamiques et basées sur des composants.
*   **Bootstrap (v4.6.2 via CDN)** : Framework CSS pour le design responsive, la grille de mise en page, les formulaires, boutons et la boîte de dialogue modale d'édition.
*   **Fetch API** : Utilisée pour effectuer des requêtes HTTP asynchrones vers l'API Express.

### 2. Backend (Serveur)
*   **Node.js** : Environnement d'exécution JavaScript côté serveur.
*   **Express (v5.x)** : Framework Web minimaliste pour concevoir l'API RESTful (gestion des routes, middleware, parseurs, etc.).
*   **pg (node-postgres)** : Pilote officiel Node.js pour PostgreSQL, utilisé pour exécuter des requêtes SQL directement depuis le backend.
*   **CORS (Cross-Origin Resource Sharing)** : Middleware permettant la communication sécurisée entre le frontend (`localhost:3000`) et le backend (`localhost:5001`).
*   **Nodemon** : Outil de développement pour redémarrer automatiquement le serveur Node.js lors de la modification de fichiers.

### 3. Base de Données
*   **PostgreSQL** : Système de gestion de base de données relationnelle (SGBDR) robuste pour stocker de manière persistante les tâches.

---

## 🛠️ Fonctionnalités du Projet

*   **Ajouter une tâche (CREATE)** : Formulaire de saisie rapide connecté à l'API via une requête `POST`.
*   **Afficher la liste des tâches (READ)** : Récupération dynamique de toutes les tâches avec une requête `GET` et affichage sous forme de tableau.
*   **Modifier une tâche (UPDATE)** : Fenêtre modale Bootstrap permettant de modifier le libellé d'une tâche avec une requête `PUT`.
*   **Supprimer une tâche (DELETE)** : Suppression instantanée d'une tâche de la liste et de la base de données via une requête `DELETE`.

---

## 📁 Structure du Projet

```text
ToDo_App/
├── client/                 # Partie Frontend (React)
│   ├── public/             # Fichiers publics (index.html avec CDN Bootstrap)
│   ├── src/                # Code source de l'application React
│   │   ├── components/     # Composants réutilisables (InputTodo, ListTodos, EditTodo)
│   │   ├── App.js          # Composant principal assemblant l'interface
│   │   ├── index.js        # Point d'entrée React
│   │   └── App.css / index.css
│   └── package.json        # Dépendances et scripts Frontend
│
├── server/                 # Partie Backend (Express & Postgres)
│   ├── db.js               # Configuration du Pool de connexion PostgreSQL
│   ├── server.js           # Point d'entrée de l'API et définition des routes CRUD
│   ├── database.sql        # Commandes SQL d'initialisation de la base de données
│   └── package.json        # Dépendances et scripts Backend
│
└── README.md               # Documentation globale du projet (ce fichier)
```

---

## ⚙️ Configuration et Installation

Suivez les étapes ci-dessous pour configurer et lancer le projet localement.

### Près-requis
Avoir installé sur votre machine :
*   [Node.js](https://nodejs.org/) (Version LTS recommandée)
*   [PostgreSQL](https://www.postgresql.org/)

---

### Étape 1 : Initialiser la Base de Données

1. Lancez votre terminal ou client PostgreSQL (comme pgAdmin ou `psql` en CLI).
2. Connectez-vous à PostgreSQL.
3. Exécutez les requêtes SQL présentes dans [database.sql](file:///Users/bethel/Documents/ToDo_App/server/database.sql) pour créer la base de données et la table :

```sql
-- Création de la base de données
CREATE DATABASE tododb;

-- Connexion à la base de données tododb (si en ligne de commande psql)
-- \c tododb;

-- Création de la table todo
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

---

### Étape 2 : Configurer et Démarrer le Serveur (Backend)

1. Naviguez dans le répertoire `server` depuis votre terminal :
   ```bash
   cd server
   ```
2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```
3. Vérifiez la configuration de la connexion dans le fichier [db.js](file:///Users/bethel/Documents/ToDo_App/server/db.js). Par défaut, il se connecte à `localhost:5432` avec l'utilisateur `postgres` et aucun mot de passe. Modifiez ces valeurs si nécessaire :
   ```javascript
   const pool = new Pool({
       user: "votre_utilisateur",
       password: "votre_mot_de_passe",
       host: "localhost",
       port: 5432,
       database: "tododb"
   });
   ```
4. Lancez le serveur en mode développement (utilise `nodemon`) :
   ```bash
   npm run dev
   ```
   *Le serveur démarrera sur le port **5001** (`http://localhost:5001`).*

---

### Étape 3 : Configurer et Démarrer le Client (Frontend)

1. Ouvrez un nouveau terminal et naviguez dans le dossier `client` :
   ```bash
   cd client
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez l'application React :
   ```bash
   npm start
   ```
4. L'application s'ouvrira automatiquement dans votre navigateur par défaut à l'adresse suivante :
   `http://localhost:3000`

---

## 🔌 Points d'Accès de l'API (Endpoints REST)

Toutes les requêtes API sont adressées à l'URL `http://localhost:5001/todos` :

| Méthode HTTP | Endpoint | Description | Corps de la requête (JSON) |
| :--- | :--- | :--- | :--- |
| **POST** | `/todos` | Ajouter un nouveau ToDo | `{"description": "Texte de la tâche"}` |
| **GET** | `/todos` | Récupérer tous les ToDos | Aucun |
| **GET** | `/todos/:id` | Récupérer un ToDo spécifique par ID | Aucun |
| **PUT** | `/todos/:id` | Mettre à jour le texte d'un ToDo | `{"description": "Nouveau texte"}` |
| **DELETE** | `/todos/:id`| Supprimer un ToDo spécifique par ID | Aucun |
