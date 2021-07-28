import angular from "angular";
import data from "./data.json";
import "./styles.css";

angular.module("gridApp", []) 
  .controller('gridController', function() {
    var self = this;
    self.record = data
})


// app.controller('gridController', function( $http) {
//     $http.get("./data.json")
//     .then( (response) => {this.record = response.data;});
// })