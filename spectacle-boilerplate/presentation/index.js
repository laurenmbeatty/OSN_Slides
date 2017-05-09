// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Link,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    black: "#000",
    blue: "#233d4d",
    teal: "#048a81",
    lavender: "#8a89c0",
    purple: "#5d576b",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#8a89c0"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

var listStyle = {
  "list-style": "none"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        controls={false}
      >
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Falling in Love
            with PostCSS
          </Heading>
          <Text margin="200px 60% 0" textColor="tertiary" size={5}>
            @LaurenBeatty13
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Let's talk CSS
          </Heading>
          <Appear fid="1">
            <Text margin="50px auto" textColor="primary" size={5}>
              What do you love about it?
            </Text>
          </Appear>
          <Appear fid="2">
            <Text margin="50px auto" textColor="primary" size={5}>
              What drives you crazy?
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            PAIN Points
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Consistency</ListItem>
            <ListItem>Spec is slow to be adopted</ListItem>
            <ListItem>Cross-browser issues</ListItem>
            <ListItem>Preprocessors can be slow</ListItem>
            <ListItem>Hard to keep files from becoming bloated</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Searching for a CSS solution:
          </Heading>
          <List style={listStyle} textColor="primary">
            <Appear fid="3">
              <ListItem>Modern CSS (wanted Babel for CSS)</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Sass features without full implementation</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>Helped with Cross-browser issues</ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem>Minified/Optimized</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Enter PostCSS
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            What is it?
          </Heading>
          <Appear fid="7">
            <Text margin="50px auto" textColor="primary" size={5}>
              Open Source Ecosystem of JavaScript Plugins that transform CSS
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            What is it really?
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Node.JS module</ListItem>
            <ListItem>Parses CSS -&gt; AST (abstract syntax tree)</ListItem>
            <ListItem>Plugin performs functionality</ListItem>
            <ListItem>AST -&gt; String -&gt; File</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            What can it do?
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Work with OR replace preprocessor</ListItem>
            <ListItem>Lints CSS</ListItem>
            <ListItem>Minifies/Optimizes</ListItem>
            <ListItem>Autoprefixer</ListItem>
            <ListItem>Like Babel for CSS</ListItem>
            <ListItem>Create Style Guides</ListItem>
            <ListItem>Compress images</ListItem>
            <ListItem>Open Source--Low barrier of entry</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Why I Chose PostCSS
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Minification</ListItem>
            <ListItem>Custom Properties/variables</ListItem>
            <ListItem>Sass features</ListItem>
            <ListItem>Needed something Flexible/Low Overhead</ListItem>
            <ListItem>Many solutions with one tool</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Getting Started with PostCSS
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Build Tools
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Gulp</ListItem>
            <ListItem>Grunt</ListItem>
            <ListItem>Webpack</ListItem>
            <ListItem>Rollup</ListItem>
            <ListItem>CLI</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            PostCSS with Gulp
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/gulp.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Demos
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            cssnext()
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Use Future CSS Today</ListItem>
            <ListItem>No Waiting for Browser Support</ListItem>
            <ListItem>My favorite: Custom Properties</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Custom Properties Before
          </Heading>
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/pre-cssnext.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Custom Properties After
          </Heading>
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/post-cssnext.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            PreCSS
          </Heading>
          <Text textColor="primary">Most Sass Features</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="white">
            Sass Variables
          </Heading>
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/sass-variables.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="white">
            @import and Mixins
          </Heading>
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/import.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="white">
            Finished Product
          </Heading>
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/precss-final.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Grid-Kiss
          </Heading>
          <List style={listStyle} textColor="primary">
            <ListItem>Draw a grid</ListItem>
            <ListItem>Essentially WYSIWYG</ListItem>
            <ListItem>Fun but finicky</ListItem>
            <ListItem>
              I used
              {" "}
              <Link
                href="http://asciiflow.com/"
                target="_blank"
                textColor="primary"
              >
                ASCII flow
              </Link>
              {" "}
              to generate
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/pre-grid.example")}
            margin="0 auto"
            width="100%"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="teal">
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/post-grid.example")}
            margin="0 auto"
            width="100%"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <CodePane
            lang="css"
            source={require("raw-loader!../assets/post-grid-too.example")}
            margin="0 auto"
            width="100%"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue">
          <Heading size={1} textColor="primary">UnCSS</Heading>
          <Text textColor="primary">Removes Unused CSS</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="teal">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            UnCSS Gulp setup
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/uncss.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="blue" textColor="blue">
          <Heading size={6} textColor="primary" caps>PostCSS Resources</Heading>
          <List style={listStyle}>
            <ListItem transition={["zoom"]}>
              <Link
                textColor="primary"
                href="https://github.com/postcss/postcss/tree/master/docs"
                target="_blank"
              >
                Docs
              </Link>
            </ListItem>
            <ListItem transition={["zoom"]}>
              <Link
                textColor="primary"
                href="http://postcss.parts/"
                target="_blank"
              >
                PostCSS Parts---Plugins by Feature
              </Link>
            </ListItem>
            <ListItem transition={["zoom"]}>
              <Link
                textColor="primary"
                href="https://webdesign.tutsplus.com/series/postcss-deep-dive--cms-889"
                target="_blank"
              >
                PostCSS Deep Dive
              </Link>
            </ListItem>
            <ListItem transition={["zoom"]}>
              <Link
                textColor="primary"
                href="http://api.postcss.org/"
                target="_blank"
              >
                Plugin Development API
              </Link>

            </ListItem>
            <ListItem transition={["zoom"]}>
              <Link
                textColor="primary"
                href="https://coggle.it/diagram/WNEjE6UN2QABtWtn/d2e7c0bbb2eb211016dcbf87917739b5f56dd6deafcb4ace12cae788e4b63766"
                target="_blank"
              >
                Link to my research Coggle
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank you!</Quote>
            <Cite>@LaurenBeatty13</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
