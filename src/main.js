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
    $("#imgMercury").click(function() {
      $("#mercuryResults").show();
      $(".mercuryAge").text(user.mercuryAge);
      $(".mercuryYearsLeft").text(user.yearsLeftOnMercury);
    });
    $("#imgVenus").click(function() {
      $("#venusResults").show();
      $(".venusAge").text(user.venusAge);
      $(".venusYearsLeft").text(user.yearsLeftOnVenus);
    });
    $("#imgMars").click(function() {
      $("#marsResults").show();
      $(".marsAge").text(user.marsAge);
      $(".marsYearsLeft").text(user.yearsLeftOnMars);
    });
    $("#imgJupiter").click(function() {
      $("#jupiterResults").show();
      $(".jupiterAge").text(user.jupiterAge);
      $(".jupiterYearsLeft").text(user.yearsLeftOnJupiter);
    });
  });
});