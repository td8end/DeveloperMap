## Backend-Frontend integration
* We need PUT and PATCH endpoints
* We could handle initial landing by changing our entry endpoint to a query of like the top 1000 users
* We could handle a search query like is civilian or has asi at the backend
* I think it would be cool to fake like 100,000 users and limit this with backend queries
* *Would searching like this solve the sorting and filtering problems Chris was having on Friday?*
* **How does the backend team need to adjust the API to meet the frontend team's needs, based on their work so far?**
## Presentation stuff
* We can work on this tomorrow
## What do we have to have done today to have a working project?
* CRUD endpoints
* cookies
## Git
* Pull the dev branch 
```
git fetch origin
git checkout dev
```
**It may not make sense to branch today, I recognise that; but I wanted to learn how to do this properly** 
```
git checkout -b frontend  
git checkout -b backend  
```
do commits while working
```
git add -A
git commit -m
```
merge safely
* frontend
```
git pull origin dev
git checkout dev
git merge frontend  
git push -u origin dev
```
* backend
```
git pull origin dev
git checkout dev
git merge backend
git push -u origin dev
```
* end of day
```
git fetch origin
git checkout main
git merge dev
git push origin main
