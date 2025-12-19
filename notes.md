
- When we want a any space not to go on next line:
  white-space: nowrap;



#  Playlist start: 12/05





- Can use this 2 primary color in coming days i like this: #bfbfbf, #b2beb5



# I've also store the idnex and the lastVolume Value in the localStorage so next time user can start from there. 

# Generally i can't import a modules files inside a inline js but if i change a type="module"
that inline js file i can import it.


during a module import export if there's the only single export don't need to imoprt witht the curly brace without curly brace work:
    import movieList from "./src/music-list.js";




# In JavaScript, document.documentElement is a fundamental property that refers to the root element of an HTML document. This property provides a way to access and manipulate the entire HTML document structure. 





#- for accesing a url of the page we can use: document.documentURI;



- Temporal Dead Zone (TDZ): Variables declared with let and const exist in a TDZ from the beginning of their scope until their declaration is processed. Any attempt to access them during this period results in a ReferenceError.


# in given string the st.replaceAll(" ", ""), will remove all the space from the given string.


**One module imports others:** HTML loads only `main.js`, which imports all other modules. The browser follows the import chain automatically.

**Module dependencies:** When `main.js` imports `volumeModule.js`, the browser automatically fetches and loads it. No separate `<script>` needed.

**Shared scope:** Modules imported by `main.js` can share variables and functions through imports/exports.

**Single entry point:** Like a main function in programming, everything starts from one file and branches out.

**Browser handles dependencies:** It builds a dependency tree starting from your main script, loading everything needed.









