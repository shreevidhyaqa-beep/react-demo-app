# Routing
Directing the user to different views

# Routing in react
 react router dom
 ```
 npm i react-router-dom
 ```
 ## built in components
 <BrowserRouter>---wraps your app, and enables to access browser history navigation
 <Routes>,<Route>---map uRL with Components
 <Link>without refreshing whole page


 ## state 
 state is built in js Object, used to represent about component that has changed


 ## hooks
  Special functions provided by react, let you to hook into features of react(state,routing,lifecycle)
  * useState
  * useNavigate
  * useEffect(side effect) -->when i want to perform some tasksn outside of  standard rendering, load products using fetch/axios api, setting timer, browser window directly

## formik yup
```
npm install formik yup
```
# formik does?
manages state, submission handling, validation
single hook----> useFormik

# what yup does?
schema validation for forms

## props
login ---username,role
navbar ---> needs info of user
products--->needs user info
edit profile--->user 
app-->navbar
app-->products

app--layout--maincontent--products--productcard
<layout user={user}>

//create context--->navbar,Products,profile

# Axios--->
```
npm install axios
```
* library-- promise based library

* Will automatically convert response into JSON objects
  * if fetch is used (response.json())

* Automatically throws erros for statuscodes(other 2xx)
    if fetch used (response.Ok)

## React.memo
* caches the result of whole component, if the component's property has not changed then react skips rendering and reuse the last render result

## Usememo(Hook)
* to cache the result of calculation, don't want to run the calculation on every render.
* mainly used in filtering sorting, complex calculation

## UseCallback(Hook)
it caches function definition between renders
