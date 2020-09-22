# front-end

Deployed: https://vercel.com/bw-better-professor-1/front-end

Components:
- Login: log in to an existing account
- Signup: create a new account
- Dashboard: landing page for the app; show reminders
    - View Students/Projects/Reminders: show all Xes
    - View Student/Project/Reminder: select one X from the list and show it
    - Edit Student/Project/Reminder: edit an existing X or make a new one

Styled Components:
- StyledApp: for App, background styles
- StyledLogin: for Login/Signup
- StyledList: for ViewStudents/Projects/Reminders
- StyledSingle: for ViewStudent/P/R and EditStudent/P/R

NOTES:
- Instead of calling Axios, import, invoke, and call axiosWithAuth:
> axiosWithAuth().get("url")

As soon as the backend endpoints are deployed, I'll edit aWA with the base url, so you only have to worry about the specific endpoint.
Remember to invoke () aWA or it won't work.

- import and use PrivateRoute instead of Route to build a router route that requires sign-in to view. It works exactly like the regular Route.

STORE:
- React-redux connect provides the following:

props:
- students, projects, reminders: arrays of data
- error: most recently logged axios error

actionMakers:
- getInitialData
- putTo, postTo, deleteFrom - put, post, or delete to a specified endpoint. Requires a store type (imported from actions/index.js).