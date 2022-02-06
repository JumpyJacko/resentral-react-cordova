# Overview
This is a project which endeavoured to create both a redesign of the Australian
Student and School Management system, [Sentral](https://www.sentral.com.au/)
as well as a mobile client for it.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and is wrapped with [Cordova](https://cordova.apache.org/).

Also, this reSentral was developed with The Forest Highschool's timetable
colours, but it is possible to fork and develop a branch for other schools if
that is wanted.

# Developing for this Project
Good luck lol, I learnt the basics of React two days into making this project.

# Build from source (but I don't know how to write the guide for building from
source)
You need a full android development environment set up, follow [Cordova's guide](https://cordova.apache.org/docs/en/10.x/guide/platforms/android/)
on how to do that.

Otherwise, the brief overview is to:
1. Clone this repo
2. Run `npm install`
3. Run `npm run build` in the root directory
4. Copy the `build/` folder's components to `cordova/www` and replacing what is
   needed to be replaced
5. Run `cordova platform add android`
6. Run `cordova build android`
7. Installing the apk in the directory which is output from the `build` command
