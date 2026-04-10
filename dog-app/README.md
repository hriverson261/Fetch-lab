# Dog Facts App

## Application Name
Dog Facts App

## Description
The Dog Facts App is a React application that displays random facts about dogs using an external API. Each time a user requests a new fact, the application tracks how many facts have been viewed during the current session. Users can also save their favorite facts and view them in a list below the main fact card.

## API Used

API Documentation:  
https://dogapi.dog/api/v2/facts

The API returns random dog-related facts that are displayed when the user clicks the **Get Fact** button or when the application first loads.

## Steps to Run the Project Locally

1. Clone the repository

```bash
git clone https://github.com/hriverson261/Fetch-lab.git
```

2. Navigate to the project folder

```bash
cd dog-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the application in your browser

```
http://localhost:5173
```

## Technical Challenge 

One challenge encountered during development was preventing duplicate facts from being saved in the favorites list. Because the API can sometimes return the same fact more than once, users could accidentally save the same fact multiple times.

To solve this problem, a check was added before saving a fact. The application compares the current fact with the facts already stored in the saved facts array using the `.some()` method. If the fact already exists in the list, it is not added again. This ensures that only unique facts appear in the saved facts section and improves the overall user experience.
