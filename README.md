<p align="center">
  <img width="240" src="https://gridonic.github.io/assets/images/logos/gridonic.svg"><br>
  This is your Captain speaking, welcome to our command line interface.
</p>

<br>

## Installation

It’s advised to install it globally. Just run `$ npm install --global @gridonic/cli`.

<br>

## How to use?

Give it a try and run `$ gridonic` within your shell.

<br>

## How does it work?

It’s basically just a wrapper function, which looks for a set of npm packages that we have [defined]. Each npm package exposes as set of flags and commands that dynamically hook into our `gridonic` command. 

So if you run one of the npm package’s command, we just forward the input arguments and flags to the actual “binary” of that npm package. That’s it. 

This gives us the flexibility to maintain and improve commands/flags outside of our CLI without needing to make a release for each change of the respective npm package. 

#  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>


[defined]: https://github.com/gridonic/cli/blob/master/src/apps.js#L13-L17
