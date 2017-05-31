$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Woof</li>");

  });

  $("button#mew").click(function() {
    $("ul#cat").prepend("<li>mew</li>");
    $("ul#dog").prepend("<li>arf arf arf</li>");

  });

  $("button#hiss").click(function() {
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>$*#@* off cat!</li>");

  });
});
