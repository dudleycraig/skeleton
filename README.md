# skeleton 
[Demo](https://functional.org.za:8080)

![dynamic screenshot](https://raw.githubusercontent.com/dudleycraig/deezer/master/assets/screencast.gif)

## installation

### clone repository

> git clone https://github.com/dudleycraig/simfy.git simfy 

### update config to reflect your environment

> vim webpack.config.js
change key 'host:' to your dev servers' domain
```javascript
module.exports = {  
   ...  
   devServer: {  
      ...  
      host:'server-domain'  
   }  
}  
``` 

### pull node modules

> npm install

### run server in development mode

> npm start

## app structure
|  
|- package.json  
|- webpack.config.js  
|- .babelrc  
|- .eslintignore  
|- .eslintrc.json  
|- .tern-project  
|- .vimrc  
|  
|-dist/  
|&nbsp; |- index.js  
|  
|-public/  
|&nbsp; |- index.html  
|&nbsp; |- images  
|  
|-vendor/  
|  |- DZ.js  
|&nbsp;  
|-src/  
|&nbsp; |- actions/  
|&nbsp; |- components/  
|&nbsp; |- containers/  
|&nbsp; |- reducers/  
|&nbsp; |- styles/  
|&nbsp; |- types/  
|&nbsp; |- index.js  
|&nbsp; |- store.js  

## workflow

console based, event driven

## issues
