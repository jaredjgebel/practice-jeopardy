# Practice Jeopardy!

Practice answering clues from the iconic television show _Jeopardy!_ in a flash-card, take as much time as you want, style.

## Client

The front end was built with create-react-app. State and actions are managed with Redux, while the user interface uses styled-components. The clue information is gathered using the Fetch API.

## Server

I (carefully) pulled data for the clues from the very useful [jService.io](http://jservice.io). The clues are being served by the Heroku add-on mLab, which provides a MongoDB database environment as a service. Finally, a simple Express server delivers the production build of the site and the route to get the clues.
