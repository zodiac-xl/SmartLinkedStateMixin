## react-smart-link-state ![NPM version](https://img.shields.io/npm/v/react-deep-link-state.svg?style=flat)

A React mixin for linking form fields to a deep structure of data within the component&#39;s state.

same as react-nest-link-state  but more smart;

### Installation
```bash
$ npm install react-smart-link-state
```

### Example
```js
var SmartLinkedStateMixin = require('react-smart-link-state');
```

    mixins: [SmartLinkedStateMixin],

### API

check this file: `index.js`
    
    getInitialState () {
        return {
            a: [
                {
                    b: [1, 2]
                },
                {
                    c: [2, 3]
                }
            ]
        }
    },

* nestLinkedState
    
        let context = this; 
        //default this;you can set parent context to modify parent state  
        
        valueLink={this.nestLinkedState(["a",0,"b",1],context)}  
        //bind to this.state.a[0].b[1]   is 2
        
* nestObject {getValue,setValue,arrSplice,arrPush}
        
        newState = {this.nestObject(this.state,["a",0,"b",1]).getValue()}  
        // result 2
        
        newState = {this.nestObject(this.state,["a",0,"b",1]).setValue(3)}  
        // return newObject
        
        
            {
                a: [
                    {
                        b: [1, 3]
                    },
                    {
                        c: [2, 3]
                    }
                ]
            }
                    
          newState = {this.nestObject(this.state,["a",0,"b"]).arrSplice(0,2)}  
          // equal array.splice but return hole Object

            
                {
                    a: [
                        {
                            b: []
                        },
                        {
                            c: [2, 3]
                        }
                    ]
                }
                
         arrPush is short for   arrSplice   
                
### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT license
Copyright (c) 2015 [object Object]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor]()
built upon love by [docor](git+https://github.com/turingou/docor.git) v0.3.0
