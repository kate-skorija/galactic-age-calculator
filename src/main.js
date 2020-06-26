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

    if (user.yearsOverEarth) {
      let longLived = (`You are ${user.earthAge} years old, and you have outlived your Earth life expectancy by ${user.yearsOverEarth} years!`)
      $(".earthResults").text(longLived);
    } else {
      let earthResult = (`Your are ${user.earthAge} years old, and you have ${user.yearsLeftOnEarth} years remaining on planet Earth.`)
      $(".earthResults").text(earthResult);
    }
    
    $("#planets").show();
    $("#imgMercury").click(function() {
      $("#mercuryResults").show();
      $(".mercuryAge").text(user.mercuryAge);
      if (user.yearsOverEarth) {
        $(".mercuryYearsLeft").text(`You are ${user.yearsOverMercury} years over your Mercury life expectancy!`);
      } else {
        $(".mercuryYearsLeft").text(user.yearsLeftOnMercury);
      }
    });
    $("#imgVenus").click(function() {
      $("#venusResults").show();
      $(".venusAge").text(user.venusAge);
      if (user.yearsOverEarth) {
        $(".venusYearsLeft").text(`You are ${user.yearsOverVenus} years over your Venus life expectancy!`);
      } else {
        $(".venusYearsLeft").text(user.yearsLeftOnVenus);
      }
    });
    $("#imgMars").click(function() {
      $("#marsResults").show();
      $(".marsAge").text(user.marsAge);
      if (user.yearsOverEarth) {
        $(".marsYearsLeft").text(`You are ${user.yearsOverMars} years over your Mars life expectancy!`);
      } else {
        $(".marsYearsLeft").text(user.yearsLeftOnMars);
      }
    });
    $("#imgJupiter").click(function() {
      $("#jupiterResults").show();
      $(".jupiterAge").text(user.jupiterAge);
      if (user.yearsOverEarth) {
        $(".jupiterYearsLeft").text(`You are ${user.yearsOverJupiter} years over your Jupiter life expectancy!`);
      } else {
        $(".jupiterYearsLeft").text(user.yearsLeftOnJupiter);
      }
    });
  });
});