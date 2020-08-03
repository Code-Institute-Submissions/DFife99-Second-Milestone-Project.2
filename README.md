## Sources

* Images 
    * https://commons.wikimedia.org/wiki/File:Milky_Way_Galaxy_shimmering_over_Nanga_Parbat,_Pakistan.jpg
    * For galaxy.jpg

    * https://www.flickr.com/photos/nasakennedy/28557696438
    * For astronaut.jpg

    * https://www.goodfreephotos.com/astrophotography/sunrise-over-the-earth.jpg.php
    * for sunrise-over-the-earth-800.jpg

    * https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=space-rocket-launching-73871.jpg&fm=jpg
    * for nasa-launch.jpg
    * https://www.goodfreephotos.com/albums/other-photos/rocket-launching-from-spaceX.jpg
    * for spacex-launch.jpg

* Code 
    * For the alternating text on the learn more sections on spec.html (editted for use)
    * $(this).html() == "Show Less" ? $(this).html('Learn More') : $(this).html('Show Less');

## Bugs 

* Image on the home page go onto the next div instead of filling the div it was in
    * fixed it by making the container relative and the text absolute

* .click for jquery wasnt working and didnt find the div element
    * This was fixed after a google search, using $(document).on('click','element',function())

* Jquery was overwriting css display:none for the bouncing scroll 
    * this was fixed by adding an if statement that checks the window width

* CTA was moving under the next div and staying at bottomm left
    * Fixed by using position absolute with left 50% + transform-50% to center it

* footer icons would all merge together when trying to center align
    * Fixed by using display:inline/inline-block

* Found a bug with the rocket button not changing the button text if you switch rockets while the text is extended
    * Fixed by replacing 'this' with  the button class