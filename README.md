# front-end

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