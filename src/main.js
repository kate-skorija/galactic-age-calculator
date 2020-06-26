import { User } from './../src/Calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let userAge = parseInt($("#userAge").val());
    let userLifeExpectancy = parseInt($("#userLifeExpectancy").val());

    let user = new User(userAge, userLifeExpectancy);
    user.earthYearsRemaining();
    user.calculateMercury();
    user.calculateVenus();
    user.calculateMars();
    user.calculateJupiter();
    
    $("#planets").show();

  });
});