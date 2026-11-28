/*
This file generates html when you add a header or footer id to a div
Example:    <div id=header></div> on line 12 of index.html
            <div id=footer></div> on line 43 of index.html
This allows you to update the header and footer across your site but editing only this
file, instead of editing every html page when you want to change a link
*/

// Header
// You can use internal (index.html) links to point to pages you have in this website
// or external links (like if you have a store or patreon)
document.querySelector("#header").innerHTML = `
<div id="navLinks">
<div id="mainlinks">
<a id="me" href="index.html"><img src="images/sunface me.png" style="width: 100px; height: auto;" onmouseover="this.src='images/sunface me2.png'" onmouseout="this.src='images/sunface me.png'"></a>
<a id="myart" href="index.html"><img src="images/moon myart.png" style="width: 100px; height: auto;" onmouseover="this.src='images/moon myart2.png'" onmouseout="this.src='images/moon myart.png'"></a>
<h1>xiiekk</h1>
</div>
<div id="links">
<a id="inquiry" href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=xiiekk.business@gmail.com&tf=1"><img src="images/inquirires.png" style="width: 200px; height: auto;"></a>
<a id="cashapp" href="https://cash.app/$xiiiekk"><img src="images/cashap.png" style="width: 200px; height: auto;"></a>
</div>
</div>
`;

// Footer
document.querySelector("#footer").innerHTML = `@xiiekk &#169; 2026 v1.2`; // &#169; is the C copyright symbol
