## Spiffing-node

Write CSS using proper English in ruby apps with Spiffing. 

Spiffing is a node module version of [Spiffing CSS](http://spiffingcss.com/) by [@idiot](https://twitter.com/idiot), a CSS preprocessor for British developers, or developers who prefer to write proper English.

### Usage

    spiffing

Convert all css files under current directory

    spiffing <directory>

Convert all css files under specified directory

    spiffing <filename>

Convert the css file specified

### What this does

    /* Your well-spelt CSS */
    
    body {
      background-colour: grey !please;
      transparency: 0.5;
      text-align: centre;
      font-weight: plump;
      text-transform: capitalise;
    }
    
    .frame {
      background-photograph: url('/queen.png') !please;
    }

becomes

    /* Output CSS */
    
    body {
      background-color: gray !important;
      opacity: 0.5;
      text-align: center;
      font-weight: bold;
      text-transform: capitalize;
    }
    
    .frame {
      background-image: url('/queen.png') !important;
    }
