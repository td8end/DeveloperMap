# Current status
* backend POST receiver works, frontend POST sender does not
* Filtering the map and users works. Could use some more server calls for actual DB queries
* Somewhere on the client side, there is a fetch request limit of 1000. We have 800 users currently
* I'm working in the testing branch. Run adds and commits often if you're changing files so we don't lose anything. Talk to the team before deleting anything.
* **We need to talk out our presentation, lets iron that out before 0945 EST**
## TODO before lunch
* Finish the form input (some values are not nullable, I think we have some JSON mismatch stuff, this is very doable, the curl works)
* TRY to setup a query endpoint so that we can return the unit name on the cards, should be a join of personnel.id and unit_id
* TRY to finish a patch endpoint (this requires us to work out the kinks in the form input)
**we have a hard stop point of 1230 EST. whatever we have then is what we present 1245 to 1300 we're going to amend the lessons learned and more time sections** (this actually flexes based on what time they tell us we're going to present, but let's assume we present right after lunch)

### lessons learned (please edit this with your own experiences)
* Something in our seed files needs work. We're not resetting our index values. The following is required to get new entries to index correctly:
```
SELECT setval('personnel_id_seq', (SELECT MAX(id) FROM personnel));
```
### what we would have done with more time (again please edit)
* more backend queries. 

### At the end of this thing I'll merge it all into origin main
