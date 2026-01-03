/*                 
How the DOM really works and how DOM works internally?
-----------------------------------------------------

What is DOM?
--> DOM is interface between all javascript code and the browser, or more specifically HTML documents that are rendered in and by the browser
--> DOM allows us to make javascript interact with the browser and more specifically we can create and modify and delete elements , set styles and classes and attributes and listen and respond to events.
--> In practice this works becuase DOM tree is generated from any HTML document and a DOM tree is a tree like structure made out of nodes which looks like something like this (see an attached image in How the DOM really works folder image name tree-structure.)
--> we can interact with the tree.

How does interaction actually works?
Ans: DOM is a very complex API (Application Programming interface) so its the interface that we can use to programatically interact with the DOM. In practice, that means that the DOM contains a ton of methods and properties that we use to interact with the DOM tree such as the 
.querySelector(), addEventListener(), .createElement(), .innerHTML, .textContent, .children etc. In the DOM there are different type of nodes. For example some nodes are HTML elements but others are just text.

How the DOM API is organized behind the scenes?
--> so first every single node in the DOM tree is of the type node. And such as everything else in javascript, each node is represented in javascript by an object. This object gets access to special node methods and properties, such as text content, child nodes, parent nodes, clone nodes and many others. Now we already know there 
are different types of nodes. 

So how should these be represented?
--> This node type has a couple of child types so to say. And these are the element type, the text type, the comment type and also the document type. SO whenever there is a text inside any element, it gets its own node. And that node will be of the type text. And the same actually happens for HTML comments and that's because the rule is that 
everything that's in the HTML has to go in to the DOM as well. Now for the element itself there is the element type of node. And this type of node gives each HTML element access to a ton of useful properties such as innerHTML, class list, children or parent element etc. There are also many useful methods like append, remove, insertAdjacentHTML, querySelector, closest and that's just
to name a few. So again, each element will be represented internally as an object. The element type has internally an HTML element, child type. And that element type itself has exactly one child type for each HTML element that exists in HTML. So, we have special type for buttons, special type for images, for links and so on and so forth. And thats important because each of these HTML
elements can have different unique properties. For example, has a source attribute in HTML which no other element has or the anchor element for links has the href attribute which also no other element has. And so the DOM needs the way of storing these different attributes and therefore different types of HTML elements were created in the DOM API. what makes all of this work is something called 
inheritance.

What is inheritance?
--> Well inheritance means that all the child types will also get access to the methods and properties of all their parent node types. For example an HTML element will get access to everything from the element type like innerHTML, classList or all these other methods and properties. And besides that it will also get access to everything from the node type because that is also its parent type. So we 
can think of this as though the HTML button element for example is also an element and also a node.

Document node type
----------------
--> So document which we use all the time in DOM manuplation is in fact just another type of node. So, it contains important methods such as querySelector, createElement and getElementById and note that how querySelector is available on both the document and element types.

--> The DOM API actually needs a way of allowing all the node types to listent to events. we usually listent for events by calling the addEventListener method.

Why does that actually works?
--> Its becuase there is special node type called event target which is a parent of both the node type and window node type so with this, thanks to inheritance we can all addEventListener on every single type of node in DOM API because all elements as well as document and window and even text and comment will inherit this method and therefore we will be able to use addEventListener on all of them jsut as if it was
their own method. 


(Take a look at the image (How the DOM API is organized behind the scenes.png))


*/
